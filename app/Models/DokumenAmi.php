<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DokumenAmi extends Model
{
    protected $table = 'dokumen_ami';

    protected $fillable = [
        'nama_dokumen',
        'link',
        'date',
    ];
}
