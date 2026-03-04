<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DokumenMonev extends Model
{
    protected $table = 'dokumen_monev';

    protected $fillable = [
        'nama_dokumen',
        'link',
        'date',
    ];
}
