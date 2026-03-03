<?php

namespace App\Filament\Resources\PenghargaanMahasiswas\Pages;

use App\Filament\Resources\PenghargaanMahasiswas\PenghargaanMahasiswaResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManagePenghargaanMahasiswas extends ManageRecords
{
    protected static string $resource = PenghargaanMahasiswaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
