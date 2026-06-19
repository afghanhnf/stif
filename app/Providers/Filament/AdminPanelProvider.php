<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Support\Assets\Css;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login(\App\Filament\Pages\Auth\Login::class)
            ->spa()
            ->colors([
                'primary' => Color::hex('#6B6D0F'),
            ])
            ->darkMode(false)
            ->font('Open Sans', 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300..700;1,300..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap')
            ->brandLogo(asset('images/color-logos.png'))
            ->brandLogoHeight('45px')
            ->favicon(asset('favicon.png'))
            ->assets([
                Css::make('custom-admin-theme', public_path('css/custom-admin.css')),
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->widgets([
                AccountWidget::class,
                FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                PreventRequestForgery::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->renderHook(
                \Filament\View\PanelsRenderHook::PAGE_END,
                fn (): string => \Illuminate\Support\Facades\Blade::render('
                    <div x-data="{ state: \'idle\' }"
                         x-init="
                            document.addEventListener(\'livewire:initialized\', () => {
                                Livewire.hook(\'commit\', ({ commit, succeed, fail }) => {
                                    const isSave = commit.calls.some(call => call.method && (call.method.includes(\'save\') || call.method.includes(\'create\') || call.method.includes(\'authenticate\')));
                                    if (isSave) {
                                        state = \'loading\';
                                        succeed(() => {
                                            state = \'success\';
                                            setTimeout(() => { state = \'idle\'; }, 1200);
                                        });
                                        fail(() => {
                                            state = \'idle\';
                                        });
                                    }
                                });
                            });
                         "
                         x-show="state !== \'idle\'"
                         style="display: none;"
                         class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30 transition-opacity">

                        <!-- Loading Spinner -->
                        <div x-show="state === \'loading\'" class="flex flex-col items-center">
                            <svg class="animate-spin h-16 w-16 text-[#6B6D0F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>

                        <!-- Success Checkmark -->
                        <div x-show="state === \'success\'" style="display: none;" class="flex flex-col items-center" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 scale-50" x-transition:enter-end="opacity-100 scale-100">
                            <div class="bg-[#6B6D0F] rounded-full p-3 shadow-lg">
                                <svg class="h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ')
            );
    }
}
