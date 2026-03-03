<?php

namespace App\Filament\Resources\BukuKurikulums\Pages;

use App\Filament\Resources\BukuKurikulums\BukuKurikulumResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageBukuKurikulums extends ManageRecords
{
    protected static string $resource = BukuKurikulumResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
