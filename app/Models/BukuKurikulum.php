<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BukuKurikulum extends Model
{
    protected $table = 'buku_kurikulum';
    protected $fillable = [
        'prodi',
        'file',
    ];
}
