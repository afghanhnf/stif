@php
    use Filament\Support\Enums\Width;

    $livewire ??= null;
    $renderHookScopes = $livewire?->getRenderHookScopes();
@endphp

<x-filament-panels::layout.base :livewire="$livewire">
    <div class="stif-login-split">
        {{-- LEFT PANEL: Branded image with green overlay --}}
        <div class="stif-login-left">
            <div class="stif-login-left__overlay"></div>
            <img
                src="{{ asset('images/article-buildings.png') }}"
                alt="STIF Capital"
                class="stif-login-left__image"
            />
            <div class="stif-login-left__content">
                <img
                    src="{{ asset('images/white-logos.png') }}"
                    alt="STIF Capital Logo"
                    class="stif-login-left__logo"
                />
                <h1 class="stif-login-left__heading">
                    Welcome to<br/>STIF Capital
                </h1>
                <p class="stif-login-left__description">
                    Empowering sustainable growth through Sharia-compliant investment structures and transparent capital management.
                </p>
                <div class="stif-login-left__footer">
                    &copy; {{ date('Y') }} STIF Capital. All rights reserved.
                </div>
            </div>
        </div>

        {{-- RIGHT PANEL: Login form --}}
        <div class="stif-login-right">
            <div class="stif-login-right__inner">
                {{-- Logo --}}
                <div class="stif-login-right__logo">
                    <img
                        src="{{ asset('images/color-logos.png') }}"
                        alt="STIF Capital Logo"
                    />
                </div>

                {{-- Heading --}}
                <div class="stif-login-right__header">
                    <h2 class="stif-login-right__heading">Sign In</h2>
                    <p class="stif-login-right__subheading">Enter your credentials to access the admin panel</p>
                </div>

                {{-- Filament page content (slot) --}}
                <div class="stif-login-right__form">
                    {{ $slot }}
                </div>
            </div>
        </div>
    </div>

    {{ \Filament\Support\Facades\FilamentView::renderHook(\Filament\View\PanelsRenderHook::FOOTER, scopes: $renderHookScopes) }}
</x-filament-panels::layout.base>
