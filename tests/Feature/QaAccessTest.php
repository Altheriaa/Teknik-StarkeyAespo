<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->withoutVite();
});

$qaPages = ['/sop', '/survey', '/dokumen-ami', '/dokumen-monev'];

it('mengarahkan tamu ke halaman login saat membuka halaman QA', function () use ($qaPages) {
    foreach ($qaPages as $page) {
        $this->get($page)->assertRedirect('/login');
    }
});

it('mengizinkan pengguna QA yang aktif membuka halaman QA', function () use ($qaPages) {
    $user = User::factory()->create(['username' => 'auditor', 'email' => null]);

    foreach ($qaPages as $page) {
        $this->actingAs($user)->get($page)->assertOk();
    }
});

it('mengizinkan admin membuka halaman QA', function () {
    $this->actingAs(User::factory()->admin()->create())->get('/sop')->assertOk();
});

it('mengeluarkan akun nonaktif yang masih punya sesi', function () {
    $user = User::factory()->inactive()->create(['username' => 'lama']);

    $this->actingAs($user)->get('/sop')->assertRedirect('/login');
    $this->assertGuest();
});

it('login berhasil dengan username dan kembali ke halaman tujuan', function () {
    User::factory()->create(['username' => 'auditor', 'password' => 'rahasia123']);

    $this->get('/dokumen-ami')->assertRedirect('/login');

    $this->post('/login', ['login' => 'auditor', 'password' => 'rahasia123'])
        ->assertRedirect('/dokumen-ami');

    $this->assertAuthenticated();
});

it('menolak password salah dan akun nonaktif', function () {
    User::factory()->create(['username' => 'auditor', 'password' => 'rahasia123']);
    User::factory()->inactive()->create(['username' => 'lama', 'password' => 'rahasia123']);

    $this->post('/login', ['login' => 'auditor', 'password' => 'salah'])
        ->assertSessionHasErrors('login');
    $this->post('/login', ['login' => 'lama', 'password' => 'rahasia123'])
        ->assertSessionHasErrors('login');

    $this->assertGuest();
});

it('membatasi percobaan login berulang', function () {
    User::factory()->create(['username' => 'auditor', 'password' => 'rahasia123']);

    foreach (range(1, 5) as $i) {
        $this->post('/login', ['login' => 'auditor', 'password' => 'salah']);
    }

    // Percobaan ke-6 ditolak walau password benar
    $this->post('/login', ['login' => 'auditor', 'password' => 'rahasia123'])
        ->assertSessionHasErrors('login');
    $this->assertGuest();
});

it('tidak mengizinkan pengguna QA masuk panel admin', function () {
    $user = User::factory()->create(['username' => 'auditor']);

    $this->actingAs($user)->get('/ft-unaya')->assertForbidden();
});

it('logout menghapus sesi', function () {
    $user = User::factory()->create(['username' => 'auditor']);

    $this->actingAs($user)->post('/logout')->assertRedirect('/');
    $this->assertGuest();
});