<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AgendaController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\DokumenController;
use App\Http\Controllers\DosenController;
use App\Http\Controllers\KerjasamaController;
use App\Http\Controllers\KesiapanTeknologiController;
use App\Http\Controllers\VisiMisiProdiController;
use App\Http\Controllers\KurikulumController;
use App\Http\Controllers\OrganisasiController;
use App\Http\Controllers\PenghargaanController;
use App\Http\Controllers\KegiatanAkademikController;
use App\Http\Controllers\PengurusanSuratController;
use App\Http\Controllers\SopController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\DokumenAmiController;
use App\Http\Controllers\DokumenMonevController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\FlyerController;

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

Route::get('/kalender-akademik', [App\Http\Controllers\KalenderAkademikController::class, 'index']);

Route::get('/roadmap', function () {
    return inertia('Profile/Roadmap/Index');
});

// Berita
Route::get('/berita', [BeritaController::class, 'index']);
Route::get('/berita/{berita:slug}', [BeritaController::class, 'show']);

// Program Studi
// Visi SI
Route::get('/sistem-informasi/visi', [VisiMisiProdiController::class, 'sistemInformasi']);
// Kurikulum SI
Route::get('/sistem-informasi/kurikulum', [KurikulumController::class, 'sistemInformasi']);
// Dosen SI
Route::get('/sistem-informasi/dosen', [DosenController::class, 'sistemInformasi']);

// Visi Teknik Sipil
Route::get('/teknik-sipil/visi', [VisiMisiProdiController::class, 'sipil']);
// Kurikulum Teknik Sipil
Route::get('/teknik-sipil/kurikulum', [KurikulumController::class, 'sipil']);
// Dosen Teknik Sipil
Route::get('/teknik-sipil/dosen', [DosenController::class, 'sipil']);

// Visi Teknik Mesin
Route::get('/teknik-mesin/visi', [VisiMisiProdiController::class, 'mesin']);
// Kurikulum Teknik Mesin
Route::get('/teknik-mesin/kurikulum', [KurikulumController::class, 'mesin']);
// Dosen Teknik Mesin
Route::get('/teknik-mesin/dosen', [DosenController::class, 'mesin']);

// Pendidikan
// Laboratorium
Route::get('/laboratorium', function () {
    return inertia('Pendidikan/Laboratorium');
});

// Beasiswa
Route::get('/beasiswa', function () {
    return inertia('Pendidikan/Beasiswa');
});

// Perpustakaan
Route::get('/perpustakaan', function () {
    return inertia('Pendidikan/Perpustakaan');
});

// Jurnal
Route::get('/jurnal', function () {
    return inertia('Pendidikan/Jurnal');
});

// Kemahasiswaaw
// Layanan Komunikasi Orang Tua
Route::get('/layanan-komunikasi', function () {
    return inertia('Kemahasiswaan/KomunikasiOrangTua');
});

// Layanan Surat Aktif
Route::get('/layanan-surat-aktif', function () {
    return inertia('Kemahasiswaan/LayananSuratAktif');
});

// Organisasi Mahasiswa
// Bem
Route::get('/bem', [OrganisasiController::class, 'bem']);
// Bem
Route::get('/himasi', [OrganisasiController::class, 'himasi']);
// Bem
Route::get('/himatesya', [OrganisasiController::class, 'himatesya']);
// Bem
Route::get('/hmm', [OrganisasiController::class, 'hmm']);

// Tracer Study
Route::get('/tracer-study', function () {
    return inertia('Kemahasiswaan/TracerStudy');
});

// Engineering Career Centre
Route::get('/engineering-career-centre', [CareerController::class, 'index']);

// Flyer Ketenaga Kerja
Route::get('/flyer-ketenaga-kerja', [FlyerController::class, 'index']);

// Penghargaan
Route::get('/penghargaan-dosen', [PenghargaanController::class, 'dosen']);
Route::get('/penghargaan-mahasiswa', [PenghargaanController::class, 'mahasiswa']);

// Tingkat kesiapan Teknologi
Route::get('/kesiapan-teknologi', [KesiapanTeknologiController::class, 'index']);

// Kerjasama
Route::get('/kerjasama', [KerjasamaController::class, 'index']);

// Download
// Kerjasama
Route::get('/kegiatan-akademik', [KegiatanAkademikController::class, 'index']);

// E-Magazine
Route::get('/e-magazine', function () {
    return inertia('Download/E-Magazine');
});

// Pengurusan Surat
Route::get('/pengurusan-surat', [PengurusanSuratController::class, 'index']);

// Dokumen
Route::get('/dokumen', [DokumenController::class, 'index']);

// Quatlity Assurance
// SOP
Route::get('/sop', [SopController::class, 'index']);

// Survey
Route::get('/survey', [SurveyController::class, 'index']);

// Dokumen AMI
Route::get('/dokumen-ami', [DokumenAmiController::class, 'index']);

// Dokumen Monev
Route::get('/dokumen-monev', [DokumenMonevController::class, 'index']);

Route::get('/inspira', function () {
    return view('inspira');
});