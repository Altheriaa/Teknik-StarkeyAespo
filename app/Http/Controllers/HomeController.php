<?php

namespace App\Http\Controllers;
use App\Models\Berita;
use App\Models\Pengumuman;
use App\Models\Agenda;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {

        $beritas = Berita::orderBy('date', 'desc')->paginate(3);
        $pengumumans = Pengumuman::orderBy('created_at', 'desc')->take(4)->get();
        $agendas = Agenda::orderBy('created_at', 'desc')->take(4)->get();

        return inertia('Home/Index', [
            'beritas' => $beritas,
            'pengumumans' => $pengumumans,
            'agendas' => $agendas
        ]);
    }
}
