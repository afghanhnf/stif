<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Form;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Notifications\Notification;
use App\Models\Setting;

class SiteSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-cog-6-tooth';
    protected static \UnitEnum|string|null $navigationGroup = 'Company';
    protected static ?string $navigationLabel = 'Site Setting';
    protected static ?string $title = 'Site Setting';

    protected string $view = 'filament.pages.site-settings';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill([
            'google_analytics' => Setting::get('google_analytics'),
            'google_search_console' => Setting::get('google_search_console'),
            'google_tag_manager' => Setting::get('google_tag_manager'),
            'meta_pixels' => Setting::get('meta_pixels'),
            'whatsapp_number' => Setting::get('whatsapp_number'),
            'social_linkedin' => Setting::get('social_linkedin'),
            'social_instagram' => Setting::get('social_instagram'),
            'social_youtube' => Setting::get('social_youtube'),
        ]);
    }

    public function form(\Filament\Schemas\Schema $schema): \Filament\Schemas\Schema
    {
        return $schema
            ->components([
                Section::make('Tracking & Analytics Tags')
                    ->description('Masukkan tag tracking dari pihak ketiga (Google, Meta). Script akan disisipkan di dalam tag <head> atau sebelum </body>.')
                    ->schema([
                        Textarea::make('google_analytics')
                            ->label('Google Analytics (gtag.js)')
                            ->placeholder('<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>...')
                            ->rows(4),
                        Textarea::make('google_search_console')
                            ->label('Google Search Console (Meta Tag)')
                            ->placeholder('<meta name="google-site-verification" content="..." />')
                            ->rows(2),
                        Textarea::make('google_tag_manager')
                            ->label('Google Tag Manager')
                            ->placeholder('<script>(function(w,d,s,l,i){...})(window,document,\'script\',\'dataLayer\',\'GTM-XXXXX\');</script>')
                            ->rows(4),
                        Textarea::make('meta_pixels')
                            ->label('Meta / Facebook Pixels')
                            ->placeholder('<script>!function(f,b,e,v,n,t,s){...}(window, document,\'script\',\'https://connect.facebook.net/en_US/fbevents.js\');...</script>')
                            ->rows(4),
                    ]),
                Section::make('Contact & Social Media')
                    ->description('Tautan sosial media dan kontak WhatsApp.')
                    ->schema([
                        TextInput::make('whatsapp_number')
                            ->label('WhatsApp Number')
                            ->placeholder('628123456789 (Gunakan format internasional tanpa +)')
                            ->helperText('Nomor ini akan digunakan untuk floating WhatsApp chat di website.'),
                        TextInput::make('social_linkedin')
                            ->label('LinkedIn URL')
                            ->url()
                            ->placeholder('https://linkedin.com/company/...'),
                        TextInput::make('social_instagram')
                            ->label('Instagram URL')
                            ->url()
                            ->placeholder('https://instagram.com/...'),
                        TextInput::make('social_youtube')
                            ->label('YouTube URL')
                            ->url()
                            ->placeholder('https://youtube.com/...'),
                    ])
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();

        foreach ($data as $key => $value) {
            Setting::set($key, $value);
        }

        Notification::make()
            ->title('Saved successfully')
            ->success()
            ->send();
    }
}
