<?php

namespace App\Filament\Resources\FlyerTenagaKerjas;

use App\Filament\Resources\FlyerTenagaKerjas\Pages\ManageFlyerTenagaKerjas;
use App\Models\FlyerTenagaKerja;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\Textarea;
use Filament\Infolists\Components\TextEntry;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class FlyerTenagaKerjaResource extends Resource
{
    protected static ?string $model = FlyerTenagaKerja::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Briefcase;

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Konten';

    protected static ?string $navigationLabel = 'Flyer Tenaga Kerja';

    protected static ?string $pluralModelLabel = 'Flyer Rekrutmen Tenaga Kerja FT-Unaya';

    protected static ?string $recordTitleAttribute = 'judul';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('judul')
                    ->label('Judul')
                    ->required()
                    ->columnSpanFull(),

                RichEditor::make('deskripsi')
                    ->label('Deksripsi Flyer')
                    ->columnSpanFull(),

                FileUpload::make('gambar')
                    ->label('Gambar Flyer (Format .jpg .png, .jpeg)')
                    ->required()
                    ->directory('uploads/flyer-tenaga-kerja')
                    ->disk('public')
                    ->columnSpan('full')
                    ->imagePreviewHeight('250')
                    ->acceptedFileTypes(['image/jpeg', 'image/png'])
                    ->rules(['mimes:jpeg,jpg,png']),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('judul')
            ->columns([
                ImageColumn::make('gambar')
                    ->label('Gambar Flyer')
                    ->disk('public')
                    ->square()
                    ->width(200)
                    ->height(200),

                TextColumn::make('judul')
                    ->label('Judul')
                    ->searchable()
                    ->limit(50)
                    ->wrap(),

                TextColumn::make('deskripsi')
                    ->label('Deskripsi')
                    ->limit(100)
                    ->wrap(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make(),
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
            'index' => ManageFlyerTenagaKerjas::route('/'),
        ];
    }
}
