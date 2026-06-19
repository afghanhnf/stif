<?php

namespace App\Filament\Resources\TeamMembers\Schemas;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Tabs;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;

class TeamMemberForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Profile Information')
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('photo')
                            ->maxLength(255),
                        TextInput::make('linkedin_url')
                            ->maxLength(255)
                            ->url()
                            ->label('LinkedIn URL'),
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
                                TextInput::make('title_en')
                                    ->required()
                                    ->maxLength(255)
                                    ->label('Title (English)'),
                                Textarea::make('bio_en')
                                    ->label('Biography (English)')
                                    ->rows(4),
                            ]),
                        Tabs\Tab::make('Indonesian')
                            ->schema([
                                TextInput::make('title_id')
                                    ->maxLength(255)
                                    ->label('Title (Indonesian)'),
                                Textarea::make('bio_id')
                                    ->label('Biography (Indonesian)')
                                    ->rows(4),
                            ]),
                    ])->columnSpanFull(),
            ]);
    }
}
