<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Berita;
use Inertia\Inertia;

class BeritaController extends Controller
{
    public function index()
    {
        $beritas = Berita::orderBy('date', 'desc')->paginate(6);

        return Inertia::render('Berita/Index', [
            'beritas' => $beritas
        ]);
    }

    public function show(Berita $berita)
    {
        $berita->increment('views');

        $previews = Berita::where('id', '!=', $berita->id)
            ->latest('date')
            ->take(5)
            ->get();

        return Inertia::render('Berita/Show', [
            'berita' => $berita,
            'previews' => $previews
        ]);
    }
}
