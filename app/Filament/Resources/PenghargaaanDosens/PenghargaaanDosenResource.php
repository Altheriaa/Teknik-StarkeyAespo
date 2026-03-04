<?php

namespace App\Filament\Resources\PenghargaaanDosens;

use App\Filament\Resources\PenghargaaanDosens\Pages\ManagePenghargaaanDosens;
use App\Models\PenghargaanDosen;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\ImageColumn;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PenghargaaanDosenResource extends Resource
{
    protected static ?string $model = PenghargaanDosen::class;

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Penghargaan';

    protected static ?string $navigationLabel = 'Penghargaan Dosen';

    protected static ?string $pluralModelLabel = 'Penghargaan Dosen';

    protected static ?string $recordTitleAttribute = 'person';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('gambar_person')
                    ->label('Foto Dosen')
                    ->visibility('public')
                    ->disk('public') // Pastikan disk yang digunakan adalah 'public'
                    ->directory('uploads/gambar_person')
                    ->required(),
                TextInput::make('person')
                    ->label('Nama Dosen')
                    ->required(),
                TextArea::make('prestasi')
                    ->label('Prestasi')
                    ->required(),
                Select::make('tingkat')
                    ->label('Tingkat')
                    ->options([
                        'Internasional' => 'Internasional',
                        'Nasional' => 'Nasional',
                        'Wilayah' => 'Wilayah',
                        'Lokal' => 'Lokal',
                        'Provinsi' => 'Provinsi',
                        'Kabupaten/Kota' => 'Kabupaten/Kota',
                    ])
                    ->required(),
                TextInput::make('tahun')
                    ->label('Tahun')
                    ->minValue(2000)
                    ->maxValue(2030)
                    ->numeric()
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
            ->recordTitleAttribute('person')
            ->columns([
                TextColumn::make('person')
                    ->label('Nama Dosen')
                    ->searchable(),
                ImageColumn::make('gambar_person')
                    ->circular()
                    ->disk('public')
                    ->label('Foto Dosen'),
                TextColumn::make('person')
                    ->label('Nama Dosen')
                    ->searchable(),
                TextColumn::make('prestasi')
                    ->limit(50)
                    ->label('Prestasi')
                    ->searchable(),
                TextColumn::make('tingkat')
                    ->label('Tingkat')
                    ->searchable(),
                TextColumn::make('tahun')
                    ->label('Tahun')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('link')
                    ->label('Link'),
                TextColumn::make('date')
                    ->label('Tanggal')
                    ->searchable()
                    ->sortable()
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
            'index' => ManagePenghargaaanDosens::route('/'),
        ];
    }
}
