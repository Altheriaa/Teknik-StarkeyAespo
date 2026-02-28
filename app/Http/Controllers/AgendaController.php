<?php

namespace App\Http\Controllers;
use App\Models\Agenda;

use Illuminate\Http\Request;

class AgendaController extends Controller
{
    public function index() {
        
        $agendas = Agenda::all();

        return inertia('Agenda/Index', [
            'agendas' => $agendas
        ]);
    }
}
