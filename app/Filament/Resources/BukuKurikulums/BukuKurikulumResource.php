<?php

namespace App\Filament\Resources\BukuKurikulums;

use App\Filament\Resources\BukuKurikulums\Pages\ManageBukuKurikulums;
use App\Models\BukuKurikulum;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BukuKurikulumResource extends Resource
{
    protected static ?string $model = BukuKurikulum::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-book-open';

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Kurikulum';

    protected static ?string $navigationLabel = 'Buku Kurikulum';

    protected static ?string $pluralModelLabel = 'Buku Kurikulum FT-Unaya';

    protected static ?string $recordTitleAttribute = 'file';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('prodi')
                    ->required()
                    ->label('Nama Prodi')
                    ->options([
                        'Teknik Mesin' => 'Teknik Mesin',
                        'Teknik Sipil' => 'Teknik Sipil',
                        'Sistem Informasi' => 'Sistem Informasi',
                    ]),

                TextInput::make('file')
                    ->label('Link Download PDF')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('file')
            ->columns([
                TextColumn::make('prodi')->label('Prodi'),
                TextColumn::make('file')
                    ->label('Link Download PDF')
                    ->url(fn ($record) => $record->file)
                    ->openUrlInNewTab(),
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
            'index' => ManageBukuKurikulums::route('/'),
        ];
    }
}
