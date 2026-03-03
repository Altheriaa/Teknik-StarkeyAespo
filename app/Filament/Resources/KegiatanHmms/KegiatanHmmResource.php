<?php

namespace App\Filament\Resources\KegiatanHmms;

use App\Filament\Resources\KegiatanHmms\Pages\ManageKegiatanHmms;
use App\Models\KegiatanHmm;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class KegiatanHmmResource extends Resource
{
    protected static ?string $model = KegiatanHmm::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-newspaper';

    protected static string | UnitEnum | null $navigationGroup = 'Manajemen Konten Organisasi';

    protected static ?string $navigationLabel = 'Kegiatan HMM';

    protected static ?string $pluralModelLabel = 'Kegiatan HMM';

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Judul')
                    ->required()
                    ->columnSpanFull(),

                TextInput::make('slug')
                    ->unique(
                        table: 'berita',
                        column: 'slug',
                        ignorable: fn($record) => $record,
                    )
                    ->label('Slug')
                    ->required()
                    ->columnSpanFull(),

                RichEditor::make('description')
                    ->label('Deksripsi Berita')
                    ->required()
                    ->columnSpanFull(),

                FileUpload::make('image_news')
                    ->label('Gambar Berita (Format .jpg .png, .jpeg)')
                    ->required()
                    ->directory('uploads/berita')
                    ->disk('public')
                    ->columnSpan('full')
                    ->imagePreviewHeight('250')
                    ->acceptedFileTypes(['image/jpeg', 'image/png'])
                    ->rules(['mimes:jpeg,jpg,png']),

                DatePicker::make('date')
                    ->label('Tanggal Berita')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('title')
            ->columns([
                ImageColumn::make('image_news')
                    ->label('Gambar Berita')
                    ->disk('public')
                    ->square()
                    ->width(200)
                    ->height(200),

                TextColumn::make('slug')
                    ->label('Slug')
                    ->searchable()
                    ->limit(50)
                    ->wrap(),

                TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->limit(50)
                    ->wrap(),

                TextColumn::make('description')
                    ->label('Deskripsi')
                    ->limit(100)
                    ->wrap(),

                TextColumn::make('date')
                    ->label('Tanggal Publikasi')
                    ->dateTime('d M Y')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('views')
                    ->label('Tayangan'),
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
            'index' => ManageKegiatanHmms::route('/'),
        ];
    }
}
