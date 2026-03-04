<?php

namespace App\Http\Controllers;

use App\Models\PengurusanSurat;
use Illuminate\Http\Request;

class PengurusanSuratController extends Controller
{
    public function index(Request $request) {
        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $PengurusanSurats = PengurusanSurat::when($search, function ($query, $search) {
                return $query->where('pengurusan_surat', 'like', "%{$search}%")
                             ->orWhere('link', 'like', "%{$search}%");
            })
            ->orderBy('date', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('Download/PengurusanSurat', [
            'PengurusanSurats' => $PengurusanSurats,
            'filters' => $request->only('search')
        ]);
    }
}
