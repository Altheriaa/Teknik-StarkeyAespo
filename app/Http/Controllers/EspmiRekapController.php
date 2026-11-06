<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Concerns\ResolvesEspmiFilter;
use App\Models\EspmiAudit;
use App\Models\EspmiIsian;
use App\Models\EspmiStandar;
use Illuminate\Http\Request;

/**
 * Halaman Rekap e-SPMI = sheet "HASIL AL" pada instrumen AMI:
 *   A. Identitas Auditee
 *   B. Rekapan Hasil Visitasi Lapangan (per standar + KESIMPULAN)
 * Semua angka dihitung dari database; tidak ada yang disimpan manual.
 */
class EspmiRekapController extends Controller
{
    use ResolvesEspmiFilter;

    public function index(Request $request)
    {
        [$prodi, $siklus, $prodiList, $siklusList] = $this->resolveEspmiFilter($request);

        $skorMax = (int) config('espmi.skor_max');
        $kategori = config('espmi.kategori'); // urut dari batas tertinggi

        // Query 1: daftar standar + jumlah indikatornya
        $standars = EspmiStandar::query()
            ->withCount('indikators')
            ->orderBy('urutan')
            ->get();

        // Query 2: total skor & jumlah indikator yang sudah dinilai, per standar
        $nilai = EspmiIsian::query()
            ->join('espmi_indikator', 'espmi_indikator.id', '=', 'espmi_isian.indikator_id')
            ->where('espmi_isian.program_studi', $prodi)
            ->where('espmi_isian.siklus', $siklus)
            ->whereNotNull('espmi_isian.skor')
            ->groupBy('espmi_indikator.standar_id')
            ->selectRaw('espmi_indikator.standar_id as standar_id, SUM(espmi_isian.skor) as total, COUNT(*) as terisi')
            ->get()
            ->keyBy('standar_id');

        $baris = $standars->values()->map(function ($standar, $i) use ($nilai, $skorMax, $kategori) {
            $jumlah = (int) $standar->indikators_count;
            $skor = (int) ($nilai[$standar->id]->total ?? 0);
            $terisi = (int) ($nilai[$standar->id]->terisi ?? 0);

            return $this->hitungBaris(
                ['no' => $i + 1, 'kode' => $standar->kode, 'nama' => $standar->nama],
                $jumlah, $terisi, $skor, $skorMax, $kategori,
            );
        });

        $kesimpulan = $this->hitungBaris(
            [],
            (int) $baris->sum('jumlah'),
            (int) $baris->sum('terisi'),
            (int) $baris->sum('skor'),
            $skorMax,
            $kategori,
        );

        $audit = EspmiAudit::where('program_studi', $prodi)->where('siklus', $siklus)->first();

        return inertia('ESpmi/Rekap', [
            'prodi' => $prodi,
            'prodiList' => $prodiList,
            'siklus' => $siklus,
            'siklusList' => collect($siklusList)
                ->map(fn ($label, $key) => ['value' => $key, 'label' => $label])
                ->values(),
            'identitas' => [
                'fakultas' => config('espmi.fakultas', 'Teknik'),
                'prodi' => $prodi,
                'dekan' => $audit?->nama_dekan,
                'kaprodi' => $audit?->nama_kaprodi,
                'dtps' => $audit?->dtps ?? [],
                'tim_auditor' => $audit?->tim_auditor ?? [],
                'tanggal_audit' => $audit?->tanggal_audit?->format('Y-m-d'),
                'terisi' => $audit !== null,
            ],
            'baris' => $baris,
            'kesimpulan' => $kesimpulan,
            'legenda' => $this->legenda($kategori),
        ]);
    }

    /**
     * Rumus sama dengan sheet HASIL AL:
     *   Skor Maks = Jumlah Indikator x skor maksimum (4)
     *   % Capaian = Skor Hasil / Skor Maks x 100
     * Indikator yang belum dinilai dihitung 0, tetapi "terisi" ikut dikirim
     * supaya tampilan bisa menandai rekap yang belum lengkap.
     */
    private function hitungBaris(array $info, int $jumlah, int $terisi, int $skor, int $skorMax, array $kategori): array
    {
        $maks = $jumlah * $skorMax;
        $persen = $maks > 0 ? ($skor / $maks) * 100 : 0.0;

        return $info + [
            'jumlah' => $jumlah,
            'maks' => $maks,
            'skor' => $skor,
            'terisi' => $terisi,
            'persen' => round($persen, 2),
            'lengkap' => $jumlah > 0 && $terisi === $jumlah,
            'kategori' => $this->kategoriDari($persen, $terisi, $kategori),
        ];
    }

    private function kategoriDari(float $persen, int $terisi, array $kategori): array
    {
        if ($terisi === 0) {
            return ['label' => 'Belum Dinilai', 'idx' => null];
        }

        foreach ($kategori as $idx => $k) {
            if ($persen >= $k['min']) {
                return ['label' => $k['label'], 'idx' => $idx];
            }
        }

        return ['label' => '-', 'idx' => null];
    }

    /** Tabel keterangan di bawah rekap (85 – 100, 75 – 84, ...), diturunkan dari config. */
    private function legenda(array $kategori): array
    {
        return collect($kategori)->map(function ($k, $i) use ($kategori) {
            $atas = $i === 0 ? 100 : $kategori[$i - 1]['min'] - 1;

            return [
                'idx' => $i,
                'rentang' => $k['min'] > 0 ? "{$k['min']} – {$atas}" : '< ' . $kategori[$i - 1]['min'],
                'label' => $k['label'],
            ];
        })->values()->all();
    }
}