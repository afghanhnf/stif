<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Akad;
use App\Models\Service;
use App\Models\Article;
use App\Models\Portfolio;

class SitemapController extends Controller
{
    public function index()
    {
        $urls = [];
        $locales = ['en' => '', 'id' => '/id'];
        
        $staticRoutes = [
            '',
            '/who-we-are',
            '/services',
            '/sharia-library',
            '/insight',
            '/business-case',
            '/contact'
        ];

        // Add static routes
        foreach ($locales as $lang => $prefix) {
            foreach ($staticRoutes as $route) {
                $urls[] = url($prefix . $route);
            }
        }

        // Add dynamic routes
        $akads = Akad::published()->get();
        $services = Service::published()->get();
        $articles = Article::published()->get();
        $portfolios = Portfolio::published()->get();

        foreach ($locales as $lang => $prefix) {
            foreach ($akads as $akad) {
                $urls[] = url($prefix . '/sharia-library/' . $akad->slug);
            }
            foreach ($services as $service) {
                $urls[] = url($prefix . '/services/' . $service->slug);
            }
            foreach ($articles as $article) {
                $urls[] = url($prefix . '/insight/' . $article->slug);
            }
            foreach ($portfolios as $portfolio) {
                $urls[] = url($prefix . '/business-case/' . $portfolio->slug);
            }
        }

        return response()->view('sitemap', [
            'urls' => $urls
        ])->header('Content-Type', 'text/xml');
    }
}
