<?php

namespace App\Filament\Resources\EspmiAudits\Pages;

use App\Filament\Resources\EspmiAudits\EspmiAuditResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageEspmiAudits extends ManageRecords
{
    protected static string $resource = EspmiAuditResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}