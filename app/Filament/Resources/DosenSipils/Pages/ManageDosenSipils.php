<?php

namespace App\Filament\Resources\DosenSipils\Pages;

use App\Filament\Resources\DosenSipils\DosenSipilResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageDosenSipils extends ManageRecords
{
    protected static string $resource = DosenSipilResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
