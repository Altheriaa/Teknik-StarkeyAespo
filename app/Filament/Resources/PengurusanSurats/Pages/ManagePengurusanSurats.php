<?php

namespace App\Filament\Resources\PengurusanSurats\Pages;

use App\Filament\Resources\PengurusanSurats\PengurusanSuratResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManagePengurusanSurats extends ManageRecords
{
    protected static string $resource = PengurusanSuratResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
