<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Filament\Panel;
use Filament\Models\Contracts\FilamentUser;

class User extends Authenticatable implements FilamentUser
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    public const ROLE_ADMIN = 'admin';
    public const ROLE_QA_VIEWER = 'qa_viewer';
    public const ROLE_AUDITOR = 'auditor';
    public const ROLE_KAPRODI = 'kaprodi';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'role',
        'program_studi',
        'is_active',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_active' => 'boolean',
        ];
    }

    protected static function booted(): void
    {
        // program_studi hanya bermakna untuk Ka. Prodi; kosongkan jika peran diganti
        static::saving(function (User $user) {
            if ($user->role !== self::ROLE_KAPRODI) {
                $user->program_studi = null;
            }
        });
    }

    public function isAdmin(): bool
    {
        return $this->role === self::ROLE_ADMIN;
    }

    public function isKaprodi(): bool
    {
        return $this->role === self::ROLE_KAPRODI;
    }

    
    public function canAccessPanel(Panel $panel): bool
    {
        return $this->is_active && $this->isAdmin();
    }

    /**
     * Admin, auditor, Ka. Prodi, dan qa_viewer aktif boleh membuka halaman Quality Assurance & e-SPMI.
     */
    public function canViewQa(): bool
    {
        return $this->is_active
            && in_array($this->role, [self::ROLE_ADMIN, self::ROLE_AUDITOR, self::ROLE_KAPRODI, self::ROLE_QA_VIEWER], true);
    }

    /**
     * Admin dan auditor aktif boleh memberi penilaian di halaman e-SPMI.
     */
    public function canAudit(): bool
    {
        return $this->is_active
            && in_array($this->role, [self::ROLE_ADMIN, self::ROLE_AUDITOR], true);
    }

    /**
     * Hanya Ka. Prodi aktif yang punya program studi yang boleh mengisi bukti
     * (link/berkas & deskripsi) di halaman e-SPMI. Penilaian tetap hak Admin & Auditor.
     */
    public function canFillEvidence(): bool
    {
        return $this->is_active
            && $this->isKaprodi()
            && filled($this->program_studi);
    }
}