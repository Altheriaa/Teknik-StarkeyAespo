<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AgendaController;
use App\Http\Controllers\HomeController;

// Route Home
Route::get('/', [HomeController::class, 'index']);

// Profile
Route::get('/sejarah', function () {
    return inertia('Profile/Sejarah/Index');
});

Route::get('/visi-misi', function () {
    return inertia('Profile/VisiMisi/Index');
});
