<?php

namespace App\Http\Controllers;

use App\Models\FlyerTenagaKerja;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerController extends Controller
{
    public function index()
    {
        $flyers = FlyerTenagaKerja::latest()->take(4)->get();

        return Inertia::render('Kemahasiswaan/EngineeringCareerCentre', [
            'flyers' => $flyers
        ]);
    }
}
