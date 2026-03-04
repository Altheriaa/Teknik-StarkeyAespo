<?php

namespace App\Filament\Resources\DokumenMonevs;

use App\Filament\Resources\DokumenMonevs\Pages\ManageDokumenMonevs;
use App\Models\DokumenMonev;
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

class DokumenMonevResource extends Resource
{
    protected static ?string $model = DokumenMonev::class;

   protected static string|BackedEnum|null $navigationIcon = Heroicon::DocumentText;

    protected static string | UnitEnum | null $navigationGroup = 'Quality Assurance';

    protected static ?string $navigationLabel = 'Dokumen Monev';

    protected static ?string $pluralModelLabel = 'Dokumen Monev';

    protected static ?string $recordTitleAttribute = 'nama_dokumen';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('nama_dokumen')
                    ->label('Nama Dokumen')
                    ->required(),
                TextInput::make('link')
                    ->label('Link')
                    ->required(),
                DatePicker::make('date')
                    ->label('Tanggal')
                    ->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('nama_dokumen')
            ->columns([
                TextColumn::make('nama_dokumen')
                    ->label('Nama Dokumen')
                    ->searchable(),
                TextColumn::make('link')
                    ->label('Link')
                    ->searchable(),
                TextColumn::make('date')
                    ->label('Tanggal Dikerluarkan')
                    ->searchable()
                    ->sortable(),
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
            'index' => ManageDokumenMonevs::route('/'),
        ];
    }
}
