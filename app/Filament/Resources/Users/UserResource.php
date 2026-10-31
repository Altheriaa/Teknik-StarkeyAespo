<?php

namespace App\Filament\Resources\Users;

use App\Filament\Resources\Users\Pages\ManageUsers;
use App\Models\User;
use BackedEnum;
use UnitEnum;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Users;

    protected static string | UnitEnum | null $navigationGroup = 'Pengguna';

    protected static ?string $navigationLabel = 'Akun Pengguna';

    protected static ?string $modelLabel = 'Akun';

    protected static ?string $pluralModelLabel = 'Akun Pengguna';

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama')
                    ->required()
                    ->maxLength(255),
                Select::make('role')
                    ->label('Hak Akses')
                    ->options([
                        User::ROLE_QA_VIEWER => 'Pengguna QA (hanya melihat halaman Quality Assurance)',
                        User::ROLE_ADMIN => 'Admin (panel admin + halaman Quality Assurance)',
                    ])
                    ->default(User::ROLE_QA_VIEWER)
                    ->required()
                    ->live()
                    // Admin tidak bisa mengubah hak akses akunnya sendiri
                    ->disabled(fn (?User $record) => $record?->is(auth()->user())),
                TextInput::make('username')
                    ->label('Username')
                    ->helperText('Dipakai untuk login di website. Huruf, angka, strip, dan underscore.')
                    ->alphaDash()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true)
                    ->required(fn (Get $get) => $get('role') !== User::ROLE_ADMIN),
                TextInput::make('email')
                    ->label('Email')
                    ->email()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true)
                    ->required(fn (Get $get) => $get('role') === User::ROLE_ADMIN)
                    ->helperText('Wajib untuk Admin (dipakai login panel admin). Opsional untuk Pengguna QA.'),
                TextInput::make('password')
                    ->label('Password')
                    ->password()
                    ->revealable()
                    ->minLength(8)
                    ->required(fn (string $operation) => $operation === 'create')
                    // Jika kosong saat edit, password lama tidak diubah
                    ->dehydrated(fn (?string $state) => filled($state))
                    ->helperText('Saat mengedit, kosongkan jika tidak ingin mengganti password.'),
                Toggle::make('is_active')
                    ->label('Akun aktif')
                    ->default(true)
                    // Admin tidak bisa menonaktifkan akunnya sendiri
                    ->disabled(fn (?User $record) => $record?->is(auth()->user())),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                TextColumn::make('name')
                    ->label('Nama')
                    ->searchable(),
                TextColumn::make('username')
                    ->label('Username')
                    ->searchable(),
                TextColumn::make('email')
                    ->label('Email')
                    ->searchable(),
                TextColumn::make('role')
                    ->label('Hak Akses')
                    ->badge()
                    ->formatStateUsing(fn (string $state) => $state === User::ROLE_ADMIN ? 'Admin' : 'Pengguna QA')
                    ->color(fn (string $state) => $state === User::ROLE_ADMIN ? 'warning' : 'info'),
                IconColumn::make('is_active')
                    ->label('Aktif')
                    ->boolean(),
                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->recordActions([
                EditAction::make(),
                // Admin tidak bisa menghapus akunnya sendiri
                DeleteAction::make()
                    ->hidden(fn (User $record) => $record->is(auth()->user())),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageUsers::route('/'),
        ];
    }
}