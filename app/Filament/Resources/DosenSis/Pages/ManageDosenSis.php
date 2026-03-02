<?php

namespace App\Filament\Resources\DosenSis\Pages;

use App\Filament\Resources\DosenSis\DosenSiResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageDosenSis extends ManageRecords
{
    protected static string $resource = DosenSiResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
