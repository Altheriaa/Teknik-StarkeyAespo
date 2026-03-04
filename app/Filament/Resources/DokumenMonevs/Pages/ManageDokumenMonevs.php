<?php

namespace App\Filament\Resources\DokumenMonevs\Pages;

use App\Filament\Resources\DokumenMonevs\DokumenMonevResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageDokumenMonevs extends ManageRecords
{
    protected static string $resource = DokumenMonevResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
