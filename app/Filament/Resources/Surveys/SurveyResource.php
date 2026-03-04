<?php

namespace App\Filament\Resources\Surveys;

use App\Filament\Resources\Surveys\Pages\ManageSurveys;
use App\Models\Survey;
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

class SurveyResource extends Resource
{
    protected static ?string $model = Survey::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::PencilSquare;

    protected static string | UnitEnum | null $navigationGroup = 'Quality Assurance';

    protected static ?string $navigationLabel = 'Survey';

    protected static ?string $pluralModelLabel = 'Survey';

    protected static ?string $recordTitleAttribute = 'jenis_survey';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('jenis_survey')
                    ->label('Jenis Survey')
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
            ->recordTitleAttribute('jenis_survey')
            ->columns([
                TextColumn::make('jenis_survey')
                    ->label('Jenis Survey')
                    ->searchable(),
                TextColumn::make('link')
                    ->label('Link')
                    ->searchable(),
                TextColumn::make('date')
                    ->label('Tanggal Dikeluarkan')
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
            'index' => ManageSurveys::route('/'),
        ];
    }
}
