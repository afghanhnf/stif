<?php

namespace App\Filament\Resources\Articles\Schemas;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Tabs;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;

class ArticleForm
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
                        TextInput::make('author')
                            ->maxLength(255),
                        TextInput::make('category')
                            ->maxLength(255),
                        TextInput::make('featured_image')
                            ->maxLength(255),
                        TextInput::make('read_time_minutes')
                            ->numeric()
                            ->default(5),
                        Toggle::make('is_published')
                            ->default(false),
                        DateTimePicker::make('published_at'),
                    ])->columns(2),

                Tabs::make('Content')
                    ->tabs([
                        Tabs\Tab::make('English')
                            ->schema([
                                TextInput::make('title_en')
                                    ->required()
                                    ->maxLength(255)
                                    ->label('Title (English)'),
                                Textarea::make('excerpt_en')
                                    ->label('Excerpt (English)')
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
                                Textarea::make('excerpt_id')
                                    ->label('Excerpt (Indonesian)')
                                    ->rows(3),
                                RichEditor::make('content_id')
                                    ->label('Content (Indonesian)')
                                    ->columnSpanFull(),
                            ]),
                    ])->columnSpanFull(),
            ]);
    }
}
