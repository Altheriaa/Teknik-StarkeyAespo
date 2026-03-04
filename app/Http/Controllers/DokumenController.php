<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dokumen;

class DokumenController extends Controller
{
    public function index(Request $request) {

        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $Dokumens = Dokumen::when($search, function ($query, $search) {
                return $query->where('nama_file', 'like', "%{$search}%")
                             ->orWhere('link', 'like', "%{$search}%")
                             ->orWhere('date', 'like', "%{$search}%");
            })
            ->orderBy('date', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('Download/Dokumen', [
            'Dokumens' => $Dokumens,
            'filters' => $request->only('search')
        ]);
    }
}
