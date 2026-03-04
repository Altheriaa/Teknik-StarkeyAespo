<?php

namespace App\Filament\Resources\PengurusanSurats;

use App\Filament\Resources\PengurusanSurats\Pages\ManagePengurusanSurats;
use App\Models\PengurusanSurat;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DatePicker;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PengurusanSuratResource extends Resource
{
    protected static ?string $model = PengurusanSurat::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-envelope';

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Download';

    protected static ?string $navigationLabel = 'Pengurusan Surat';

    protected static ?string $pluralModelLabel = 'Pengurusan Surat';

    protected static ?string $recordTitleAttribute = 'pengurusan_surat';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('pengurusan_surat')
                    ->label('Pengurusan Surat')
                    ->required(),
                TextInput::make('link')
                    ->label('Link')
                    ->required(),
                DatePicker::make('date')
                    ->label('Tanggal')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('pengurusan_surat')
            ->columns([
                TextColumn::make('pengurusan_surat')
                    ->label('Pengurusan Surat')
                    ->searchable(),
                TextColumn::make('link')
                    ->label('Link')
                    ->searchable(),
                TextColumn::make('date')
                    ->label('Tanggal')
                    ->searchable(),
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
            'index' => ManagePengurusanSurats::route('/'),
        ];
    }
}
