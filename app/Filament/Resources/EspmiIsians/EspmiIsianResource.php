<?php

namespace App\Filament\Resources\EspmiIsians;

use App\Filament\Resources\EspmiIsians\Pages\ManageEspmiIsians;
use App\Models\EspmiIsian;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Unique;

/**
 * Dipakai admin untuk (1) mengisi bukti dari prodi: Data Dukung (link) & Deskripsi,
 * dan (2) mengoreksi hasil audit. Penilaian utama dilakukan auditor di website /e-spmi.
 */
class EspmiIsianResource extends Resource
{
    protected static ?string $model = EspmiIsian::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::ClipboardDocumentCheck;

    protected static string | UnitEnum | null $navigationGroup = 'e-SPMI';

    protected static ?string $navigationLabel = 'Isian & Hasil Audit';

    protected static ?int $navigationSort = 3;

    protected static ?string $modelLabel = 'Isian';

    protected static ?string $pluralModelLabel = 'Isian & Hasil Audit e-SPMI';

    protected static function kesimpulanOptions(): array
    {
        return collect(config('espmi.kesimpulan'))
            ->mapWithKeys(fn ($d, $skor) => [$skor => $skor . '-' . $d['label']])
            ->all();
    }

    public static function form(Schema $schema): Schema
    {
        $prodi = array_combine(config('espmi.program_studi'), config('espmi.program_studi'));

        return $schema
            ->components([
                Select::make('indikator_id')
                    ->label('Indikator')
                    ->relationship('indikator', 'kode')
                    ->getOptionLabelFromRecordUsing(
                        fn ($record) => $record->kode . ' — ' . Str::limit($record->capaian, 60)
                    )
                    ->searchable()
                    ->preload()
                    ->live()
                    ->required(),
                Select::make('program_studi')
                    ->label('Program Studi')
                    ->options($prodi)
                    ->live()
                    ->required(),
                Select::make('siklus')
                    ->label('Siklus')
                    ->options(config('espmi.siklus'))
                    ->default(config('espmi.siklus_aktif'))
                    ->required()
                    ->unique(
                        ignoreRecord: true,
                        modifyRuleUsing: fn (Unique $rule, Get $get) => $rule
                            ->where('indikator_id', $get('indikator_id'))
                            ->where('program_studi', $get('program_studi')),
                    )
                    ->validationMessages([
                        'unique' => 'Hasil audit untuk indikator, program studi, dan siklus ini sudah ada.',
                    ]),
                TextInput::make('link')
                    ->label('Data Dukung (Link dari prodi)')
                    ->url()
                    ->maxLength(255),
                Textarea::make('deskripsi')
                    ->label('Deskripsi (dari prodi)')
                    ->rows(3),
                Textarea::make('hasil_verifikasi')
                    ->label('Hasil Verifikasi (auditor)')
                    ->rows(3),
                Textarea::make('penyebab')
                    ->label('Penyebab')
                    ->rows(2),
                Textarea::make('tindakan_pencegahan')
                    ->label('Tindakan Pencegahan')
                    ->rows(2),
                Select::make('skor')
                    ->label('Kesimpulan Verifikasi')
                    ->options(static::kesimpulanOptions()),
                DatePicker::make('realisasi')
                    ->label('Realisasi (Tanggal/Bulan/Tahun)'),
            ]);
    }

    public static function table(Table $table): Table
    {
        $prodi = array_combine(config('espmi.program_studi'), config('espmi.program_studi'));

        return $table
            ->defaultSort('updated_at', 'desc')
            ->columns([
                TextColumn::make('indikator.kode')
                    ->label('Indikator')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('program_studi')
                    ->label('Program Studi')
                    ->searchable(),
                TextColumn::make('siklus')
                    ->label('Siklus'),
                TextColumn::make('link')
                    ->label('Data Dukung')
                    ->limit(30)
                    ->toggleable(),
                TextColumn::make('skor')
                    ->label('Skor')
                    ->badge()
                    ->color(fn ($state) => match ((int) $state) {
                        4 => 'success',
                        3 => 'info',
                        2 => 'warning',
                        default => 'danger',
                    })
                    ->sortable(),
                TextColumn::make('realisasi')
                    ->label('Realisasi')
                    ->date('d M Y')
                    ->toggleable(),
                TextColumn::make('penilai.name')
                    ->label('Dinilai oleh')
                    ->toggleable(),
                TextColumn::make('dinilai_pada')
                    ->label('Waktu Penilaian')
                    ->dateTime('d M Y H:i')
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('program_studi')
                    ->label('Program Studi')
                    ->options($prodi),
                SelectFilter::make('siklus')
                    ->label('Siklus')
                    ->options(config('espmi.siklus')),
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
            'index' => ManageEspmiIsians::route('/'),
        ];
    }
}