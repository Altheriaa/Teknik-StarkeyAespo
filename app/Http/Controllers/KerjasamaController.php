<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kerjasama;

class KerjasamaController extends Controller
{
    public function index(Request $request) {

        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $Kerjasamas = Kerjasama::when($search, function ($query, $search) {
                return $query->where('nama_kerjasama', 'like', "%{$search}%")
                             ->orWhere('lingkup_kerjasama', 'like', "%{$search}%")
                             ->orWhere('jenis_dokumen', 'like', "%{$search}%")
                             ->orWhere('status_kerjasama', 'like', "%{$search}%");
            })
            ->orderBy('tanggal', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('Kerjasama/Index', [
            'Kerjasamas' => $Kerjasamas,
            'filters' => $request->only('search')
        ]);
    }
}
