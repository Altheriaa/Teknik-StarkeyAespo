<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PenghargaanMahasiswa extends Model
{
    protected $table = 'penghargaan_mahasiswa';

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
