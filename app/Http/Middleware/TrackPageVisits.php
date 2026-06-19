<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\PageVisit;
use Carbon\Carbon;

class TrackPageVisits
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Don't log admin, api, or filament livewire requests
        if (!$request->is('admin*') && !$request->is('api*') && !$request->is('livewire*') && !$request->wantsJson()) {
            
            // Basic rate limiting to prevent spamming the db (1 log per minute per IP per URL)
            $recentVisit = PageVisit::where('ip_address', $request->ip())
                ->where('url', $request->url())
                ->where('created_at', '>=', Carbon::now()->subMinute())
                ->first();

            if (!$recentVisit) {
                PageVisit::create([
                    'ip_address' => $request->ip(),
                    'url' => $request->url(),
                    'user_agent' => $request->userAgent(),
                ]);
            }
        }

        return $next($request);
    }
}
