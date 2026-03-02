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