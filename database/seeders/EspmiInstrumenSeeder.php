<?php

namespace Database\Seeders;

use App\Models\EspmiIndikator;
use App\Models\EspmiStandar;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

/**
 * Mengimpor 13 standar + 99 indikator instrumen AMI (dari Excel
 * "Instrumen AMI - Sekretaris") ke tabel e-SPMI.
 *
 * Jalankan:  php artisan db:seed --class=EspmiInstrumenSeeder
 * Aman dijalankan berulang: data dicocokkan berdasarkan kode standar & kode
 * indikator (updateOrCreate), jadi tidak menggandakan. Isian/penilaian auditor
 * tidak disentuh.
 */
class EspmiInstrumenSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/data/espmi_instrumen.json');

        if (! is_file($path)) {
            $this->command?->error("File data tidak ditemukan: {$path}");
            return;
        }

        $data = json_decode(file_get_contents($path), true, 512, JSON_THROW_ON_ERROR);

        DB::transaction(function () use ($data) {
            foreach ($data['standars'] as $s) {
                $standar = EspmiStandar::updateOrCreate(
                    ['kode' => $s['kode']],
                    ['nama' => $s['nama'], 'urutan' => $s['urutan']]
                );

                foreach ($s['indikators'] as $i) {
                    EspmiIndikator::updateOrCreate(
                        ['standar_id' => $standar->id, 'kode' => $i['kode']],
                        [
                            'renstra_unaya' => $i['renstra_unaya'],
                            'renstra_lppm' => $i['renstra_lppm'],
                            'capaian' => $i['capaian'],
                            'acuan' => $i['acuan'],
                            'sumber_data' => $i['sumber_data'],
                            'verifikasi' => $i['verifikasi'],
                            'urutan' => $i['urutan'],
                        ]
                    );
                }
            }
        });

        $this->command?->info(
            'Instrumen AMI terimpor: ' . EspmiStandar::count() . ' standar, ' . EspmiIndikator::count() . ' indikator.'
        );
    }
}