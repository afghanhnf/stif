<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Article;
use App\Models\Akad;
use App\Models\Portfolio;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('q');
        $locale = $request->input('locale', 'en');
        
        if (empty($query)) {
            return response()->json([]);
        }

        $results = [];

        // Search Services
        $services = Service::where('is_published', true)
            ->where(function ($q) use ($query, $locale) {
                $q->where("name_{$locale}", 'like', '%' . $query . '%')
                  ->orWhere("subtitle_{$locale}", 'like', '%' . $query . '%')
                  ->orWhere("description_{$locale}", 'like', '%' . $query . '%');
            })->take(5)->get();

        foreach ($services as $service) {
            $results[] = [
                'type' => 'service',
                'badge' => $locale === 'id' ? 'Layanan' : 'Service',
                'title' => $service->{"name_{$locale}"} ?? $service->name_en,
                'snippet' => $service->{"subtitle_{$locale}"} ?? $service->subtitle_en ?? '',
                'url' => ($locale === 'id' ? '/id' : '') . '/services/' . $service->slug,
            ];
        }

        // Search Articles
        $articles = Article::where('is_published', true)
            ->where(function ($q) use ($query, $locale) {
                $q->where("title_{$locale}", 'like', '%' . $query . '%')
                  ->orWhere("excerpt_{$locale}", 'like', '%' . $query . '%');
            })->take(5)->get();

        foreach ($articles as $article) {
            $results[] = [
                'type' => 'article',
                'badge' => $locale === 'id' ? 'Wawasan' : 'Insight',
                'title' => $article->{"title_{$locale}"} ?? $article->title_en,
                'snippet' => $article->{"excerpt_{$locale}"} ?? $article->excerpt_en ?? '',
                'url' => ($locale === 'id' ? '/id' : '') . '/insight/' . $article->slug,
            ];
        }

        // Search Akad
        $akads = Akad::where('is_published', true)
            ->where(function ($q) use ($query, $locale) {
                $q->where("name_{$locale}", 'like', '%' . $query . '%')
                  ->orWhere("definition_{$locale}", 'like', '%' . $query . '%');
            })->take(5)->get();

        foreach ($akads as $akad) {
            $results[] = [
                'type' => 'akad',
                'badge' => 'Akad',
                'title' => $akad->{"name_{$locale}"} ?? $akad->name_en,
                'snippet' => $akad->{"definition_{$locale}"} ?? $akad->definition_en ?? '',
                'url' => ($locale === 'id' ? '/id' : '') . '/sharia-library/' . $akad->slug,
            ];
        }

        // Search Portfolio
        $portfolios = Portfolio::where('is_published', true)
            ->where(function ($q) use ($query, $locale) {
                $q->where("title_{$locale}", 'like', '%' . $query . '%')
                  ->orWhere("description_{$locale}", 'like', '%' . $query . '%');
            })->take(5)->get();

        foreach ($portfolios as $portfolio) {
            $results[] = [
                'type' => 'portfolio',
                'badge' => $locale === 'id' ? 'Portofolio' : 'Business Case',
                'title' => $portfolio->{"title_{$locale}"} ?? $portfolio->title_en,
                'snippet' => $portfolio->{"description_{$locale}"} ?? $portfolio->description_en ?? '',
                'url' => ($locale === 'id' ? '/id' : '') . '/business-case/' . $portfolio->slug,
            ];
        }

        return response()->json($results);
    }
}
