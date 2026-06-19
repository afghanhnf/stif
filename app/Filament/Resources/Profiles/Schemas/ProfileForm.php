<?php

namespace App\Filament\Resources\Profiles\Schemas;

use Filament\Schemas\Schema;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Repeater;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Section;

class ProfileForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make('Profile Content')
                    ->tabs([
                        Tabs\Tab::make('English')
                            ->schema([
                                TextInput::make('title_en')->label('Title')->required(),
                                Textarea::make('manifesto_en')->label('Manifesto')->required(),
                                Textarea::make('description_en')->label('Description')->required(),
                                TextInput::make('button_text_en')->label('Button Text')->required(),
                            ]),
                        Tabs\Tab::make('Indonesia')
                            ->schema([
                                TextInput::make('title_id')->label('Title'),
                                Textarea::make('manifesto_id')->label('Manifesto'),
                                Textarea::make('description_id')->label('Description'),
                                TextInput::make('button_text_id')->label('Button Text'),
                            ]),
                    ])->columnSpanFull(),

                Section::make('URLs and Media')
                    ->schema([
                        TextInput::make('button_url')->label('Button URL')->required(),
                        FileUpload::make('image')->image()->directory('profiles')->required(),
                        Toggle::make('is_active')->default(true),
                    ])->columns(2),

                Section::make('Values (Features)')
                    ->schema([
                        Repeater::make('values')
                            ->schema([
                                TextInput::make('num')->label('Number (e.g. 01)')->required(),
                                TextInput::make('icon')->label('SVG Icon Path/Code')->required(),
                                Tabs::make('Translations')
                                    ->tabs([
                                        Tabs\Tab::make('English')->schema([
                                            TextInput::make('title_en')->label('Title')->required(),
                                            Textarea::make('desc_en')->label('Description')->required(),
                                        ]),
                                        Tabs\Tab::make('Indonesia')->schema([
                                            TextInput::make('title_id')->label('Title'),
                                            Textarea::make('desc_id')->label('Description'),
                                        ]),
                                    ])->columnSpanFull()
                            ])
                    ])->columnSpanFull(),

                Section::make('Vision & Mission')
                    ->schema([
                        Tabs::make('Vision Translations')
                            ->tabs([
                                Tabs\Tab::make('English')->schema([
                                    Textarea::make('vision_en')->label('Vision')->required(),
                                    TextInput::make('mission_title_en')->label('Mission Title')->required(),
                                ]),
                                Tabs\Tab::make('Indonesia')->schema([
                                    Textarea::make('vision_id')->label('Vision'),
                                    TextInput::make('mission_title_id')->label('Mission Title'),
                                ]),
                            ])->columnSpanFull(),
                        Repeater::make('missions')
                            ->schema([
                                Tabs::make('Mission Translations')
                                    ->tabs([
                                        Tabs\Tab::make('English')->schema([
                                            TextInput::make('text_en')->label('Mission Item')->required(),
                                        ]),
                                        Tabs\Tab::make('Indonesia')->schema([
                                            TextInput::make('text_id')->label('Mission Item'),
                                        ]),
                                    ])->columnSpanFull()
                            ])
                    ])->columnSpanFull(),

                Section::make('Corporate Values Page Section')
                    ->schema([
                        Tabs::make('Header Translations')
                            ->tabs([
                                Tabs\Tab::make('English')->schema([
                                    TextInput::make('corporate_values_title_en')->label('Values Title')->required(),
                                    TextInput::make('corporate_values_emphasis_en')->label('Values Emphasis'),
                                    Textarea::make('corporate_values_text_en')->label('Values Text')->required(),
                                ]),
                                Tabs\Tab::make('Indonesia')->schema([
                                    TextInput::make('corporate_values_title_id')->label('Values Title'),
                                    TextInput::make('corporate_values_emphasis_id')->label('Values Emphasis'),
                                    Textarea::make('corporate_values_text_id')->label('Values Text'),
                                ]),
                            ])->columnSpanFull(),
                        Repeater::make('corporate_values')
                            ->schema([
                                TextInput::make('letter')->label('Letter (e.g. E)')->required()->maxLength(1),
                                Tabs::make('Value Translations')
                                    ->tabs([
                                        Tabs\Tab::make('English')->schema([
                                            TextInput::make('title_en')->label('Title')->required(),
                                            Textarea::make('desc_en')->label('Description')->required(),
                                        ]),
                                        Tabs\Tab::make('Indonesia')->schema([
                                            TextInput::make('title_id')->label('Title'),
                                            Textarea::make('desc_id')->label('Description'),
                                        ]),
                                    ])->columnSpanFull()
                            ])
                    ])->columnSpanFull(),

                Section::make('Hero Features (Homepage)')
                    ->schema([
                        Repeater::make('hero_features')
                            ->schema([
                                TextInput::make('icon')->label('SVG Icon Code')->required(),
                                Tabs::make('Translations')
                                    ->tabs([
                                        Tabs\Tab::make('English')->schema([
                                            TextInput::make('title_en')->label('Title')->required(),
                                        ]),
                                        Tabs\Tab::make('Indonesia')->schema([
                                            TextInput::make('title_id')->label('Title'),
                                        ]),
                                    ])->columnSpanFull()
                            ])
                    ])->columnSpanFull(),

                Section::make('Why STIF / Values Section (Homepage)')
                    ->schema([
                        Tabs::make('Translations')
                            ->tabs([
                                Tabs\Tab::make('English')->schema([
                                    TextInput::make('why_stif_badge_en')->label('Badge')->required(),
                                    TextInput::make('why_stif_title_en')->label('Title')->required(),
                                    Textarea::make('why_stif_text_en')->label('Text')->required(),
                                    TextInput::make('why_stif_button_en')->label('Button Text')->required(),
                                ]),
                                Tabs\Tab::make('Indonesia')->schema([
                                    TextInput::make('why_stif_badge_id')->label('Badge'),
                                    TextInput::make('why_stif_title_id')->label('Title'),
                                    Textarea::make('why_stif_text_id')->label('Text'),
                                    TextInput::make('why_stif_button_id')->label('Button Text'),
                                ]),
                            ])->columnSpanFull(),
                        TextInput::make('why_stif_button_url')->label('Button URL')->required(),
                        Repeater::make('why_stif_cards')
                            ->schema([
                                TextInput::make('icon')->label('SVG Icon Code')->required(),
                                Tabs::make('Translations')
                                    ->tabs([
                                        Tabs\Tab::make('English')->schema([
                                            TextInput::make('title_en')->label('Title')->required(),
                                            Textarea::make('desc_en')->label('Description')->required(),
                                        ]),
                                        Tabs\Tab::make('Indonesia')->schema([
                                            TextInput::make('title_id')->label('Title'),
                                            Textarea::make('desc_id')->label('Description'),
                                        ]),
                                    ])->columnSpanFull()
                            ])
                    ])->columnSpanFull()
            ]);
    }
}
