<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KegiatanHimasi extends Model
{
    protected $table = 'kegiatan_himasi';

    protected $fillable = [
        'title',
        'description',
        'image_news',
        'date',
        'views',
        'slug',
    ];
}
