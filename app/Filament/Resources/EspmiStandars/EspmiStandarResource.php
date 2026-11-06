<?php

namespace App\Filament\Resources\EspmiStandars;

use App\Filament\Resources\EspmiStandars\Pages\ManageEspmiStandars;
use App\Models\EspmiStandar;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class EspmiStandarResource extends Resource
{
    protected static ?string $model = EspmiStandar::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Squares2x2;

    protected static string | UnitEnum | null $navigationGroup = 'e-SPMI';

    protected static ?string $navigationLabel = 'Standar';

    protected static ?int $navigationSort = 1;

    protected static ?string $modelLabel = 'Standar';

    protected static ?string $pluralModelLabel = 'Standar e-SPMI';

    protected static ?string $recordTitleAttribute = 'nama';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('kode')
                    ->label('Kode Standar')
                    ->placeholder('contoh: 1')
                    ->required()
                    ->maxLength(30),
                TextInput::make('nama')
                    ->label('Nama Standar')
                    ->required()
                    ->maxLength(255),
                TextInput::make('urutan')
                    ->label('Urutan tampil')
                    ->numeric()
                    ->default(0)
                    ->helperText('Angka kecil tampil lebih dulu.'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('nama')
            ->defaultSort('urutan')
            ->columns([
                TextColumn::make('kode')
                    ->label('Kode')
                    ->searchable(),
                TextColumn::make('nama')
                    ->label('Nama Standar')
                    ->searchable()
                    ->wrap(),
                TextColumn::make('indikators_count')
                    ->label('Jumlah Indikator')
                    ->counts('indikators'),
                TextColumn::make('urutan')
                    ->label('Urutan')
                    ->sortable(),
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
            'index' => ManageEspmiStandars::route('/'),
        ];
    }
}
