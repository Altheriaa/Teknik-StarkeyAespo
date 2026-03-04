<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kerjasama extends Model
{
    protected $table = 'kerjasama';
     
    protected $fillable = [ 
        'nama_kerjasama',
        'lingkup_kerjasama',
        'jenis_dokumen',
        'status_kerjasama',
        'link',
        'tanggal',
    ];
}
