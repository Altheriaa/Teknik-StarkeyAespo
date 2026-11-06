<?php

namespace App\Filament\Resources\EspmiIsians\Pages;

use App\Filament\Resources\EspmiIsians\EspmiIsianResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageEspmiIsians extends ManageRecords
{
    protected static string $resource = EspmiIsianResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}