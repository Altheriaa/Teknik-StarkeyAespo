<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RosterAkademik extends Model
{
    protected $table = 'roster_akademik';

    protected $fillable = [
        'roster_sipil',
        'roster_sistem_informasi',
        'roster_teknik_mesin',
    ];
}
