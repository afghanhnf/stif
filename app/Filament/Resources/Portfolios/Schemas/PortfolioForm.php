<?php

namespace App\Filament\Resources\Portfolios\Schemas;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Tabs;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;

class PortfolioForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Metadata')
                    ->schema([
                        TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),
                        TextInput::make('sector')
                            ->maxLength(255)
                            ->label('Sector (e.g. AGRICULTURE)'),
                        TextInput::make('akad_type')
                            ->maxLength(255)
                            ->label('Akad Type (e.g. Salam)'),
                        TextInput::make('ticket_size')
                            ->maxLength(255)
                            ->label('Ticket Size (e.g. USD 1B)'),
                        TextInput::make('return_rate')
                            ->maxLength(255),
                        TextInput::make('tenor')
                            ->maxLength(255),
                        TextInput::make('thumbnail')
                            ->maxLength(255),
                        Toggle::make('is_published')
                            ->default(false),
                        TextInput::make('order')
                            ->numeric()
                            ->default(0),
                    ])->columns(2),

                Tabs::make('Content')
                    ->tabs([
                        Tabs\Tab::make('English')
                            ->schema([
                                TextInput::make('title_en')
                                    ->required()
                                    ->maxLength(255)
                                    ->label('Title (English)'),
                                Textarea::make('description_en')
                                    ->label('Description (English)')
                                    ->rows(3),
                                RichEditor::make('content_en')
                                    ->label('Content (English)')
                                    ->columnSpanFull(),
                            ]),
                        Tabs\Tab::make('Indonesian')
                            ->schema([
                                TextInput::make('title_id')
                                    ->maxLength(255)
                                    ->label('Title (Indonesian)'),
                                Textarea::make('description_id')
                                    ->label('Description (Indonesian)')
                                    ->rows(3),
                                RichEditor::make('content_id')
                                    ->label('Content (Indonesian)')
                                    ->columnSpanFull(),
                            ]),
                    ])->columnSpanFull(),
            ]);
    }
}
