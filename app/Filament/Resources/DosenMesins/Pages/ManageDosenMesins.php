<?php

namespace App\Filament\Resources\DosenMesins\Pages;

use App\Filament\Resources\DosenMesins\DosenMesinResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageDosenMesins extends ManageRecords
{
    protected static string $resource = DosenMesinResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
