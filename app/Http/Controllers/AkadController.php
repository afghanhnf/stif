<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Akad;

class AkadController extends Controller
{
    public function index()
    {
        return Inertia::render('ShariahLibrary/Index', [
            'locale' => app()->getLocale(),
            'akads'  => Akad::published()->get(),
        ]);
    }

    public function show(string $slug)
    {
        $akad = Akad::where('slug', $slug)->where('is_published', true)->firstOrFail();
        $prev = Akad::where('number', $akad->number - 1)->where('is_published', true)->first();
        $next = Akad::where('number', $akad->number + 1)->where('is_published', true)->first();

        return Inertia::render('ShariahLibrary/Show', [
            'locale' => app()->getLocale(),
            'akad'   => $akad,
            'prev'   => $prev,
            'next'   => $next,
            'akads'  => Akad::published()->get(),
        ]);
    }
}
