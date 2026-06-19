<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        return Inertia::render('Services/Index', [
            'locale'   => app()->getLocale(),
            'services' => Service::published()->get(),
        ]);
    }

    public function show(string $slug)
    {
        $service = Service::where('slug', $slug)->where('is_published', true)->firstOrFail();

        return Inertia::render('Services/Show', [
            'locale'  => app()->getLocale(),
            'service' => $service,
        ]);
    }
}
