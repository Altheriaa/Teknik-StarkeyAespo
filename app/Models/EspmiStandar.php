<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EspmiStandar extends Model
{
    protected $table = 'espmi_standar';

    protected $fillable = ['kode', 'nama', 'urutan'];

    public function indikators(): HasMany
    {
        return $this->hasMany(EspmiIndikator::class, 'standar_id')
            ->orderBy('urutan')
            ->orderBy('kode');
    }
}