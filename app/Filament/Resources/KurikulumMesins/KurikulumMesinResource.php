<?php

namespace App\Filament\Resources\KurikulumMesins;

use App\Filament\Resources\KurikulumMesins\Pages\ManageKurikulumMesins;
use App\Models\KurikulumMesin;
use BackedEnum;
use UnitEnum;   
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class KurikulumMesinResource extends Resource
{
    protected static ?string $model = KurikulumMesin::class;

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Kurikulum';

    protected static ?string $navigationLabel = 'Kurikulum Teknik Mesin';

    protected static ?string $pluralModelLabel = 'Kurikulum Teknik Mesin FT-Unaya';

    protected static ?string $recordTitleAttribute = 'mata_kuliah';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('semester')
                    ->label('Semester')
                    ->numeric()
                    ->required(),
                TextInput::make('kode_mk')
                    ->label('Kode Mata Kuliah')
                    ->required(),
                TextInput::make('mata_kuliah')
                    ->label('Mata Kuliah')
                    ->required(),
                TextInput::make('sks')
                    ->label('SKS')
                    ->numeric()
                    ->required(),
                TextInput::make('praktek')
                    ->label('Praktek')
                    ->numeric()
                    ->required(),
                TextInput::make('teori')
                    ->label('Teori')
                    ->numeric()
                    ->required(),
                Select::make('kategori')
                    ->label('Kategori Mata Kuliah')
                    ->required()
                    ->options([
                        'wajib' => 'Wajib',
                        'pilihan' => 'Pilihan',
                    ]),
                TextInput::make('rps')
                    ->label('RPS'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('mata_kuliah')
            ->columns([
                TextColumn::make('semester')
                    ->label('Semester')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('kode_mk')
                    ->label('Kode Mata Kuliah')
                    ->searchable(),
                TextColumn::make('mata_kuliah')
                    ->label('Mata Kuliah')
                    ->searchable(),
                TextColumn::make('sks')
                    ->label('SKS')
                    ->searchable(),
                TextColumn::make('praktek')
                    ->label('Praktek')
                    ->searchable(),
                TextColumn::make('teori')
                    ->label('Teori')
                    ->searchable(),
                TextColumn::make('kategori')
                    ->label('Kategori Mata Kuliah')
                    ->searchable(),
                TextColumn::make('rps')
                    ->label('RPS'),
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
            'index' => ManageKurikulumMesins::route('/'),
        ];
    }
}
