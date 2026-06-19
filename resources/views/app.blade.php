<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">
    <head>
        <meta charset="utf-8">
        <!-- 
            Website created by PT Mitra Mega Komunikasi
            www.communic8.id
        -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#6B6D0F">

        <title inertia>{{ config('app.name', 'STIF Capital') }}</title>

        <!-- Favicon -->
        <link rel="icon" type="image/png" href="/favicon.png">

        <!-- Preconnect Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300..700;1,300..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300..700;1,300..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap" media="print" onload="this.media='all'">
        <noscript>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300..700;1,300..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap">
        </noscript>

        <!-- Tracking & Analytics -->
        {!! \App\Models\Setting::get('google_analytics') !!}
        {!! \App\Models\Setting::get('google_search_console') !!}
        {!! \App\Models\Setting::get('google_tag_manager') !!}
        {!! \App\Models\Setting::get('meta_pixels') !!}

        <!-- Inertia Head -->
        @inertiaHead

        <!-- Vite Assets -->
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/pages/{$page['component']}.jsx"])
    </head>
    <body class="antialiased">
        @inertia
    </body>
</html>
