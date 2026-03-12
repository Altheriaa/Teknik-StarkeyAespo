<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FlyerTenagaKerja extends Model
{
    protected $table = 'flyer_tenaga_kerja';

    protected $fillable = [
        'gambar',
        'judul',
        'deskripsi'
    ];
}
