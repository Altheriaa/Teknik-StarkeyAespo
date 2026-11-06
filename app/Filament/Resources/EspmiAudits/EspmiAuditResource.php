<?php

namespace App\Filament\Resources\EspmiAudits;

use App\Filament\Resources\EspmiAudits\Pages\ManageEspmiAudits;
use App\Models\EspmiAudit;
use BackedEnum;
use UnitEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Validation\Rules\Unique;

/**
 * Identitas auditee yang tampil di halaman Rekap /e-spmi/rekap
 * (Dekan, Ka. Prodi, DTPS, Tim Auditor, Tanggal Audit) per prodi & siklus.
 */
class EspmiAuditResource extends Resource
{
    protected static ?string $model = EspmiAudit::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::UserGroup;

    protected static string | UnitEnum | null $navigationGroup = 'e-SPMI';

    protected static ?string $navigationLabel = 'Identitas Audit';

    protected static ?int $navigationSort = 4;

    protected static ?string $modelLabel = 'Identitas Audit';

    protected static ?string $pluralModelLabel = 'Identitas Audit e-SPMI';

    public static function form(Schema $schema): Schema
    {
        $prodi = array_combine(config('espmi.program_studi'), config('espmi.program_studi'));

        return $schema
            ->components([
                Select::make('program_studi')
                    ->label('Program Studi (Auditee)')
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
                            ->where('program_studi', $get('program_studi')),
                    )
                    ->validationMessages([
                        'unique' => 'Identitas audit untuk program studi dan siklus ini sudah ada.',
                    ]),
                TextInput::make('nama_dekan')
                    ->label('Nama Dekan')
                    ->maxLength(255),
                TextInput::make('nama_kaprodi')
                    ->label('Nama Ka. Prodi')
                    ->maxLength(255),
                DatePicker::make('tanggal_audit')
                    ->label('Tanggal Audit'),
                Repeater::make('dtps')
                    ->label('Nama DTPS')
                    ->simple(
                        TextInput::make('nama')->required()->maxLength(255),
                    )
                    ->addActionLabel('Tambah DTPS')
                    ->defaultItems(0),
                Repeater::make('tim_auditor')
                    ->label('Tim Auditor')
                    ->simple(
                        TextInput::make('nama')->required()->maxLength(255),
                    )
                    ->addActionLabel('Tambah Auditor')
                    ->defaultItems(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        $prodi = array_combine(config('espmi.program_studi'), config('espmi.program_studi'));

        return $table
            ->defaultSort('updated_at', 'desc')
            ->columns([
                TextColumn::make('program_studi')
                    ->label('Program Studi')
                    ->searchable(),
                TextColumn::make('siklus')
                    ->label('Siklus'),
                TextColumn::make('nama_dekan')
                    ->label('Dekan')
                    ->toggleable(),
                TextColumn::make('nama_kaprodi')
                    ->label('Ka. Prodi')
                    ->toggleable(),
                TextColumn::make('tanggal_audit')
                    ->label('Tanggal Audit')
                    ->date('d M Y')
                    ->sortable(),
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
            'index' => ManageEspmiAudits::route('/'),
        ];
    }
}