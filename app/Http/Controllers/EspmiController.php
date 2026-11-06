<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Concerns\ResolvesEspmiFilter;
use App\Models\EspmiIndikator;
use App\Models\EspmiIsian;
use App\Models\EspmiStandar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class EspmiController extends Controller
{
    use ResolvesEspmiFilter;

    public function index(Request $request)
    {
        // Prodi & siklus divalidasi terhadap config; Ka. Prodi terkunci ke prodinya sendiri
        [$prodi, $siklus, $prodiList, $siklusList] = $this->resolveEspmiFilter($request);

        $standars = EspmiStandar::with([
                'indikators.isians' => fn ($q) => $q
                    ->where('program_studi', $prodi)
                    ->where('siklus', $siklus)
                    ->with('penilai:id,name'),
            ])
            ->orderBy('urutan')
            ->get()
            ->map(fn ($standar) => [
                'id' => $standar->id,
                'kode' => $standar->kode,
                'nama' => $standar->nama,
                'indikators' => $standar->indikators->map(function ($i) {
                    $isian = $i->isians->first();

                    return [
                        'id' => $i->id,
                        'kode' => $i->kode,
                        'renstra_unaya' => $i->renstra_unaya,
                        'renstra_lppm' => $i->renstra_lppm,
                        'capaian' => $i->capaian,
                        'acuan' => $i->acuan,
                        'sumber_data' => $i->sumber_data,
                        'verifikasi' => $i->verifikasi,
                        'isian' => $isian ? [
                            'link' => $isian->link,
                            'file_nama' => $isian->file_path ? $isian->file_nama : null,
                            'file_url' => $isian->file_path ? url("/e-spmi/bukti/{$isian->id}") : null,
                            'deskripsi' => $isian->deskripsi,
                            'hasil_verifikasi' => $isian->hasil_verifikasi,
                            'penyebab' => $isian->penyebab,
                            'tindakan_pencegahan' => $isian->tindakan_pencegahan,
                            'skor' => $isian->skor,
                            'realisasi' => $isian->realisasi?->format('Y-m-d'),
                            'penilai' => $isian->penilai?->name,
                            'dinilai_pada' => $isian->dinilai_pada?->format('d M Y H:i'),
                        ] : null,
                    ];
                })->values(),
            ]);

        $kesimpulan = collect(config('espmi.kesimpulan'))
            ->map(fn ($d, $skor) => [
                'skor' => $skor,
                'label' => $skor . '-' . $d['label'],
                'status' => $d['status'],
            ])
            ->values();

        return inertia('ESpmi/Index', [
            'standars' => $standars,
            'prodi' => $prodi,
            'prodiList' => $prodiList,
            'siklus' => $siklus,
            'siklusList' => collect($siklusList)
                ->map(fn ($label, $key) => ['value' => $key, 'label' => $label])
                ->values(),
            'skorMax' => config('espmi.skor_max'),
            'kesimpulan' => $kesimpulan,
            'kategori' => config('espmi.kategori'),
            'canAudit' => $request->user()->canAudit(),
            'canFill' => $request->user()->canFillEvidence(),
            'prodiTerkunci' => $request->user()->isKaprodi(),
        ]);
    }

    /**
     * Ka. Prodi mengisi bukti untuk SATU indikator: link dan/atau berkas + deskripsi (noted).
     * Program studi SELALU diambil dari akun yang login, bukan dari request, sehingga
     * Ka. Prodi tidak bisa mengisi untuk prodi lain. Kolom penilaian auditor tidak disentuh.
     */
    public function isiBukti(Request $request, EspmiIndikator $indikator)
    {
        $user = $request->user();
        abort_unless($user->canFillEvidence(), 403);
        abort_unless(in_array($user->program_studi, config('espmi.program_studi'), true), 403);

        $data = $request->validate([
            'siklus' => ['required', Rule::in(array_keys(config('espmi.siklus')))],
            'link' => ['nullable', 'url:http,https', 'max:255'],
            'deskripsi' => ['nullable', 'string', 'max:5000'],
            'file' => ['nullable', 'file', 'max:10240', 'mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,jpg,jpeg,png,zip'],
            'hapus_file' => ['nullable', 'boolean'],
        ], [
            'link.url' => 'Link harus diawali http:// atau https://.',
            'link.max' => 'Link terlalu panjang (maks. 255 karakter).',
            'file.max' => 'Ukuran berkas maksimal 10 MB.',
            'file.mimes' => 'Format berkas harus pdf, doc, docx, xls, xlsx, ppt, pptx, jpg, png, atau zip.',
            'file.uploaded' => 'Berkas gagal diunggah. Periksa ukuran berkas (maks. 10 MB).',
        ]);

        $isian = EspmiIsian::firstOrNew([
            'indikator_id' => $indikator->id,
            'program_studi' => $user->program_studi,
            'siklus' => $data['siklus'],
        ]);

        $berkasLama = $isian->file_path;
        $berkasBaru = null;

        $isian->link = filled($data['link'] ?? null) ? $data['link'] : null;
        $isian->deskripsi = filled($data['deskripsi'] ?? null) ? $data['deskripsi'] : null;

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $berkasBaru = $file->store(
                'espmi/' . $data['siklus'] . '/' . Str::slug($user->program_studi),
                EspmiIsian::DISK,
            );
            $isian->file_path = $berkasBaru;
            $isian->file_nama = Str::limit(basename($file->getClientOriginalName()), 200, '');
        } elseif ($request->boolean('hapus_file')) {
            $isian->file_path = null;
            $isian->file_nama = null;
        }

        if (! $isian->punyaBukti() && ! $isian->punyaPenilaian()) {
            // Semua dikosongkan & belum ada penilaian auditor -> hapus barisnya.
            // file_path di model sudah dikosongkan di atas, jadi berkas lama dihapus eksplisit.
            if ($isian->exists) {
                $isian->delete();
            }
            if ($berkasLama) {
                Storage::disk(EspmiIsian::DISK)->delete($berkasLama);
            }

            return back();
        }

        $isian->save();

        // Berkas lama dibuang hanya setelah data baru berhasil tersimpan
        if ($berkasLama && $berkasLama !== $isian->file_path) {
            Storage::disk(EspmiIsian::DISK)->delete($berkasLama);
        }

        return back();
    }

    /**
     * Unduh berkas data dukung. Ka. Prodi hanya boleh mengunduh berkas prodinya sendiri.
     */
    public function unduhBukti(Request $request, int $isian)
    {
        $user = $request->user();

        // Dicari manual (bukan route model binding) agar tamu selalu diarahkan ke login
        // dan tidak bisa menebak id mana yang ada lewat beda 404/redirect.
        $isian = EspmiIsian::findOrFail($isian);

        abort_if($user->isKaprodi() && $isian->program_studi !== $user->program_studi, 403);
        abort_if(
            blank($isian->file_path) || ! Storage::disk(EspmiIsian::DISK)->exists($isian->file_path),
            404,
        );

        return Storage::disk(EspmiIsian::DISK)->download(
            $isian->file_path,
            $isian->file_nama ?: basename($isian->file_path),
        );
    }

    /**
     * Auditor memvalidasi SATU indikator untuk satu prodi & siklus.
     * Skor berasal dari pilihan Kesimpulan Verifikasi (4/3/2/1);
     * link & deskripsi (bukti dari prodi) tidak diubah di sini.
     */
    public function simpan(Request $request, EspmiIndikator $indikator)
    {
        abort_unless($request->user()->canAudit(), 403);

        $data = $request->validate([
            'program_studi' => ['required', Rule::in(config('espmi.program_studi'))],
            'siklus' => ['required', Rule::in(array_keys(config('espmi.siklus')))],
            'hasil_verifikasi' => ['nullable', 'string', 'max:5000'],
            'penyebab' => ['nullable', 'string', 'max:5000'],
            'tindakan_pencegahan' => ['nullable', 'string', 'max:5000'],
            'skor' => [
                'nullable', 'integer',
                'between:' . config('espmi.skor_min') . ',' . config('espmi.skor_max'),
                'required_with:hasil_verifikasi,penyebab,tindakan_pencegahan,realisasi',
            ],
            'realisasi' => ['nullable', 'date'],
        ], [
            'skor.required_with' => 'Kesimpulan Verifikasi wajib dipilih.',
            'skor.between' => 'Kesimpulan Verifikasi tidak valid.',
            'realisasi.date' => 'Format tanggal Realisasi tidak valid.',
        ]);

        $isian = EspmiIsian::firstOrNew([
            'indikator_id' => $indikator->id,
            'program_studi' => $data['program_studi'],
            'siklus' => $data['siklus'],
        ]);

        $audit = [
            'hasil_verifikasi' => $data['hasil_verifikasi'] ?? null,
            'penyebab' => $data['penyebab'] ?? null,
            'tindakan_pencegahan' => $data['tindakan_pencegahan'] ?? null,
            'skor' => $data['skor'] ?? null,
            'realisasi' => $data['realisasi'] ?? null,
        ];
        $auditKosong = collect($audit)->every(fn ($v) => $v === null || $v === '');

        $isian->fill($audit);

        if ($auditKosong) {
            // Penilaian dikosongkan.
            if ($isian->exists) {
                if (! $isian->punyaBukti()) {
                    $isian->delete();                     // tidak ada isi lain -> hapus baris
                } else {
                    $isian->dinilai_oleh = null;          // bukti prodi tetap, penilaian dihapus
                    $isian->dinilai_pada = null;
                    $isian->save();
                }
            }

            return back();
        }

        // Catat penilai hanya jika ada yang benar-benar berubah
        if (! $isian->exists || $isian->isDirty()) {
            $isian->dinilai_oleh = $request->user()->id;
            $isian->dinilai_pada = now();
            $isian->save();
        }

        return back();
    }
}