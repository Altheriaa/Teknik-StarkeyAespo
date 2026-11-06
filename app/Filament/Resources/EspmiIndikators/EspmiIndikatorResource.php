<?php

namespace App\Filament\Resources\EspmiIndikators;

use App\Filament\Resources\EspmiIndikators\Pages\ManageEspmiIndikators;
use App\Models\EspmiIndikator;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class EspmiIndikatorResource extends Resource
{
    protected static ?string $model = EspmiIndikator::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::ListBullet;

    protected static string | UnitEnum | null $navigationGroup = 'e-SPMI';

    protected static ?string $navigationLabel = 'Indikator';

    protected static ?int $navigationSort = 2;

    protected static ?string $modelLabel = 'Indikator';

    protected static ?string $pluralModelLabel = 'Indikator e-SPMI';

    protected static ?string $recordTitleAttribute = 'kode';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('standar_id')
                    ->label('Standar')
                    ->relationship('standar', 'nama')
                    ->searchable()
                    ->preload()
                    ->required(),
                TextInput::make('kode')
                    ->label('Indikator Standar (kode)')
                    ->placeholder('contoh: 1.1')
                    ->required()
                    ->maxLength(30),
                Textarea::make('renstra_unaya')
                    ->label('Indikator Renstra (UNAYA)')
                    ->rows(2),
                Textarea::make('renstra_lppm')
                    ->label('Indikator Renstra LPPM')
                    ->helperText('Hanya diisi untuk standar penelitian/pengabdian. Kolom ini baru tampil di website jika ada isinya.')
                    ->rows(2),
                Textarea::make('capaian')
                    ->label('Indikator Capaian Standar')
                    ->required()
                    ->rows(3),
                TextInput::make('acuan')
                    ->label('Acuan')
                    ->maxLength(255),
                Textarea::make('sumber_data')
                    ->label('Sumber Data')
                    ->rows(5),
                Textarea::make('verifikasi')
                    ->label('Verifikasi Indikator')
                    ->rows(5),
                TextInput::make('urutan')
                    ->label('Urutan tampil')
                    ->numeric()
                    ->default(0)
                    ->helperText('Angka kecil tampil lebih dulu di dalam standarnya.'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('kode')
            ->defaultSort('urutan')
            ->columns([
                TextColumn::make('standar.kode')
                    ->label('Std')
                    ->sortable(),
                TextColumn::make('kode')
                    ->label('Indikator')
                    ->searchable(),
                TextColumn::make('capaian')
                    ->label('Indikator Capaian Standar')
                    ->limit(80)
                    ->wrap()
                    ->searchable(),
                TextColumn::make('acuan')
                    ->label('Acuan')
                    ->toggleable(),
                TextColumn::make('urutan')
                    ->label('Urutan')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('standar_id')
                    ->label('Standar')
                    ->relationship('standar', 'nama'),
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
            'index' => ManageEspmiIndikators::route('/'),
        ];
    }
}