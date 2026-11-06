<?php

use App\Models\EspmiIndikator;
use App\Models\EspmiIsian;
use App\Models\EspmiStandar;
use App\Models\User;
use Database\Seeders\KaprodiSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->withoutVite();
    Storage::fake(EspmiIsian::DISK);

    $standar = EspmiStandar::create(['kode' => '1', 'nama' => 'Standar Uji', 'urutan' => 1]);
    $this->indikator = EspmiIndikator::create([
        'standar_id' => $standar->id, 'kode' => '1.1', 'capaian' => 'Capaian uji', 'urutan' => 1,
    ]);
    $this->url = "/e-spmi/indikator/{$this->indikator->id}/bukti";

    $this->kaMesin = User::factory()->create([
        'username' => 'ka_mesin', 'email' => null,
        'role' => User::ROLE_KAPRODI, 'program_studi' => 'Teknik Mesin',
    ]);
    $this->kaSipil = User::factory()->create([
        'username' => 'ka_sipil', 'email' => null,
        'role' => User::ROLE_KAPRODI, 'program_studi' => 'Teknik Sipil',
    ]);
});

// ---------------------------------------------------------------- akun

it('seeder membuat satu akun Ka. Prodi per prodi, bukan auditor, tanpa akun bersama', function () {
    User::query()->delete();

    $this->seed(KaprodiSeeder::class);

    $akun = User::where('role', User::ROLE_KAPRODI)->get();
    $prodi = config('espmi.program_studi');

    expect($akun)->toHaveCount(count($prodi))
        ->and($akun->pluck('program_studi')->sort()->values()->all())->toEqual(collect($prodi)->sort()->values()->all())
        ->and($akun->pluck('username')->unique())->toHaveCount(count($prodi))
        ->and($akun->pluck('password')->unique())->toHaveCount(count($prodi))
        ->and(User::where('role', User::ROLE_AUDITOR)->count())->toBe(0);

    // password tersimpan sebagai hash
    $akun->each(fn ($u) => expect($u->password)->toStartWith('$2y$'));
});

it('seeder aman dijalankan ulang dan tidak menimpa password', function () {
    User::query()->delete();

    $this->seed(KaprodiSeeder::class);
    $sebelum = User::where('role', User::ROLE_KAPRODI)->pluck('password', 'username');

    $this->seed(KaprodiSeeder::class);
    $sesudah = User::where('role', User::ROLE_KAPRODI)->pluck('password', 'username');

    expect($sesudah)->toHaveCount(count(config('espmi.program_studi')))
        ->and($sesudah->all())->toEqual($sebelum->all());
});

it('mengosongkan program studi saat peran diganti dari Ka. Prodi', function () {
    $this->kaMesin->update(['role' => User::ROLE_QA_VIEWER]);

    expect($this->kaMesin->fresh()->program_studi)->toBeNull();
});

it('Ka. Prodi login lalu diarahkan ke e-SPMI', function () {
    User::factory()->create([
        'username' => 'kaprodi_x', 'password' => 'rahasia123',
        'role' => User::ROLE_KAPRODI, 'program_studi' => 'Sistem Informasi',
    ]);

    $this->post('/login', ['login' => 'kaprodi_x', 'password' => 'rahasia123'])
        ->assertRedirect('/e-spmi');
});

// ---------------------------------------------------------------- tampilan terkunci ke prodi

it('mengunci halaman e-SPMI Ka. Prodi ke prodinya sendiri', function () {
    EspmiIsian::create(['indikator_id' => $this->indikator->id, 'program_studi' => 'Teknik Sipil',
        'siklus' => 'VI-2026', 'deskripsi' => 'Milik Sipil']);

    // mencoba mengintip prodi lain lewat ?prodi=
    $this->actingAs($this->kaMesin)->get('/e-spmi?prodi=Teknik+Sipil')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('ESpmi/Index')
            ->where('prodi', 'Teknik Mesin')
            ->where('prodiList', ['Teknik Mesin'])
            ->where('canFill', true)
            ->where('canAudit', false)
            ->where('prodiTerkunci', true)
            ->where('standars.0.indikators.0.isian', null));
});

it('mengunci rekap dan laporan PDF Ka. Prodi ke prodinya sendiri', function () {
    $this->actingAs($this->kaMesin)->get('/e-spmi/rekap?prodi=Teknik+Sipil')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('prodi', 'Teknik Mesin')
            ->where('prodiList', ['Teknik Mesin']));

    $this->actingAs($this->kaMesin)->get('/e-spmi/laporan/dt?prodi=Teknik+Sipil')
        ->assertOk()
        ->assertHeader('content-disposition', 'inline; filename=dt-ami-teknik-mesin-vi-2026.pdf');
});

