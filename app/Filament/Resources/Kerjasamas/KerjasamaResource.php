<?php

namespace App\Filament\Resources\Kerjasamas;

use App\Filament\Resources\Kerjasamas\Pages\ManageKerjasamas;
use App\Models\Kerjasama;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class KerjasamaResource extends Resource
{
    protected static ?string $model = Kerjasama::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::DocumentPlus;

    protected static ?string $recordTitleAttribute = 'nama_kerjasama';

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Konten';

    protected static ?string $navigationLabel = 'Kerjasama';

    protected static ?string $pluralModelLabel = 'Kerjasama FT-Unaya';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('nama_kerjasama')
                    ->required(),
                TextInput::make('lingkup_kerjasama')
                    ->required(),
                TextInput::make('jenis_dokumen')
                    ->required(),
                Select::make('status_kerjasama')
                    ->options(['Aktif' => 'Aktif', 'Selesai' => 'Selesai'])
                    ->required(),
                TextInput::make('link')
                    ->required(),
                DatePicker::make('tanggal')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('nama_kerjasama')
            ->columns([
                TextColumn::make('nama_kerjasama')
                    ->searchable(),
                TextColumn::make('lingkup_kerjasama')
                    ->searchable(),
                TextColumn::make('jenis_dokumen')
                    ->searchable(),
                TextColumn::make('status_kerjasama')
                    ->badge(),
                TextColumn::make('link')
                    ->searchable(),
                TextColumn::make('tanggal')
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
            'index' => ManageKerjasamas::route('/'),
        ];
    }
}
