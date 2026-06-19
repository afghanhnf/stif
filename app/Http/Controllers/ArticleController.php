<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Article;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('Insight/Index', [
            'locale'   => app()->getLocale(),
            'articles' => Article::published()->paginate(9),
        ]);
    }

    public function show(string $slug)
    {
        $article  = Article::where('slug', $slug)->where('is_published', true)->firstOrFail();
        $related  = Article::published()
            ->where('id', '!=', $article->id)
            ->take(3)->get();

        return Inertia::render('Insight/Show', [
            'locale'  => app()->getLocale(),
            'article' => $article,
            'related' => $related,
        ]);
    }
}