it('menolak Ka. Prodi tanpa program studi', function () {
    $this->kaMesin->forceFill(['program_studi' => null])->saveQuietly();

    $this->actingAs($this->kaMesin->fresh())->get('/e-spmi')->assertForbidden();
    $this->actingAs($this->kaMesin->fresh())->post($this->url, ['siklus' => 'VI-2026', 'deskripsi' => 'x'])
        ->assertForbidden();
});

// ---------------------------------------------------------------- isi bukti

it('Ka. Prodi mengisi link dan deskripsi untuk prodinya', function () {
    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026',
        'link' => 'https://contoh.test/dokumen',
        'deskripsi' => 'SK sudah terbit',
    ])->assertSessionHasNoErrors();

    $isian = EspmiIsian::firstOrFail();
    expect($isian->program_studi)->toBe('Teknik Mesin')
        ->and($isian->link)->toBe('https://contoh.test/dokumen')
        ->and($isian->deskripsi)->toBe('SK sudah terbit')
        ->and($isian->skor)->toBeNull();
});

it('prodi selalu diambil dari akun, bukan dari request', function () {
    $this->actingAs($this->kaMesin)->post($this->url, [
        'program_studi' => 'Teknik Sipil', // upaya mengisi prodi lain
        'siklus' => 'VI-2026',
        'deskripsi' => 'Tetap masuk ke Mesin',
    ])->assertSessionHasNoErrors();

    expect(EspmiIsian::where('program_studi', 'Teknik Sipil')->count())->toBe(0)
        ->and(EspmiIsian::where('program_studi', 'Teknik Mesin')->count())->toBe(1);
});

it('Ka. Prodi tidak bisa mengubah kolom penilaian auditor lewat isi bukti', function () {
    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026',
        'deskripsi' => 'Bukti',
        'skor' => 4, 'hasil_verifikasi' => 'Saya nilai sendiri', 'realisasi' => '2026-12-01',
    ])->assertSessionHasNoErrors();

    $isian = EspmiIsian::firstOrFail();
    expect($isian->skor)->toBeNull()
        ->and($isian->hasil_verifikasi)->toBeNull()
        ->and($isian->realisasi)->toBeNull();
});

it('mengubah bukti tidak menghapus penilaian auditor yang sudah ada', function () {
    EspmiIsian::create(['indikator_id' => $this->indikator->id, 'program_studi' => 'Teknik Mesin',
        'siklus' => 'VI-2026', 'deskripsi' => 'Lama', 'skor' => 3, 'hasil_verifikasi' => 'Kurang lengkap']);

    $this->actingAs($this->kaMesin)->post($this->url, ['siklus' => 'VI-2026', 'deskripsi' => 'Baru'])
        ->assertSessionHasNoErrors();

    $isian = EspmiIsian::firstOrFail();
    expect($isian->deskripsi)->toBe('Baru')
        ->and($isian->skor)->toBe(3)
        ->and($isian->hasil_verifikasi)->toBe('Kurang lengkap');
});

it('menolak link yang bukan http/https', function () {
    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026', 'link' => 'javascript:alert(1)',
    ])->assertSessionHasErrors('link');

    expect(EspmiIsian::count())->toBe(0);
});

it('menolak siklus yang tidak ada di config', function () {
    $this->actingAs($this->kaMesin)->post($this->url, ['siklus' => 'XX-1999', 'deskripsi' => 'x'])
        ->assertSessionHasErrors('siklus');
});

it('hanya Ka. Prodi yang boleh mengisi bukti (auditor, admin, pengguna QA ditolak)', function () {
    $payload = ['siklus' => 'VI-2026', 'program_studi' => 'Teknik Mesin', 'deskripsi' => 'x'];

    foreach ([
        User::factory()->create(['username' => 'aud', 'role' => User::ROLE_AUDITOR]),
        User::factory()->create(['username' => 'qa', 'role' => User::ROLE_QA_VIEWER]),
        User::factory()->admin()->create(),
    ] as $user) {
        $this->actingAs($user)->post($this->url, $payload)->assertForbidden();
    }

    expect(EspmiIsian::count())->toBe(0);
});

it('Ka. Prodi tidak boleh memberi penilaian (simpan) maupun akun nonaktif mengisi bukti', function () {
    $this->actingAs($this->kaMesin)->post("/e-spmi/indikator/{$this->indikator->id}", [
        'program_studi' => 'Teknik Mesin', 'siklus' => 'VI-2026', 'skor' => 4,
    ])->assertForbidden();

    $nonaktif = User::factory()->inactive()->create([
        'username' => 'lama', 'role' => User::ROLE_KAPRODI, 'program_studi' => 'Teknik Mesin',
    ]);
    $this->actingAs($nonaktif)->post($this->url, ['siklus' => 'VI-2026', 'deskripsi' => 'x'])
        ->assertRedirect('/login');

    expect(EspmiIsian::count())->toBe(0);
});

