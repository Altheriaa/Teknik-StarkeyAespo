<?php

namespace App\Filament\Resources\KalenderAkademiks;

use App\Filament\Resources\KalenderAkademiks\Pages\ManageKalenderAkademiks;
use App\Models\KalenderAkademik;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class KalenderAkademikResource extends Resource
{
    protected static ?string $model = KalenderAkademik::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Calendar;

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Jadwal Akademik';

    protected static ?string $navigationLabel = 'Kalender Akademik';

    protected static ?string $pluralModelLabel = 'Kalender Akademik FT-Unaya';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('image')
                    ->label('Kalender Genap')
                    ->visibility('public')
                    ->preserveFilenames()
                    ->disk('public') 
                    ->directory('uploads/kalender_akademik'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->disk('public') // Pastikan disk yang digunakan adalah 'public'
                    ->visibility('public')
                    ->imageHeight('100%')
                    ->imageWidth('100%')
                    ->label('Kalender Akademik'),
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
            'index' => ManageKalenderAkademiks::route('/'),
        ];
    }
}
