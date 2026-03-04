<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sop;

class SopController extends Controller
{
    public function index(Request $request) {

        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $Sops = Sop::when($search, function ($query, $search) {
                return $query->where('nama_file', 'like', "%{$search}%")
                             ->orWhere('link', 'like', "%{$search}%")
                             ->orWhere('date', 'like', "%{$search}%");
            })
            ->orderBy('date', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('QualityAssurance/Sop', [
            'Sops' => $Sops,
            'filters' => $request->only('search')
        ]);
    }
}
