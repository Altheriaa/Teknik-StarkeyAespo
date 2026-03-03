<?php

namespace App\Filament\Resources\KegiatanHimasis\Pages;

use App\Filament\Resources\KegiatanHimasis\KegiatanHimasiResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageKegiatanHimasis extends ManageRecords
{
    protected static string $resource = KegiatanHimasiResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
