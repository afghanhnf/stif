<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Akad;
use App\Models\Service;
use App\Models\Article;
use App\Models\Portfolio;
use App\Models\Setting;
use App\Models\HeroSection;
use App\Models\Profile;

class HomeController extends Controller
{
    public function index()
    {
        $locale = app()->getLocale();

        return Inertia::render('Home', [
            'locale'   => $locale,
            'akads'    => Akad::published()->take(6)->get(),
            'services' => Service::published()->get(),
            'articles' => Article::published()->take(3)->get(),
            'portfolios' => Portfolio::published()->take(3)->get(),
            'heroSection' => HeroSection::where('is_active', true)->first(),
            'profile' => Profile::where('is_active', true)->first(),
            'settings' => [
                'phone'         => Setting::get('phone_jakarta', '+62 21 1234 567'),
                'email'         => Setting::get('email', 'partners@stifcapital.com'),
                'office_hours'  => Setting::get('office_hours', 'Mon – Fri · 08.00–17.00'),
                'offices'       => Setting::get('offices', 'Jakarta — Dubai'),
            ],
        ]);
    }

    public function privacyPolicy()
    {
        $locale = app()->getLocale();

        return Inertia::render('PrivacyPolicy', [
            'locale'   => $locale,
            'settings' => [
                'phone'         => Setting::get('phone_jakarta', '+62 21 1234 567'),
                'email'         => Setting::get('email', 'partners@stifcapital.com'),
                'office_hours'  => Setting::get('office_hours', 'Mon – Fri · 08.00–17.00'),
                'offices'       => Setting::get('offices', 'Jakarta — Dubai'),
            ],
        ]);
    }

    public function termsConditions()
    {
        $locale = app()->getLocale();

        return Inertia::render('TermsConditions', [
            'locale'   => $locale,
            'settings' => [
                'phone'         => Setting::get('phone_jakarta', '+62 21 1234 567'),
                'email'         => Setting::get('email', 'partners@stifcapital.com'),
                'office_hours'  => Setting::get('office_hours', 'Mon – Fri · 08.00–17.00'),
                'offices'       => Setting::get('offices', 'Jakarta — Dubai'),
            ],
        ]);
    }
}
