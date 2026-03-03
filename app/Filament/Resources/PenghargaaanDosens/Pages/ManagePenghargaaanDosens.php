<?php

namespace App\Filament\Resources\PenghargaaanDosens\Pages;

use App\Filament\Resources\PenghargaaanDosens\PenghargaaanDosenResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManagePenghargaaanDosens extends ManageRecords
{
    protected static string $resource = PenghargaaanDosenResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
