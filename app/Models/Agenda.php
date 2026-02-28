<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    protected $table = 'agenda';

    protected $fillable = [
        'tahun_agenda',
        'nama_agenda',
        'masa_agenda',
        'date',
    ];
}
