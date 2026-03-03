<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KegiatanBem extends Model
{
    protected $table = 'kegiatan_bem';
    
    protected $fillable = [
        'title',
        'description',
        'image_news',
        'date',
        'views',
        'slug',
    ];
}
