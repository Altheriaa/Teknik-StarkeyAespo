<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {

        $datas = [
            'apalah' => 'gila',
            'cekAhh' => 'gilasssss'
        ];

        return inertia('Home/Index', [
            'datas' => $datas
        ]);
    }
}
