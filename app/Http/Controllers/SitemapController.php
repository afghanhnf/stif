<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Article;
use App\Models\Portfolio;
use App\Models\Akad;

class SitemapController extends Controller
{
    public function index()
    {
        $services = Service::where('is_published', true)->get();
        $articles = Article::where('is_published', true)->get();
        $portfolios = Portfolio::where('is_published', true)->get();
        $akads = Akad::where('is_published', true)->get();

        $content = view('sitemap', compact('services', 'articles', 'portfolios', 'akads'))->render();

        return response($content, 200)
            ->header('Content-Type', 'text/xml');
    }
}
