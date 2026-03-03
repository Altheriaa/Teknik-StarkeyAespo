<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrganisasiController extends Controller
{
    public function bem() {
        return inertia('Kemahasiswaan/OrganisasiMahasiswa/Bem');
    }

    public function himasi() {
        return inertia('Kemahasiswaan/OrganisasiMahasiswa/Himasi');
    }

    public function himatesya() {
        return inertia('Kemahasiswaan/OrganisasiMahasiswa/Himatesya');
    }

    public function hmm() {
        return inertia('Kemahasiswaan/OrganisasiMahasiswa/Hmm');
    }
}
