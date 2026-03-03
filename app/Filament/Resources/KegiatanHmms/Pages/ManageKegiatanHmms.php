<?php

namespace App\Filament\Resources\KegiatanHmms\Pages;

use App\Filament\Resources\KegiatanHmms\KegiatanHmmResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageKegiatanHmms extends ManageRecords
{
    protected static string $resource = KegiatanHmmResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
