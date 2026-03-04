<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KalenderAkademik;
use App\Models\RosterAkademik;

class KalenderAkademikController extends Controller
{
    public function index() {
        $KalenderAkademiks = KalenderAkademik::all();
        $RosterAkademiks = RosterAkademik::all();

        return inertia('Profile/KalenderAkademik/Index', [
            'KalenderAkademiks' => $KalenderAkademiks,
            'RosterAkademiks' => $RosterAkademiks,
        ]);
    }
}
