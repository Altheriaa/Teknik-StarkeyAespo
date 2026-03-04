<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KegiatanAkademik extends Model
{
    protected $table = 'kegiatan_akademik';
    
    protected $fillable = [
        'nama_kegiatan',
        'link',
        'tanggal_pelaksanaan',
    ];
}
