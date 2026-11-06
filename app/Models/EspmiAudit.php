<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EspmiAudit extends Model
{
    protected $table = 'espmi_audit';

    protected $fillable = [
        'program_studi',
        'siklus',
        'nama_dekan',
        'nama_kaprodi',
        'dtps',
        'tim_auditor',
        'tanggal_audit',
    ];

    protected function casts(): array
    {
        return [
            'dtps' => 'array',
            'tim_auditor' => 'array',
            'tanggal_audit' => 'date',
        ];
    }
}