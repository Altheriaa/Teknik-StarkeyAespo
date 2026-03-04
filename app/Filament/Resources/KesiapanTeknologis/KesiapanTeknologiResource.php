<?php

namespace App\Filament\Resources\KesiapanTeknologis;

use App\Filament\Resources\KesiapanTeknologis\Pages\ManageKesiapanTeknologis;
use App\Models\KesiapanTeknologi;
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

class KesiapanTeknologiResource extends Resource
{
    protected static ?string $model = KesiapanTeknologi::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::AcademicCap;

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Penghargaan';

    protected static ?string $navigationLabel = 'Tingkat Kesiapan Teknologi';

    protected static ?string $pluralModelLabel = 'Tingkat Kesiapan Teknologi';

    protected static ?string $recordTitleAttribute = 'produk_inovasi';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('produk_inovasi')
                    ->label('Produk Inovasi Teknologi')
                    ->required(),
                TextInput::make('deskripsi')
                    ->label('Deskripsi')
                    ->required(),
                TextInput::make('nilai_tkt')
                    ->label('Nilai TKT')
                    ->required(),
                TextInput::make('link')
                    ->label('Link'),
                DatePicker::make('tanggal')
                    ->label('Tanggal')
                    ->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('produk_inovasi')
            ->columns([
                TextColumn::make('produk_inovasi')
                    ->label('Produk Inovasi Teknologi')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('deskripsi')
                    ->label('Deskripsi')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('nilai_tkt')
                    ->label('Nilai TKT')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('link')
                    ->label('Link')
                    ->sortable(),
                TextColumn::make('tanggal')
                    ->label('Tanggal')
                    ->date()
                    ->sortable()
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
            'index' => ManageKesiapanTeknologis::route('/'),
        ];
    }
}
