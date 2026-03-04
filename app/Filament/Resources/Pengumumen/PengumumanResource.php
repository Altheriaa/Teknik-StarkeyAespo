<?php

namespace App\Filament\Resources\Pengumumen;

use App\Filament\Resources\Pengumumen\Pages\ManagePengumumen;
use App\Models\Pengumuman;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PengumumanResource extends Resource
{
    protected static ?string $model = Pengumuman::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::SpeakerWave;

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Konten';

    protected static ?string $navigationLabel = 'Pengumuman';

    protected static ?string $pluralModelLabel = 'Pengumuman FT-Unaya';

    protected static ?string $recordTitleAttribute = 'judul_pengumuman';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('tanggal_pengumuman')
                    ->label('Tanggal Pengumuman')
                    ->required()
                    ->numeric(),
                Select::make('bulan_pengumuman')
                    ->label('Bulan Pengumuman')
                    ->options([
                            'JAN' => 'J a n',
                            'FEB' => 'F e b',
                            'MAR' => 'M a r',
                            'APR' => 'A p r',
                            'MEI' => 'M e i',
                            'JUNI' => 'J u n i',
                            'JULI' => 'J u l i',
                            'AGU' => 'A g u',
                            'SEP' => 'S e p',
                            'OKT' => 'O k t',
                            'NOV' => 'N o v',
                            'DES' => 'D e s',
        ])
                    ->required(),
                TextInput::make('judul_pengumuman')
                    ->label('Judul Pengumuman')
                    ->required(),
                Textarea::make('deskripsi_pengumuman')
                    ->label('Deskripsi Pengumuman')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('link')
                    ->label('Link Pengumuman')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('judul_pengumuman')
            ->columns([
                TextColumn::make('tanggal_pengumuman')
                    ->label('Tanggal Pengumuman')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('bulan_pengumuman')
                    ->label('Bulan Pengumuman')
                    ->badge(),
                TextColumn::make('judul_pengumuman')
                    ->label('Judul Pengumuman')
                    ->searchable(),
                TextColumn::make('link')
                    ->label('Link Pengumuman')
                    ->searchable(),
                TextColumn::make('created_at')
                    ->label('Tanggal Dibuat')
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
            'index' => ManagePengumumen::route('/'),
        ];
    }
}
