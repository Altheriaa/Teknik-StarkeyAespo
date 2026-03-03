<?php

namespace App\Filament\Resources\KesiapanTeknologis\Pages;

use App\Filament\Resources\KesiapanTeknologis\KesiapanTeknologiResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageKesiapanTeknologis extends ManageRecords
{
    protected static string $resource = KesiapanTeknologiResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
