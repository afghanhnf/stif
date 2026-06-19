<?php

namespace App\Filament\Resources\Akads\Schemas;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Tabs;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;

class AkadForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Metadata')
                    ->schema([
                        TextInput::make('number')
                            ->required()
                            ->numeric(),
                        TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),
                        TextInput::make('arabic_name')
                            ->required()
                            ->maxLength(255)
                            ->label('Arabic Name (e.g. مُضَارَبَةٌ)'),
                        TextInput::make('latin_name')
                            ->required()
                            ->maxLength(255)
                            ->label('Latin Name (e.g. Mudarabah)'),
                        TextInput::make('order')
                            ->numeric()
                            ->default(0),
                        Toggle::make('is_published')
                            ->default(true),
                    ])->columns(2),

                Tabs::make('Content')
                    ->tabs([
                        Tabs\Tab::make('English')
                            ->schema([
                                TextInput::make('name_en')
                                    ->required()
                                    ->maxLength(255)
                                    ->label('Name (English)'),
                                Textarea::make('definition_en')
                                    ->label('Definition (English)')
                                    ->rows(2),
                                RichEditor::make('jurisprudence_en')
                                    ->label('Jurisprudence & Fiqh Basis (English)'),
                                RichEditor::make('scheme_en')
                                    ->label('Structure Scheme (English)'),
                                RichEditor::make('example_en')
                                    ->label('Real-World Example (English)'),
                                RichEditor::make('sponsor_benefits_en')
                                    ->label('Benefits for Sponsor (English)'),
                            ]),
                        Tabs\Tab::make('Indonesian')
                            ->schema([
                                TextInput::make('name_id')
                                    ->maxLength(255)
                                    ->label('Name (Indonesian)'),
                                Textarea::make('definition_id')
                                    ->label('Definition (Indonesian)')
                                    ->rows(2),
                                RichEditor::make('jurisprudence_id')
                                    ->label('Jurisprudence & Fiqh Basis (Indonesian)'),
                                RichEditor::make('scheme_id')
                                    ->label('Structure Scheme (Indonesian)'),
                                RichEditor::make('example_id')
                                    ->label('Real-World Example (Indonesian)'),
                                RichEditor::make('sponsor_benefits_id')
                                    ->label('Benefits for Sponsor (Indonesian)'),
                            ]),
                    ])->columnSpanFull(),
            ]);
    }
}
