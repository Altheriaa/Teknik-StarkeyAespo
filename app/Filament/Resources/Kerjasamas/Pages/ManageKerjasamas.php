<?php

namespace App\Filament\Resources\Kerjasamas\Pages;

use App\Filament\Resources\Kerjasamas\KerjasamaResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageKerjasamas extends ManageRecords
{
    protected static string $resource = KerjasamaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
