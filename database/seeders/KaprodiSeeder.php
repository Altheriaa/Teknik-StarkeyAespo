<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

/**
 * Membuat SATU akun Ka. Prodi untuk SETIAP program studi di config('espmi.program_studi')
 * (saat ini 3 akun). Tiap akun terikat ke satu prodi, bukan akun bersama, dan bukan Auditor.
 *
 *   php artisan db:seed --class=KaprodiSeeder
 *
 * - Password dibuat acak per akun dan hanya ditampilkan SEKALI di layar ini.
 * - Aman dijalankan ulang: akun yang sudah ada tidak diubah (password tidak ditimpa).
 * - Nama akun masih generik; ganti dengan nama Ka. Prodi sebenarnya lewat panel admin
 *   (Pengguna > Akun Pengguna).
 */
class KaprodiSeeder extends Seeder
{
    public function run(): void
    {
        $baru = [];

        foreach (config('espmi.program_studi') as $prodi) {
            $username = 'kaprodi_' . Str::slug($prodi, '_');

            $sudahAda = User::where('role', User::ROLE_KAPRODI)
                ->where('program_studi', $prodi)
                ->exists() || User::where('username', $username)->exists();

            if ($sudahAda) {
                $this->command?->warn("Dilewati: akun Ka. Prodi {$prodi} sudah ada.");

                continue;
            }

            $password = Str::password(14, symbols: false);

            User::create([
                'name' => "Ka. Prodi {$prodi}",
                'username' => $username,
                'email' => null,
                'password' => $password, // di-hash otomatis oleh cast 'hashed'
                'role' => User::ROLE_KAPRODI,
                'program_studi' => $prodi,
                'is_active' => true,
            ]);

            $baru[] = [$prodi, $username, $password];
        }

        if ($baru !== []) {
            $this->command?->info('Akun Ka. Prodi dibuat. Catat password ini sekarang, tidak ditampilkan lagi:');
            $this->command?->table(['Program Studi', 'Username', 'Password'], $baru);
        }
    }
}