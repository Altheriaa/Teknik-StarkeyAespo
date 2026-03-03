<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KurikulumSi extends Model
{
    protected $table = 'kurikulum_si'; 

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
