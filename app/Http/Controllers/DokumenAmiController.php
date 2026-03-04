<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DokumenAmi;

class DokumenAmiController extends Controller
{
    public function index(Request $request) {

        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $DokumenAmis = DokumenAmi::when($search, function ($query, $search) {
                return $query->where('nama_dokumen', 'like', "%{$search}%")
                             ->orWhere('link', 'like', "%{$search}%")
                             ->orWhere('date', 'like', "%{$search}%");
            })
            ->orderBy('date', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('QualityAssurance/DokumenAmi', [
            'DokumenAmis' => $DokumenAmis,
            'filters' => $request->only('search')
        ]);
    }
}
