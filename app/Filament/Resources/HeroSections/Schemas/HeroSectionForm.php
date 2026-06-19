<?php

namespace App\Filament\Resources\HeroSections\Schemas;

use Filament\Schemas\Schema;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Section;

class HeroSectionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make('Hero Section')
                    ->tabs([
                        Tabs\Tab::make('English')
                            ->schema([
                                TextInput::make('badge_en')->label('Badge')->required(),
                                TextInput::make('title_en')->label('Title')->required(),
                                Textarea::make('description_1_en')->label('Description 1')->required(),
                                Textarea::make('description_2_en')->label('Description 2')->required(),
                                TextInput::make('button_1_text_en')->label('Button 1 Text')->required(),
                                TextInput::make('button_2_text_en')->label('Button 2 Text')->required(),
                                Textarea::make('verse_translation_en')->label('Verse Translation')->required(),
                            ]),
                        Tabs\Tab::make('Indonesia')
                            ->schema([
                                TextInput::make('badge_id')->label('Badge'),
                                TextInput::make('title_id')->label('Title'),
                                Textarea::make('description_1_id')->label('Description 1'),
                                Textarea::make('description_2_id')->label('Description 2'),
                                TextInput::make('button_1_text_id')->label('Button 1 Text'),
                                TextInput::make('button_2_text_id')->label('Button 2 Text'),
                                Textarea::make('verse_translation_id')->label('Verse Translation'),
                            ]),
                    ])->columnSpanFull(),

                Section::make('URLs and Media')
                    ->schema([
                        TextInput::make('button_1_url')->label('Button 1 URL')->required(),
                        TextInput::make('button_2_url')->label('Button 2 URL')->required(),
                        TextInput::make('verse_arabic')->label('Arabic Verse')->required()->extraInputAttributes(['dir' => 'rtl']),
                        FileUpload::make('image')->image()->directory('hero')->required(),
                        Toggle::make('is_active')->default(true),
                    ])->columns(2),
            ]);
    }
}
