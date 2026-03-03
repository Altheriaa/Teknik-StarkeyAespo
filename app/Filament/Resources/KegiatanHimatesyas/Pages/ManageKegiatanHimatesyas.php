<?php

namespace App\Filament\Resources\KegiatanHimatesyas\Pages;

use App\Filament\Resources\KegiatanHimatesyas\KegiatanHimatesyaResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageKegiatanHimatesyas extends ManageRecords
{
    protected static string $resource = KegiatanHimatesyaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
