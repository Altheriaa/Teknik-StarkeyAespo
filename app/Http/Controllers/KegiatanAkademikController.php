<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KegiatanAkademik;

class KegiatanAkademikController extends Controller
{
    public function index(Request $request) {

        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $KegiatanAkademiks = KegiatanAkademik::when($search, function ($query, $search) {
                return $query->where('nama_kegiatan', 'like', "%{$search}%")
                             ->orWhere('link', 'like', "%{$search}%")
                             ->orWhere('tanggal_pelaksanaan', 'like', "%{$search}%");
            })
            ->orderBy('tanggal_pelaksanaan', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('Download/KegiatanAkademik', [
            'KegiatanAkademiks' => $KegiatanAkademiks,
            'filters' => $request->only('search')
        ]);
    }
}
