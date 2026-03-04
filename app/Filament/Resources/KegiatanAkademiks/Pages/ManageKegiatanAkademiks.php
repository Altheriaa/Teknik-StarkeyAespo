<?php

namespace App\Filament\Resources\KegiatanAkademiks\Pages;

use App\Filament\Resources\KegiatanAkademiks\KegiatanAkademikResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageKegiatanAkademiks extends ManageRecords
{
    protected static string $resource = KegiatanAkademikResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
