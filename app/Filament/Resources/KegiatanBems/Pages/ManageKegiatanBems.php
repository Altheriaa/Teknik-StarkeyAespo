<?php

namespace App\Filament\Resources\KegiatanBems\Pages;

use App\Filament\Resources\KegiatanBems\KegiatanBemResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageKegiatanBems extends ManageRecords
{
    protected static string $resource = KegiatanBemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
