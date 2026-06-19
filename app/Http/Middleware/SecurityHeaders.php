<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecurityHeaders
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Don't modify if the response is not a typical HTTP Response (e.g. BinaryFileResponse)
        if (method_exists($response, 'header')) {
            $response->header('X-Frame-Options', 'SAMEORIGIN');
            $response->header('X-Content-Type-Options', 'nosniff');
            $response->header('X-XSS-Protection', '1; mode=block');
            $response->header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
            $response->header('Referrer-Policy', 'strict-origin-when-cross-origin');
            
            // Performance Cache Headers (prevent caching of HTML, let assets be cached)
            $response->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
            $response->header('Pragma', 'no-cache');

            // Allow scripts and styles from trusted domains including the local dev server (Vite)
            $csp = "default-src 'self'; " .
                   "script-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost:5173 http://127.0.0.1:5173 https://cdn.jsdelivr.net; " .
                   "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " .
                   "font-src 'self' https://fonts.gstatic.com data:; " .
                   "img-src 'self' data: https:; " .
                   "connect-src 'self' http://localhost:5173 http://127.0.0.1:5173 ws://localhost:5173 ws://127.0.0.1:5173 wss://localhost:5173 wss://127.0.0.1:5173; " .
                   "object-src 'none';";
                   
            $response->header('Content-Security-Policy', $csp);
        }

        return $response;
    }
}
