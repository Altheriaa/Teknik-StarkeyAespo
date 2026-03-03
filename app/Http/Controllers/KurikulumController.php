<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KurikulumSi;
use App\Models\KurikulumSipil;
use App\Models\KurikulumMesin;
use App\Models\BukuKurikulum;

class KurikulumController extends Controller
{
    public function sistemInformasi()
    {
        // Ambil semua data kurikulum
        $kurikulumSis = KurikulumSi::all();

        // Hitung total SKS per semester
        $sksPerSemester = $kurikulumSis->groupBy('semester')->map(function ($items) {
            return $items->sum('sks');
        });

        // Hitung total seluruh SKS
        $totalSks = $kurikulumSis->sum('sks');

        $buku = BukuKurikulum::where('prodi', 'Sistem Informasi')->first();

        // group berdasar semester trus di sort
        $groupedKurikulum = $kurikulumSis->groupBy('semester')->sortKeys();

        return inertia('Prodi/SistemInformasi/Kurikulum',[
            'kurikulumSis' => $kurikulumSis,
            'groupedKurikulum' => $groupedKurikulum,
            'sksPerSemester' => $sksPerSemester,
            'totalSks' => $totalSks,
            'buku' => $buku,
        ]);
    }

    public function sipil()
    {
        // Ambil semua data kurikulum
        $kurikulumSipils= KurikulumSipil::all();

        // Hitung total SKS per semester
        $sksPerSemester = $kurikulumSipils->groupBy('semester')->map(function ($items) {
            return $items->sum('sks');
        });

        // Hitung total seluruh SKS
        $totalSks = $kurikulumSipils->sum('sks');

        $buku = BukuKurikulum::where('prodi', 'Teknik Sipil')->first();

        // group berdasar semester trus di sort
        $groupedKurikulum = $kurikulumSipils->groupBy('semester')->sortKeys();

        return inertia('Prodi/TeknikSipil/Kurikulum',[
            'kurikulumSipils' => $kurikulumSipils,
            'groupedKurikulum' => $groupedKurikulum,
            'sksPerSemester' => $sksPerSemester,
            'totalSks' => $totalSks,
            'buku' => $buku,
        ]);
    }

    public function mesin()
    {
        // Ambil semua data kurikulum
        $kurikulumMesins= KurikulumMesin::all();

        // Hitung total SKS per semester
        $sksPerSemester = $kurikulumMesins->groupBy('semester')->map(function ($items) {
            return $items->sum('sks');
        });

        // Hitung total seluruh SKS
        $totalSks = $kurikulumMesins->sum('sks');

        $buku = BukuKurikulum::where('prodi', 'Teknik Mesin')->first();

        // group berdasar semester trus di sort
        $groupedKurikulum = $kurikulumMesins->groupBy('semester')->sortKeys();

        return inertia('Prodi/TeknikMesin/Kurikulum',[
            'kurikulumMesins' => $kurikulumMesins,
            'groupedKurikulum' => $groupedKurikulum,
            'sksPerSemester' => $sksPerSemester,
            'totalSks' => $totalSks,
            'buku' => $buku,
        ]);
    }
}
