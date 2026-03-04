<?php

namespace App\Filament\Resources\KegiatanAkademiks;

use App\Filament\Resources\KegiatanAkademiks\Pages\ManageKegiatanAkademiks;
use App\Models\KegiatanAkademik;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class KegiatanAkademikResource extends Resource
{
    protected static ?string $model = KegiatanAkademik::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-academic-cap';

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Download';

    protected static ?string $navigationLabel = 'Kegiatan Akademik';

    protected static ?string $pluralModelLabel = 'Kegiatan Akademik';

    protected static ?string $recordTitleAttribute = 'nama_kegiatan';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Textarea::make('nama_kegiatan')
                    ->label('Nama Kegiatan')
                    ->required(),
                TextInput::make('link')
                    ->label('Link')
                    ->required(),
                DatePicker::make('tanggal_pelaksanaan')
                    ->label('Tanggal Pelaksanaan')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('nama_kegiatan')
            ->columns([
                TextColumn::make('nama_kegiatan')
                    ->limit(50)
                    ->label('Nama Kegiatan')
                    ->wrap()
                    ->searchable(),
                TextColumn::make('link')
                    ->limit(50)
                    ->wrap()
                    ->label('Link')
                    ->searchable(),
                TextColumn::make('tanggal_pelaksanaan')
                    ->label('Tanggal Pelaksanaan')
                    ->searchable()
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
            'index' => ManageKegiatanAkademiks::route('/'),
        ];
    }
}
