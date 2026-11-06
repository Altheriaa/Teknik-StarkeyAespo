<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EspmiIndikator extends Model
{
    protected $table = 'espmi_indikator';

    protected $fillable = [
        'standar_id',
        'kode',
        'renstra_unaya',
        'renstra_lppm',
        'capaian',
        'acuan',
        'sumber_data',
        'verifikasi',
        'urutan',
    ];

    public function standar(): BelongsTo
    {
        return $this->belongsTo(EspmiStandar::class, 'standar_id');
    }

    public function isians(): HasMany
    {
        return $this->hasMany(EspmiIsian::class, 'indikator_id');
    }
}