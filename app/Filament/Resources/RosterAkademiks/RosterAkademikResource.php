<?php

namespace App\Filament\Resources\RosterAkademiks;

use App\Filament\Resources\RosterAkademiks\Pages\ManageRosterAkademiks;
use App\Models\RosterAkademik;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RosterAkademikResource extends Resource
{
    protected static ?string $model = RosterAkademik::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::ArrowPath;

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Jadwal Akademik';

    protected static ?string $navigationLabel = 'Roster Akademik';

    protected static ?string $pluralModelLabel = 'Roster Akademik';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('roster_sipil')
                    ->label('Roster Sipil')
                    ->visibility('public')
                    ->disk('public') 
                    ->acceptedFileTypes(['application/pdf'])
                    ->preserveFilenames()
                    ->directory('uploads/Roster'),
                FileUpload::make('roster_mesin')
                    ->label('Roster Mesin')
                    ->visibility('public')
                    ->disk('public') 
                    ->acceptedFileTypes(['application/pdf'])
                    ->preserveFilenames()
                    ->directory('uploads/Roster'),
                FileUpload::make('roster_sistem_informasi')
                    ->label('Roster Sistem Informasi')
                    ->visibility('public')
                    ->disk('public') 
                    ->acceptedFileTypes(['application/pdf'])
                    ->preserveFilenames()
                    ->directory('uploads/Roster'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('roster_sipil')
                    ->label('Sipil')
                    ->formatStateUsing(fn ($state) => $state ? 'Lihat PDF' : 'Kosong')
                    ->url(fn ($record) => $record->roster_sipil ? asset('storage/' . $record->roster_sipil) : null)
                    ->color('primary')
                    ->openUrlInNewTab(),
                TextColumn::make('roster_mesin')
                    ->label('Mesin')
                    ->formatStateUsing(fn ($state) => $state ? 'Lihat PDF' : 'Kosong')
                    ->url(fn ($record) => $record->roster_mesin ? asset('storage/' . $record->roster_mesin) : null)
                    ->color('primary')
                    ->openUrlInNewTab(),
                TextColumn::make('roster_sistem_informasi')
                    ->label('Sistem Informasi')
                    ->formatStateUsing(fn ($state) => $state ? 'Lihat PDF' : 'Kosong')
                    ->url(fn ($record) => $record->roster_sistem_informasi ? asset('storage/' . $record->roster_sistem_informasi) : null)
                    ->color('primary')
                    ->openUrlInNewTab(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageRosterAkademiks::route('/'),
        ];
    }
}
