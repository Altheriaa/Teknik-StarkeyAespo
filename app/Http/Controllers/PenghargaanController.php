<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PenghargaanMahasiswa;
use App\Models\PenghargaanDosen;

class PenghargaanController extends Controller
{
    public function dosen(Request $request) {
        
        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $PenghargaanDosens = PenghargaanDosen::when($search, function ($query, $search) {
                return $query->where('person', 'like', "%{$search}%")
                             ->orWhere('prestasi', 'like', "%{$search}%");
            })
            ->orderBy('date', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('Award/PenghargaanDosen', [
            'PenghargaanDosens' => $PenghargaanDosens,
            'filters' => $request->only('search')
        ]);
        
    }

    public function mahasiswa(Request $request) {
        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $PenghargaanMahasiswas = PenghargaanMahasiswa::when($search, function ($query, $search) {
                return $query->where('person', 'like', "%{$search}%")
                             ->orWhere('prestasi', 'like', "%{$search}%");
            })
            ->orderBy('date', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('Award/PenghargaanMahasiswa', [
            'PenghargaanMahasiswas' => $PenghargaanMahasiswas,
            'filters' => $request->only('search')
        ]);
    }
}
