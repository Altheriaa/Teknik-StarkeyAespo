<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AgendaController;

Route::get('/', function () {
    return redirect()->route('agenda.index');
});

// Route::resource('products', ProductController::class);

Route::get('/agenda', [AgendaController::class, 'index'])->name('agenda.index');
