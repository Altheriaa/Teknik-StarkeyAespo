<?php

namespace App\Filament\Resources\Agendas;

use App\Filament\Resources\Agendas\Pages\ManageAgendas;
use App\Models\Agenda;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class AgendaResource extends Resource
{
    protected static ?string $model = Agenda::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-calendar-days';

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Konten';

    protected static ?string $navigationLabel = 'Agenda';

    protected static ?string $pluralModelLabel = 'Agenda FT-Unaya';

    protected static ?string $recordTitleAttribute = 'nama_agenda';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('tahun_agenda')
                    ->numeric(),
                TextInput::make('nama_agenda'),
                TextInput::make('masa_agenda'),
                DatePicker::make('date'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('nama_agenda')
            ->columns([
                TextColumn::make('tahun_agenda')
                    ->label('Tahun Agenda')
                    ->sortable(),
                TextColumn::make('nama_agenda')
                    ->label('Nama Agenda')
                    ->searchable(),
                TextColumn::make('masa_agenda')
                    ->label('Masa Agenda')
                    ->searchable(),
                TextColumn::make('date')
                    ->label('Tanggal Agenda')
                    ->date()
                    ->sortable(),
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
            'index' => ManageAgendas::route('/'),
        ];
    }
}
