<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LanguageMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Detect language from URL segment
        // Assuming Indonesian routes are prefixed with /id
        $segment = $request->segment(1);

        if ($segment === 'id') {
            app()->setLocale('id');
        } else {
            app()->setLocale('en');
        }

        return $next($request);
    }
}
