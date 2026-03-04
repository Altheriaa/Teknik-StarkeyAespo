<?php

namespace App\Filament\Resources\RosterAkademiks\Pages;

use App\Filament\Resources\RosterAkademiks\RosterAkademikResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageRosterAkademiks extends ManageRecords
{
    protected static string $resource = RosterAkademikResource::class;

    protected function getHeaderActions(): array
    {
        return [
            // CreateAction::make(),
        ];
    }
}
