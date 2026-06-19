<?php

namespace App\Filament\Resources\Services\Schemas;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Tabs;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\TagsInput;
use Filament\Schemas\Components\Section;

class ServiceForm
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
                        TextInput::make('icon')
                            ->maxLength(255),
                        TextInput::make('order')
                            ->numeric()
                            ->default(0),
                        Toggle::make('is_published')
                            ->default(true),
                    ])->columns(2),

                Section::make('Typical Tickets')
                    ->schema([
                        TextInput::make('ticket_minimum')
                            ->label('Minimum (e.g. USD 100K)')
                            ->maxLength(255),
                        TextInput::make('ticket_median')
                            ->label('Median (e.g. USD 1M)')
                            ->maxLength(255),
                        TextInput::make('ticket_maximum')
                            ->label('Maximum (e.g. USD 5M)')
                            ->maxLength(255),
                    ])->columns(3),

                Tabs::make('Content')
                    ->tabs([
                        Tabs\Tab::make('English')
                            ->schema([
                                TextInput::make('name_en')
                                    ->required()
                                    ->maxLength(255)
                                    ->label('Name (English)'),
                                TextInput::make('subtitle_en')
                                    ->maxLength(255)
                                    ->label('Subtitle (English)'),
                                Textarea::make('description_en')
                                    ->label('Description (English)')
                                    ->rows(3),
                                TagsInput::make('what_you_get_en')
                                    ->label('What You Get (English Features)')
                                    ->placeholder('Add a feature and press enter'),
                                RichEditor::make('content_en')
                                    ->label('Content (English)')
                                    ->columnSpanFull(),
                            ]),
                        Tabs\Tab::make('Indonesian')
                            ->schema([
                                TextInput::make('name_id')
                                    ->maxLength(255)
                                    ->label('Name (Indonesian)'),
                                TextInput::make('subtitle_id')
                                    ->maxLength(255)
                                    ->label('Subtitle (Indonesian)'),
                                Textarea::make('description_id')
                                    ->label('Description (Indonesian)')
                                    ->rows(3),
                                TagsInput::make('what_you_get_id')
                                    ->label('What You Get (Indonesian Features)')
                                    ->placeholder('Tambahkan fitur dan tekan enter'),
                                RichEditor::make('content_id')
                                    ->label('Content (Indonesian)')
                                    ->columnSpanFull(),
                            ]),
                    ])->columnSpanFull(),
            ]);
    }
}
