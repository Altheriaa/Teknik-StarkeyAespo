<?php

namespace App\Filament\Resources\FlyerTenagaKerjas\Pages;

use App\Filament\Resources\FlyerTenagaKerjas\FlyerTenagaKerjaResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageFlyerTenagaKerjas extends ManageRecords
{
    protected static string $resource = FlyerTenagaKerjaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
