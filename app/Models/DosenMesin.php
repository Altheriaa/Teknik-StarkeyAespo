<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DosenMesin extends Model
{
    protected $table = 'dosen_mesin'; 

    protected $fillable = [
        'gambar_dosen',
        'nama_dosen',
        'jabatan_dosen',
        'posisi_dosen',
        'nuptk',
        'riwayat_prodi',
        'riwayat_universitas',
        'link_publikasi',
    ];
}
