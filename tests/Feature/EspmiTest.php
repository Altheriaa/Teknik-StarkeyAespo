<?php

use App\Models\EspmiIndikator;
use App\Models\EspmiIsian;
use App\Models\EspmiStandar;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->withoutVite();

    $this->standar = EspmiStandar::create(['kode' => '1', 'nama' => 'Standar Uji', 'urutan' => 1]);
    $this->indikator = EspmiIndikator::create([
        'standar_id' => $this->standar->id, 'kode' => '1.1', 'capaian' => 'Capaian uji 1',
        'acuan' => 'SM', 'sumber_data' => "(1) Dokumen A;\n(2) Dokumen B", 'verifikasi' => 'Periksa dokumen', 'urutan' => 1,
    ]);
    EspmiIndikator::create([
        'standar_id' => $this->standar->id, 'kode' => '1.2', 'capaian' => 'Capaian uji 2', 'urutan' => 2,
    ]);

    $this->url = "/e-spmi/indikator/{$this->indikator->id}";

    $this->payload = [
        'program_studi' => 'Teknik Mesin',
        'siklus' => 'VI-2026',
        'hasil_verifikasi' => 'Dokumen lengkap',
        'penyebab' => 'tidak ada',
        'tindakan_pencegahan' => 'tidak ada',
        'skor' => 4,
        'realisasi' => '2026-12-15',
    ];

    $this->kosong = [
        'program_studi' => 'Teknik Mesin', 'siklus' => 'VI-2026',
        'hasil_verifikasi' => null, 'penyebab' => null, 'tindakan_pencegahan' => null,
        'skor' => null, 'realisasi' => null,
    ];

    $this->auditor = User::factory()->create(['username' => 'auditor', 'role' => User::ROLE_AUDITOR]);
});

it('mengarahkan tamu ke login saat membuka atau menyimpan e-SPMI', function () {
    $this->get('/e-spmi')->assertRedirect('/login');
    $this->post($this->url, $this->payload)->assertRedirect('/login');
});

it('menampilkan halaman e-SPMI lengkap dengan data instrumen, link, dan deskripsi', function () {
    EspmiIsian::create([
        'indikator_id' => $this->indikator->id, 'program_studi' => 'Teknik Mesin', 'siklus' => 'VI-2026',
        'link' => 'https://contoh.test/dok', 'deskripsi' => 'Bukti dari prodi', 'skor' => 3,
    ]);

    $this->actingAs($this->auditor)->get('/e-spmi')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('ESpmi/Index')
            ->has('standars', 1)
            ->where('standars.0.kode', '1')
            ->has('standars.0.indikators', 2)
            ->where('standars.0.indikators.0.kode', '1.1')
            ->where('standars.0.indikators.0.acuan', 'SM')
            ->where('standars.0.indikators.0.isian.link', 'https://contoh.test/dok')
            ->where('standars.0.indikators.0.isian.deskripsi', 'Bukti dari prodi')
            ->where('standars.0.indikators.0.isian.skor', 3)
            ->where('standars.0.indikators.1.isian', null)
            ->has('kesimpulan', 4)
            ->where('kesimpulan.0.status', 'Terpenuhi')
            ->where('canAudit', true)
            ->where('prodi', 'Teknik Mesin')
            ->where('siklus', 'VI-2026'));
});

it('hanya menampilkan isian milik prodi dan siklus yang dipilih', function () {
    EspmiIsian::create(['indikator_id' => $this->indikator->id, 'program_studi' => 'Teknik Sipil',
        'siklus' => 'VI-2026', 'deskripsi' => 'Punya Sipil', 'skor' => 1]);

    $this->actingAs($this->auditor)->get('/e-spmi?prodi=Teknik+Mesin')
        ->assertInertia(fn (Assert $page) => $page->where('standars.0.indikators.0.isian', null));

    $this->actingAs($this->auditor)->get('/e-spmi?prodi=Teknik+Sipil')
        ->assertInertia(fn (Assert $page) => $page->where('standars.0.indikators.0.isian.deskripsi', 'Punya Sipil'));
});

it('pengguna QA biasa hanya bisa melihat (canAudit = false)', function () {
    $viewer = User::factory()->create(['username' => 'viewer']);

    $this->actingAs($viewer)->get('/e-spmi')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->where('canAudit', false));
});

it('menolak pengguna QA biasa memvalidasi', function () {
    $viewer = User::factory()->create(['username' => 'viewer']);

    $this->actingAs($viewer)->post($this->url, $this->payload)->assertForbidden();

    expect(EspmiIsian::count())->toBe(0);
});

it('auditor memvalidasi satu indikator', function () {
    $this->actingAs($this->auditor)->post($this->url, $this->payload)->assertRedirect();

    $isian = EspmiIsian::first();
    expect(EspmiIsian::count())->toBe(1)
        ->and($isian->indikator_id)->toBe($this->indikator->id)
        ->and($isian->skor)->toBe(4)
        ->and($isian->hasil_verifikasi)->toBe('Dokumen lengkap')
        ->and($isian->realisasi->format('Y-m-d'))->toBe('2026-12-15')
        ->and($isian->program_studi)->toBe('Teknik Mesin')
        ->and($isian->siklus)->toBe('VI-2026')
        ->and($isian->dinilai_oleh)->toBe($this->auditor->id)
        ->and($isian->dinilai_pada)->not->toBeNull();
});

