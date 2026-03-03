<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KegiatanHimatesya extends Model
{
    protected $table = 'kegiatan_himatesya';

    protected $fillable = [
        'title',
        'description',
        'image_news',
        'date',
        'views',
        'slug',
    ];
}
