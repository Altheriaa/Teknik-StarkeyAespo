<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KesiapanTeknologi extends Model
{
    protected $table = 'kesiapan_teknologi';

    protected $fillable = [ 
        'produk_inovasi',
        'deskripsi',
        'nilai_tkt',
        'tanggal',
        'link',
    ];
}
