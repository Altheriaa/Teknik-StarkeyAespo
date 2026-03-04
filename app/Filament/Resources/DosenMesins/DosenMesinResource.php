<?php

namespace App\Filament\Resources\DosenMesins;

use App\Filament\Resources\DosenMesins\Pages\ManageDosenMesins;
use App\Models\DosenMesin;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Section;
use Filament\Tables\Columns\ImageColumn;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class DosenMesinResource extends Resource
{
    protected static ?string $model = DosenMesin::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::UserGroup;

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Dosen';

    protected static ?string $navigationLabel = 'Dosen Mesin';

    protected static ?string $pluralModelLabel = 'Dosen Mesin FT-Unaya';

    protected static ?string $recordTitleAttribute = 'nama_dosen';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('gambar_dosen')
                    ->label('Foto Dosen')
                    ->visibility('public')
                    ->disk('public') // Pastikan disk yang digunakan adalah 'public'
                    ->directory('uploads/gambar_dosen_si'),
                TextInput::make('nama_dosen')
                    ->label('Nama Dosen')
                    ->required(),
                Select::make('posisi_dosen')
                    ->label('Posisi Dosen')
                    ->options([
                        'Dosen' => 'Dosen',
                        'Kaprodi' => 'Kaprodi',
                    ]),
                Select::make('jabatan_dosen')
                    ->label('Posisi Dosen')
                    ->options([
                        'Asisten Ahli' => 'Asisten Ahli',
                        'Lektor' => 'Lektor',
                        'Lektor Kepala' => 'Lektor Kepala',
                        'Profesor' => 'Profesor',
                    ]),
                TextInput::make('nuptk')
                    ->label('NUPTK'),
                Section::make('Riwayat Pendidikan')
                    ->schema([
                        TextInput::make('riwayat_prodi')
                            ->label('Program Studi'),
                        TextInput::make('riwayat_universitas')
                            ->label('Universitas')
                    ])
                    ->collapsible(),
                TextInput::make('link_publikasi')
                    ->label('Link Publikasi')
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('nama_dosen')
            ->columns([
                TextColumn::make('nama_dosen')
                    ->searchable()
                    ->label('Nama Dosen'),
                ImageColumn::make('gambar_dosen')
                    ->label('Foto Dosen')
                    ->disk('public')
                    ->circular(),
                TextColumn::make('jabatan_dosen')
                    ->label('Jabatan'),
                TextColumn::make('posisi_dosen')
                    ->label('Posisi'),
                TextColumn::make('nuptk')
                    ->label('NUPTK'),
                TextColumn::make('riwayat_prodi')
                    ->label('Riwayat Program Studi'),
                TextColumn::make('riwayat_universitas')
                    ->label('Riwayat Universitas'),
                TextColumn::make('link_publikasi')
                    ->label('Link Publikasi')
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
            'index' => ManageDosenMesins::route('/'),
        ];
    }
}
