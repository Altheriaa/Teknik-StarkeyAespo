<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DosenSi;
use App\Models\DosenSipil;
use App\Models\DosenMesin;

class VisiMisiProdiController extends Controller
{
    public function sistemInformasi()
    {
        $kaprodi = DosenSi::select(['nama_dosen', 'gambar_dosen'])->where('posisi_dosen', 'Kaprodi')->first();

        return inertia('Prodi/SistemInformasi/Visi', [
            'Kaprodi' => $kaprodi,
        ]);
    }

    public function mesin()
    {
        $kaprodi = DosenMesin::select(['nama_dosen', 'gambar_dosen'])->where('posisi_dosen', 'Kaprodi')->first();

        return inertia('Prodi/TeknikMesin/Visi', [
            'Kaprodi' => $kaprodi,
        ]);
    }

    public function sipil()
    {
        $kaprodi = DosenSipil::select(['nama_dosen', 'gambar_dosen'])->where('posisi_dosen', 'Kaprodi')->first();

        return inertia('Prodi/TeknikSipil/Visi', [
            'Kaprodi' => $kaprodi,
        ]);
    }
}
