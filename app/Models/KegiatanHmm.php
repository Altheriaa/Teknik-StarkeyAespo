<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KegiatanHmm extends Model
{
    protected $table = 'kegiatan_hmm';

    protected $fillable = [
        'title',
        'description',
        'image_news',
        'date',
        'views',
        'slug',
    ];
}
