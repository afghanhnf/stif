<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\TeamMember;
use App\Models\Setting;
use App\Models\Profile;

class WhoWeAreController extends Controller
{
    public function index()
    {
        return Inertia::render('WhoWeAre', [
            'locale'  => app()->getLocale(),
            'team'    => TeamMember::published()->get(),
            'tagline' => Setting::get('site_tagline_en', 'Sharia Private Equity'),
            'profile' => Profile::where('is_active', true)->first(),
        ]);
    }
}
