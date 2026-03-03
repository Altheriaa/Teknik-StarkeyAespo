<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KurikulumMesin extends Model
{
    protected $table = 'kurikulum_mesin'; 

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
