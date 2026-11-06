<?php

use App\Filament\Resources\Users\Pages\ManageUsers;
use App\Models\User;
use Filament\Actions\CreateAction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;

uses(RefreshDatabase::class);

it('form Filament: Ka. Prodi wajib punya prodi dan satu prodi satu akun', function () {
    $admin = User::factory()->admin()->create();
    $this->actingAs($admin);
    \Filament\Facades\Filament::setCurrentPanel('ft-unaya');

    $base = ['name' => 'Ka Mesin', 'role' => User::ROLE_KAPRODI, 'username' => 'ka_mesin', 'password' => 'rahasia123', 'is_active' => true];

    // tanpa prodi -> ditolak
    Livewire::test(ManageUsers::class)
        ->callAction(CreateAction::class, data: $base)
        ->assertHasActionErrors(['program_studi' => 'required']);

    // dengan prodi -> berhasil
    Livewire::test(ManageUsers::class)
        ->callAction(CreateAction::class, data: $base + ['program_studi' => 'Teknik Mesin'])
        ->assertHasNoActionErrors();
    expect(User::where('username', 'ka_mesin')->value('program_studi'))->toBe('Teknik Mesin');

    // prodi yang sama untuk akun Ka. Prodi lain -> ditolak
    Livewire::test(ManageUsers::class)
        ->callAction(CreateAction::class, data: array_merge($base, ['username' => 'ka_mesin2', 'program_studi' => 'Teknik Mesin']))
        ->assertHasActionErrors(['program_studi' => 'unique']);

    // role lain tidak perlu prodi
    Livewire::test(ManageUsers::class)
        ->callAction(CreateAction::class, data: ['name' => 'Aud', 'role' => User::ROLE_AUDITOR, 'username' => 'aud1', 'password' => 'rahasia123', 'is_active' => true])
        ->assertHasNoActionErrors();
    expect(User::where('username', 'aud1')->value('program_studi'))->toBeNull();
});