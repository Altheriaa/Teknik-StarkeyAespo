<?php

namespace App\Filament\Resources\KurikulumSis\Pages;

use App\Filament\Resources\KurikulumSis\KurikulumSiResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageKurikulumSis extends ManageRecords
{
    protected static string $resource = KurikulumSiResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
