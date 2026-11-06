<?php

namespace App\Filament\Resources\EspmiIndikators\Pages;

use App\Filament\Resources\EspmiIndikators\EspmiIndikatorResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageEspmiIndikators extends ManageRecords
{
    protected static string $resource = EspmiIndikatorResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}