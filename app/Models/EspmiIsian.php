<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class EspmiIsian extends Model
{
    protected $table = 'espmi_isian';

    protected $fillable = [
        'indikator_id',
        'program_studi',
        'siklus',
        'link',
        'file_path',
        'file_nama',
        'deskripsi',
        'hasil_verifikasi',
        'penyebab',
        'tindakan_pencegahan',
        'skor',
        'realisasi',
        'dinilai_oleh',
        'dinilai_pada',
    ];

    /** Disk privat tempat berkas data dukung dari Ka. Prodi disimpan. */
    public const DISK = 'local';

    protected static function booted(): void
    {
        // Baris dihapus -> berkas fisiknya ikut dihapus agar tidak jadi sampah
        static::deleting(function (EspmiIsian $isian) {
            if (filled($isian->file_path)) {
                Storage::disk(self::DISK)->delete($isian->file_path);
            }
        });
    }

    public function punyaBukti(): bool
    {
        return filled($this->link) || filled($this->file_path) || filled($this->deskripsi);
    }

    public function punyaPenilaian(): bool
    {
        return $this->skor !== null
            || $this->realisasi !== null
            || filled($this->hasil_verifikasi)
            || filled($this->penyebab)
            || filled($this->tindakan_pencegahan);
    }

    protected function casts(): array
    {
        return [
            'skor' => 'integer',
            'realisasi' => 'date',
            'dinilai_pada' => 'datetime',
        ];
    }

    public function indikator(): BelongsTo
    {
        return $this->belongsTo(EspmiIndikator::class, 'indikator_id');
    }

    public function penilai(): BelongsTo
    {
        return $this->belongsTo(User::class, 'dinilai_oleh');
    }
}