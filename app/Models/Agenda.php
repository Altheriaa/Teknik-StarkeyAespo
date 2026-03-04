<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    protected $table = 'agenda';

    protected $fillable = [
        'tahun_agenda',
        'judul_agenda',
        'masa_agenda',
        'date',
    ];
}
