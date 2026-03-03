<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KesiapanTeknologi;

class KesiapanTeknologiController extends Controller
{
    public function index(Request $request) {

        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $KesiapanTeknologis = KesiapanTeknologi::when($search, function ($query, $search) {
                return $query->where('produk_inovasi', 'like', "%{$search}%")
                             ->orWhere('deskripsi', 'like', "%{$search}%");
            })
            ->orderBy('tanggal', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('Award/KesiapanTeknologi', [
            'KesiapanTeknologis' => $KesiapanTeknologis,
            'filters' => $request->only('search')
        ]);
    }
}
