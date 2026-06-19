<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HoneypotMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the request method is POST, PUT, PATCH, or DELETE
        if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH') || $request->isMethod('DELETE')) {
            // Check for the honeypot field. We use '_website_url' as the trap.
            if ($request->filled('_website_url')) {
                // If it's filled, it's likely a bot. Abort silently.
                // We return a generic 200 response or a redirect to fool the bot.
                return response('Success', 200); 
            }
        }

        return $next($request);
    }
}
