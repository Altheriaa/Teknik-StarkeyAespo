<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Concerns\ResolvesEspmiFilter;
use App\Models\EspmiAudit;
use App\Models\EspmiStandar;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\CarbonInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

/**
 * Laporan cetak e-SPMI = sheet "DT" dan "PTK" pada instrumen AMI.
 *
 *   GET /e-spmi/laporan/dt?prodi=..&siklus=..           -> pratinjau PDF di tab baru
 *   GET /e-spmi/laporan/dt?prodi=..&siklus=..&unduh=1   -> unduh PDF
 *   (PTK sama, di /e-spmi/laporan/ptk)
 *
 * Seluruh isi dihitung dari database; tidak ada angka yang disimpan manual.
 */
class EspmiLaporanController extends Controller
{
    use ResolvesEspmiFilter;

    private const BULAN = [
        1 => 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ];

    public function dt(Request $request)
    {
        return $this->render($request, 'dt');
    }

    public function ptk(Request $request)
    {
        return $this->render($request, 'ptk');
    }

    private function render(Request $request, string $jenis)
    {
        [$prodi, $siklus] = $this->resolveEspmiFilter($request);

        $pdf = Pdf::loadView("espmi.laporan.{$jenis}", $this->kumpulkan($prodi, $siklus))
            ->setPaper('a4', 'landscape');

        $nama = Str::slug("{$jenis} ami {$prodi} {$siklus}") . '.pdf';

        return $request->boolean('unduh') ? $pdf->download($nama) : $pdf->stream($nama);
    }

    private function kumpulkan(string $prodi, string $siklus): array
    {
        $skorMax = (int) config('espmi.skor_max');
        $kategori = config('espmi.kategori');
        $temuanMap = config('espmi.temuan');

        // Satu query: standar -> indikator -> isian (khusus prodi & siklus terpilih)
        $standars = EspmiStandar::with([
                'indikators.isians' => fn ($q) => $q
                    ->where('program_studi', $prodi)
                    ->where('siklus', $siklus),
            ])
            ->orderBy('urutan')
            ->get();

        $baris = [];
        $rekap = [];
        $no = 0;

        foreach ($standars as $i => $standar) {
            $jumlah = 0;
            $terisi = 0;
            $skorTotal = 0;

            foreach ($standar->indikators as $ind) {
                $isian = $ind->isians->first();
                $skor = $isian?->skor;
                $jumlah++;

                if ($skor !== null) {
                    $terisi++;
                    $skorTotal += $skor;
                }

                // Rumus kolom J & K sheet DT; indikator yang belum dinilai
                // tidak dipaksa menjadi KTB (di Excel sel kosong dianggap < 2).
                $temuan = $skor === null
                    ? ['kategori' => 'Belum Dinilai', 'unit' => '-']
                    : ($temuanMap[min(max($skor, 1), $skorMax)] ?? ['kategori' => '-', 'unit' => '-']);

                $baris[] = [
                    'no' => ++$no,
                    'kode' => $ind->kode,
                    'renstra_unaya' => $this->isi($ind->renstra_unaya),
                    'renstra_lppm' => $this->isi($ind->renstra_lppm),
                    'uraian' => $this->isi($isian?->hasil_verifikasi),
                    'penyebab' => $this->isi($isian?->penyebab),
                    'tindakan' => $this->isi($isian?->tindakan_pencegahan),
                    'realisasi' => $isian?->realisasi ? $this->tanggal($isian->realisasi) : '-',
                    'skor' => $skor ?? '-',
                    'kategori' => $temuan['kategori'],
                    'unit' => $temuan['unit'],
                ];
            }

            $rekap[] = $this->hitungRekap(
                ['no' => $i + 1, 'kode' => $standar->kode, 'nama' => $standar->nama],
                $jumlah, $terisi, $skorTotal, $skorMax, $kategori,
            );
        }

        $kesimpulan = $this->hitungRekap(
            [],
            array_sum(array_column($rekap, 'jumlah')),
            array_sum(array_column($rekap, 'terisi')),
            array_sum(array_column($rekap, 'skor')),
            $skorMax,
            $kategori,
        );

        $audit = EspmiAudit::where('program_studi', $prodi)->where('siklus', $siklus)->first();
        $auditor = $this->daftar($audit?->tim_auditor);
        $tanggalAudit = $audit?->tanggal_audit ? $this->tanggal($audit->tanggal_audit) : '-';

        [$romawi, $tahun] = array_pad(explode('-', $siklus, 2), 2, '');

        return [
            'cfg' => config('espmi.laporan'),
            'siklusJudul' => trim("SIKLUS {$romawi} TAHUN {$tahun}"),
            'prodi' => $prodi,
            'fakultas' => config('espmi.fakultas', 'Teknik'),
            'dekan' => $this->isi($audit?->nama_dekan),
            'kaprodi' => $this->isi($audit?->nama_kaprodi),
            'dtps' => $this->daftar($audit?->dtps),
            'auditor' => $auditor,
            'ketuaAuditor' => $auditor[0] ?? '-',
            'tanggalAudit' => $tanggalAudit,
            'baris' => $baris,
            'belumDinilai' => $kesimpulan['jumlah'] - $kesimpulan['terisi'],
            'rekap' => $rekap,
            'kesimpulan' => $kesimpulan,
            'legenda' => $this->legenda($kategori),
            'logo' => public_path(config('espmi.laporan.logo')),
        ];
    }

    /** Rumus sama dengan sheet HASIL AL (dan EspmiRekapController). */
    private function hitungRekap(array $info, int $jumlah, int $terisi, int $skor, int $skorMax, array $kategori): array
    {
        $maks = $jumlah * $skorMax;
        $persen = $maks > 0 ? ($skor / $maks) * 100 : 0.0;

        $label = 'Belum Dinilai';
        if ($terisi > 0) {
            $label = '-';
            foreach ($kategori as $k) {
                if ($persen >= $k['min']) {
                    $label = $k['label'];
                    break;
                }
            }
        }

        return $info + [
            'jumlah' => $jumlah,
            'terisi' => $terisi,
            'maks' => $maks,
            'skor' => $skor,
            'persen' => number_format($persen, 2, ',', '.'),
            'kategori' => $label,
        ];
    }

    /** Keterangan di bawah DT: 85 – 100 Sangat Memenuhi standar, dst. */
    private function legenda(array $kategori): array
    {
        return collect($kategori)->map(function ($k, $i) use ($kategori) {
            $atas = $i === 0 ? 100 : $kategori[$i - 1]['min'] - 1;

            return [
                'rentang' => $k['min'] > 0 ? "{$k['min']} – {$atas}" : '< ' . $kategori[$i - 1]['min'],
                'label' => $k['label'] . ' Standar',
            ];
        })->values()->all();
    }

    private function tanggal(CarbonInterface $tgl): string
    {
        return $tgl->day . ' ' . self::BULAN[$tgl->month] . ' ' . $tgl->year;
    }

    private function isi(?string $teks): string
    {
        $teks = trim((string) $teks);

        return $teks === '' ? '-' : $teks;
    }

    /** @return list<string> */
    private function daftar(?array $item): array
    {
        return array_values(array_filter(array_map('trim', $item ?? []), fn ($v) => $v !== ''));
    }
}