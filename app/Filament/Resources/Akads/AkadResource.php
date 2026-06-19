<?php

namespace App\Filament\Resources\Akads;

use App\Filament\Resources\Akads\Pages\CreateAkad;
use App\Filament\Resources\Akads\Pages\EditAkad;
use App\Filament\Resources\Akads\Pages\ListAkads;
use App\Filament\Resources\Akads\Schemas\AkadForm;
use App\Filament\Resources\Akads\Tables\AkadsTable;
use App\Models\Akad;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class AkadResource extends Resource
{
    protected static ?string $model = Akad::class;

    protected static \UnitEnum|string|null $navigationGroup = 'Services & Solutions';
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-check-badge';

    public static function form(Schema $schema): Schema
    {
        return AkadForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return AkadsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListAkads::route('/'),
            'create' => CreateAkad::route('/create'),
            'edit' => EditAkad::route('/{record}/edit'),
        ];
    }
}
