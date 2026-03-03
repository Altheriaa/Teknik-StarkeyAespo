<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KurikulumSipil extends Model
{
    protected $table = 'kurikulum_sipil'; 

    protected $fillable = [ 
        'semester',
        'kode_mk',
        'mata_kuliah',
        'sks',
        'praktek',
        'teori',
        'kategori',
        'rps'
    ];
}
