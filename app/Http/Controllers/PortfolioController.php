<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Portfolio;

class PortfolioController extends Controller
{
    public function index()
    {
        return Inertia::render('BusinessCase/Index', [
            'locale'     => app()->getLocale(),
            'portfolios' => Portfolio::published()->get(),
        ]);
    }

    public function show(string $slug)
    {
        $portfolio = Portfolio::where('slug', $slug)->where('is_published', true)->firstOrFail();
        $related   = Portfolio::published()
            ->where('id', '!=', $portfolio->id)
            ->take(3)->get();

        return Inertia::render('BusinessCase/Show', [
            'locale'    => app()->getLocale(),
            'portfolio' => $portfolio,
            'related'   => $related,
        ]);
    }
}
