<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PengurusanSurat extends Model
{
    protected $table = 'pengurusan_surat';

    protected $fillable = [
        'pengurusan_surat',
        'link',
        'date'
    ];
}
