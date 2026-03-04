<?php

namespace App\Http\Controllers;

use App\Models\DokumenMonev;
use Illuminate\Http\Request;

class DokumenMonevController extends Controller
{
    public function index(Request $request) {

        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $DokumenMonevs = DokumenMonev::when($search, function ($query, $search) {
                return $query->where('nama_dokumen', 'like', "%{$search}%")
                             ->orWhere('link', 'like', "%{$search}%")
                             ->orWhere('date', 'like', "%{$search}%");
            })
            ->orderBy('date', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('QualityAssurance/DokumenMonev', [
            'DokumenMonevs' => $DokumenMonevs,
            'filters' => $request->only('search')
        ]);
    }
}
