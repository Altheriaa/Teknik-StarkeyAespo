<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pengumuman extends Model
{
    protected $table = 'pengumuman';

    protected $fillable = [
        'tanggal_pengumuman',
        'bulan_pengumuman',
        'judul_pengumuman',
        'deskripsi_pengumuman',
        'link',
    ];
}
