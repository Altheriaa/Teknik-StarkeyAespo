<?php

namespace App\Filament\Resources\EspmiStandars\Pages;

use App\Filament\Resources\EspmiStandars\EspmiStandarResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageEspmiStandars extends ManageRecords
{
    protected static string $resource = EspmiStandarResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}