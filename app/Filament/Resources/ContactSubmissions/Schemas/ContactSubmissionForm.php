<?php

namespace App\Filament\Resources\ContactSubmissions\Schemas;

use Filament\Schemas\Schema;

class ContactSubmissionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\TextInput::make('name')->required(),
                \Filament\Forms\Components\TextInput::make('email')->email()->required(),
                \Filament\Forms\Components\TextInput::make('phone'),
                \Filament\Forms\Components\TextInput::make('company'),
                \Filament\Forms\Components\TextInput::make('project_title')->required(),
                \Filament\Forms\Components\Textarea::make('project_description')->required(),
                \Filament\Forms\Components\TextInput::make('sector'),
                \Filament\Forms\Components\TextInput::make('ticket_size_requested'),
                \Filament\Forms\Components\Select::make('status')
                    ->options(['new' => 'New', 'read' => 'Read', 'replied' => 'Replied'])
                    ->default('new')
                    ->required(),
            ]);
    }
}
