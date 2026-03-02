<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DosenMesin;
use App\Models\DosenSipil;
use App\Models\DosenSi;

class DosenController extends Controller
{
    public function mesin() {

        $DosenMesins = DosenMesin::all();
        
        return inertia('Prodi/TeknikMesin/Dosen', [
            'DosenMesins' => $DosenMesins,
        ]);
    }

    public function sistemInformasi() {

        $DosenSis = DosenSi::all();
        
        return inertia('Prodi/SistemInformasi/Dosen', [
            'DosenSis' => $DosenSis,
        ]);
    }

    public function sipil() {

        $DosenSipils = DosenSipil::all();
        
        return inertia('Prodi/TeknikSipil/Dosen', [
            'DosenSipils' => $DosenSipils,
        ]);
    }
}