it('menilai tidak menghapus link & deskripsi dari prodi', function () {
    EspmiIsian::create(['indikator_id' => $this->indikator->id, 'program_studi' => 'Teknik Mesin',
        'siklus' => 'VI-2026', 'link' => 'https://contoh.test/dok', 'deskripsi' => 'Bukti prodi']);

    $this->actingAs($this->auditor)->post($this->url, $this->payload);

    $isian = EspmiIsian::first();
    expect(EspmiIsian::count())->toBe(1)
        ->and($isian->link)->toBe('https://contoh.test/dok')
        ->and($isian->deskripsi)->toBe('Bukti prodi')
        ->and($isian->skor)->toBe(4);
});

it('auditor tidak bisa mengubah link/deskripsi lewat permintaan manual', function () {
    EspmiIsian::create(['indikator_id' => $this->indikator->id, 'program_studi' => 'Teknik Mesin',
        'siklus' => 'VI-2026', 'link' => 'https://asli.test', 'deskripsi' => 'Asli']);

    $this->actingAs($this->auditor)->post($this->url, $this->payload + ['link' => 'https://palsu.test', 'deskripsi' => 'Palsu']);

    expect(EspmiIsian::first()->link)->toBe('https://asli.test')
        ->and(EspmiIsian::first()->deskripsi)->toBe('Asli');
});

it('menyimpan ulang memperbarui data, tidak menggandakan', function () {
    $this->actingAs($this->auditor)->post($this->url, $this->payload);
    $this->actingAs($this->auditor)->post($this->url, array_merge($this->payload, ['skor' => 2]));

    expect(EspmiIsian::count())->toBe(1)
        ->and(EspmiIsian::first()->skor)->toBe(2);
});

it('penilai tidak berganti jika tidak ada yang berubah', function () {
    $lain = User::factory()->create(['username' => 'auditor2', 'role' => User::ROLE_AUDITOR]);

    $this->actingAs($this->auditor)->post($this->url, $this->payload);
    $this->actingAs($lain)->post($this->url, $this->payload);               // sama persis
    expect(EspmiIsian::first()->dinilai_oleh)->toBe($this->auditor->id);

    $this->actingAs($lain)->post($this->url, array_merge($this->payload, ['skor' => 3]));  // berubah
    expect(EspmiIsian::first()->dinilai_oleh)->toBe($lain->id);
});

it('mengosongkan penilaian menghapus baris jika tidak ada bukti prodi', function () {
    $this->actingAs($this->auditor)->post($this->url, $this->payload);
    expect(EspmiIsian::count())->toBe(1);

    $this->actingAs($this->auditor)->post($this->url, $this->kosong);

    expect(EspmiIsian::count())->toBe(0);
});

it('mengosongkan penilaian mempertahankan bukti prodi dan menghapus penilai', function () {
    EspmiIsian::create(['indikator_id' => $this->indikator->id, 'program_studi' => 'Teknik Mesin',
        'siklus' => 'VI-2026', 'link' => 'https://contoh.test/dok', 'deskripsi' => 'Bukti prodi']);
    $this->actingAs($this->auditor)->post($this->url, $this->payload);

    $this->actingAs($this->auditor)->post($this->url, $this->kosong);

    $isian = EspmiIsian::first();
    expect(EspmiIsian::count())->toBe(1)
        ->and($isian->link)->toBe('https://contoh.test/dok')
        ->and($isian->skor)->toBeNull()
        ->and($isian->hasil_verifikasi)->toBeNull()
        ->and($isian->dinilai_oleh)->toBeNull();
});

it('formulir kosong untuk indikator baru tidak membuat baris', function () {
    $this->actingAs($this->auditor)->post($this->url, $this->kosong)->assertRedirect();

    expect(EspmiIsian::count())->toBe(0);
});

it('hasil audit dipisah per program studi', function () {
    $this->actingAs($this->auditor)->post($this->url, $this->payload);
    $this->actingAs($this->auditor)->post($this->url, array_merge($this->payload, ['program_studi' => 'Teknik Sipil', 'skor' => 1]));

    expect(EspmiIsian::count())->toBe(2)
        ->and(EspmiIsian::where('program_studi', 'Teknik Mesin')->first()->skor)->toBe(4)
        ->and(EspmiIsian::where('program_studi', 'Teknik Sipil')->first()->skor)->toBe(1);
});

it('wajib memilih Kesimpulan jika ada isian lain', function () {
    $this->actingAs($this->auditor)->post($this->url, array_merge($this->payload, ['skor' => null]))
        ->assertSessionHasErrors('skor');

    expect(EspmiIsian::count())->toBe(0);
});

it('menolak skor di luar 1-4, prodi/siklus tak dikenal, dan tanggal salah', function () {
    $coba = fn (array $ubah) => $this->actingAs($this->auditor)->post($this->url, array_merge($this->payload, $ubah));

    $coba(['skor' => 9])->assertSessionHasErrors('skor');
    $coba(['skor' => 0])->assertSessionHasErrors('skor');
    $coba(['program_studi' => 'Prodi Palsu'])->assertSessionHasErrors('program_studi');
    $coba(['siklus' => 'XX-1999'])->assertSessionHasErrors('siklus');
    $coba(['realisasi' => 'bukan-tanggal'])->assertSessionHasErrors('realisasi');

    expect(EspmiIsian::count())->toBe(0);
});

it('indikator yang tidak ada menghasilkan 404', function () {
    $this->actingAs($this->auditor)->post('/e-spmi/indikator/99999', $this->payload)->assertNotFound();
});

it('auditor nonaktif tidak bisa memvalidasi', function () {
    $nonaktif = User::factory()->inactive()->create(['username' => 'lama', 'role' => User::ROLE_AUDITOR]);

    $this->actingAs($nonaktif)->post($this->url, $this->payload)->assertRedirect('/login');

    expect(EspmiIsian::count())->toBe(0);
});

it('auditor tetap tidak bisa masuk panel admin', function () {
    $this->actingAs($this->auditor)->get('/ft-unaya')->assertForbidden();
});