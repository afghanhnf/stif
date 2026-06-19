<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\ContactSubmission;
use App\Models\Setting;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact', [
            'locale' => app()->getLocale(),
            'email'  => Setting::get('email', 'partners@stifcapital.com'),
            'phone'  => Setting::get('phone_jakarta', '+62 21 1234 567'),
        ]);
    }

    public function submitProject(Request $request)
    {
        $validated = $request->validate([
            'name'                 => 'required|string|max:255',
            'email'                => 'required|email|max:255',
            'phone'                => 'nullable|string|max:50',
            'company'              => 'nullable|string|max:255',
            'project_title'        => 'nullable|string|max:255',
            'project_description'  => 'required|string|max:5000',
            'sector'               => 'nullable|string|max:100',
            'ticket_size_requested'=> 'nullable|string|max:100',
        ]);

        ContactSubmission::create(array_merge($validated, [
            'locale' => app()->getLocale(),
            'status' => 'new',
        ]));

        return back()->with('success', 'Your mandate has been submitted. We will review it within 48 hours.');
    }

    public function submitMessage(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone'   => 'nullable|string|max:50',
            'message' => 'required|string|max:5000',
        ]);

        \App\Models\ContactMessage::create(array_merge($validated, [
            'locale' => app()->getLocale(),
            'status' => 'new',
        ]));

        return back()->with('success', 'Your question has been sent successfully. We will get back to you soon.');
    }
}
