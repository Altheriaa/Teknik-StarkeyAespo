<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AgendaController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BeritaController;

// Route Home
Route::get('/', [HomeController::class, 'index']);

// Profile
Route::get('/sejarah', function () {
    return inertia('Profile/Sejarah/Index');
});

Route::get('/visi-misi', function () {
    return inertia('Profile/VisiMisi/Index');
});

Route::get('/struktur-organisasi', function () {
    return inertia('Profile/StrukturOrganisasi/Index');
});

Route::get('/kalender-akademik', function () {
    return inertia('Profile/KalenderAkademik/Index');
});

Route::get('/roadmap', function () {
    return inertia('Profile/Roadmap/Index');
});

// Berita
Route::get('/berita', [BeritaController::class, 'index'])->name('berita.index');
Route::get('/berita/{berita:slug}', [BeritaController::class, 'show'])->name('berita.show');

// Program Studi
// Visi SI
Route::get('/sistem-informasi/visi', function () {
    return inertia('Prodi/SistemInformasi/Visi');
});
// Kurikulum SI
Route::get('/sistem-informasi/kurikulum', function () {
    return inertia('Prodi/SistemInformasi/Kurikulum');
});
// Dosen SI
Route::get('/sistem-informasi/dosen', function () {
    return inertia('Prodi/SistemInformasi/Dosen');
});
// Visi Teknik Sipil
Route::get('/teknik-sipil/visi', function () {
    return inertia('Prodi/TeknikSipil/Visi');
});
// Kurikulum Teknik Sipil
Route::get('/teknik-sipil/kurikulum', function () {
    return inertia('Prodi/TeknikSipil/Kurikulum');
});
// Dosen Teknik Sipil
Route::get('/teknik-sipil/dosen', function () {
    return inertia('Prodi/TeknikSipil/Dosen');
});
// Visi Teknik Mesin
Route::get('/teknik-mesin/visi', function () {
    return inertia('Prodi/TeknikMesin/Visi');
});
// Kurikulum Teknik Mesin
Route::get('/teknik-mesin/kurikulum', function () {
    return inertia('Prodi/TeknikMesin/Kurikulum');
});
// Dosen Teknik Mesin
Route::get('/teknik-mesin/dosen', function () {
    return inertia('Prodi/TeknikMesin/Dosen');
});
