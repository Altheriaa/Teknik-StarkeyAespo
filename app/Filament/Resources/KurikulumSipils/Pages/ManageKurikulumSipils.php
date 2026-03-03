<?php

namespace App\Filament\Resources\KurikulumSipils\Pages;

use App\Filament\Resources\KurikulumSipils\KurikulumSipilResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageKurikulumSipils extends ManageRecords
{
    protected static string $resource = KurikulumSipilResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
