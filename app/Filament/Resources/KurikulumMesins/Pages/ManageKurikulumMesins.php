<?php

namespace App\Filament\Resources\KurikulumMesins\Pages;

use App\Filament\Resources\KurikulumMesins\KurikulumMesinResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageKurikulumMesins extends ManageRecords
{
    protected static string $resource = KurikulumMesinResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
