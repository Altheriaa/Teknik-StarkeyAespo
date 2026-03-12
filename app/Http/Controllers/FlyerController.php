<?php

namespace App\Http\Controllers;

use App\Models\FlyerTenagaKerja;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FlyerController extends Controller
{
    public function index()
    {
        $flyers = FlyerTenagaKerja::orderBy('created_at', 'desc')->paginate(6);

        return Inertia::render('Kemahasiswaan/FlyerTenagaKerja', [
            'flyers' => $flyers
        ]);
    }
}
