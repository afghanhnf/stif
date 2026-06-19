<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewsletterSubscriber;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:255',
        ]);

        NewsletterSubscriber::updateOrCreate(
            ['email' => $validated['email']],
            ['locale' => app()->getLocale(), 'status' => 'active']
        );

        return back()->with('success', 'Thank you for subscribing to our newsletter!');
    }
}
