<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PenghargaanDosen extends Model
{
    protected $table = 'penghargaan_dosen';

    protected $fillable = [
        'gambar_person',
        'person',
        'prestasi',
        'tingkat',
        'tahun',
        'link',
        'date',
    ];
}