it('tamu diarahkan ke login saat mengisi bukti atau mengunduh berkas', function () {
    $this->post($this->url, ['siklus' => 'VI-2026'])->assertRedirect('/login');
    $this->get('/e-spmi/bukti/1')->assertRedirect('/login');   // id tidak ada
    $isian = EspmiIsian::create(['indikator_id' => $this->indikator->id,
        'program_studi' => 'Teknik Mesin', 'siklus' => 'VI-2026', 'file_path' => 'x.pdf']);
    $this->get("/e-spmi/bukti/{$isian->id}")->assertRedirect('/login'); // id ada: respons sama
});

// ---------------------------------------------------------------- berkas

it('Ka. Prodi mengunggah berkas dan hanya prodinya yang bisa mengunduh', function () {
    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026',
        'file' => UploadedFile::fake()->create('SK Kurikulum.pdf', 200, 'application/pdf'),
    ])->assertSessionHasNoErrors();

    $isian = EspmiIsian::firstOrFail();
    expect($isian->file_nama)->toBe('SK Kurikulum.pdf');
    Storage::disk(EspmiIsian::DISK)->assertExists($isian->file_path);
    expect($isian->file_path)->toStartWith('espmi/VI-2026/teknik-mesin/');

    $this->actingAs($this->kaMesin)->get("/e-spmi/bukti/{$isian->id}")->assertOk()->assertDownload('SK Kurikulum.pdf');

    // Ka. Prodi prodi lain ditolak; auditor boleh (perlu memverifikasi bukti)
    $this->actingAs($this->kaSipil)->get("/e-spmi/bukti/{$isian->id}")->assertForbidden();
    $auditor = User::factory()->create(['username' => 'aud', 'role' => User::ROLE_AUDITOR]);
    $this->actingAs($auditor)->get("/e-spmi/bukti/{$isian->id}")->assertOk();
});

it('menolak berkas dengan format berbahaya atau terlalu besar', function () {
    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026', 'file' => UploadedFile::fake()->create('shell.php', 5, 'application/x-php'),
    ])->assertSessionHasErrors('file');

    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026', 'file' => UploadedFile::fake()->create('besar.pdf', 11 * 1024, 'application/pdf'),
    ])->assertSessionHasErrors('file');

    expect(EspmiIsian::count())->toBe(0);
});

it('mengganti berkas menghapus berkas lama', function () {
    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026', 'file' => UploadedFile::fake()->create('lama.pdf', 10, 'application/pdf'),
    ]);
    $lama = EspmiIsian::firstOrFail()->file_path;

    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026', 'file' => UploadedFile::fake()->create('baru.pdf', 10, 'application/pdf'),
    ]);

    $isian = EspmiIsian::firstOrFail();
    expect($isian->file_nama)->toBe('baru.pdf');
    Storage::disk(EspmiIsian::DISK)->assertMissing($lama);
    Storage::disk(EspmiIsian::DISK)->assertExists($isian->file_path);
});

it('mengosongkan semua isian menghapus baris dan berkasnya jika belum dinilai', function () {
    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026', 'link' => 'https://contoh.test/a',
        'file' => UploadedFile::fake()->create('a.pdf', 10, 'application/pdf'),
    ]);
    $path = EspmiIsian::firstOrFail()->file_path;

    $this->actingAs($this->kaMesin)->post($this->url, ['siklus' => 'VI-2026', 'hapus_file' => 1]);

    expect(EspmiIsian::count())->toBe(0);
    Storage::disk(EspmiIsian::DISK)->assertMissing($path);
});

it('menghapus berkas tidak menghapus baris yang sudah dinilai auditor', function () {
    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026', 'file' => UploadedFile::fake()->create('a.pdf', 10, 'application/pdf'),
    ]);
    EspmiIsian::firstOrFail()->update(['skor' => 4]);

    $this->actingAs($this->kaMesin)->post($this->url, ['siklus' => 'VI-2026', 'hapus_file' => 1]);

    $isian = EspmiIsian::firstOrFail();
    expect($isian->skor)->toBe(4)->and($isian->file_path)->toBeNull();
});

it('auditor mengosongkan penilaian tidak menghapus baris yang masih punya berkas', function () {
    $this->actingAs($this->kaMesin)->post($this->url, [
        'siklus' => 'VI-2026', 'file' => UploadedFile::fake()->create('a.pdf', 10, 'application/pdf'),
    ]);
    EspmiIsian::firstOrFail()->update(['skor' => 3, 'hasil_verifikasi' => 'x']);

    $auditor = User::factory()->create(['username' => 'aud', 'role' => User::ROLE_AUDITOR]);
    $this->actingAs($auditor)->post("/e-spmi/indikator/{$this->indikator->id}", [
        'program_studi' => 'Teknik Mesin', 'siklus' => 'VI-2026',
        'hasil_verifikasi' => null, 'penyebab' => null, 'tindakan_pencegahan' => null,
        'skor' => null, 'realisasi' => null,
    ]);

    $isian = EspmiIsian::firstOrFail();
    expect($isian->skor)->toBeNull()->and($isian->file_path)->not->toBeNull();
});