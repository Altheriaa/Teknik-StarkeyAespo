<?php

namespace App\Filament\Resources\DokumenAmis\Pages;

use App\Filament\Resources\DokumenAmis\DokumenAmiResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageDokumenAmis extends ManageRecords
{
    protected static string $resource = DokumenAmiResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
