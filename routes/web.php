<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\WhoWeAreController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\AkadController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\SearchController;

// API Endpoints
Route::get('/api/search', [SearchController::class, 'search'])->name('api.search');

// Sitemap
Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

/*
|--------------------------------------------------------------------------
| Language Middleware: detect locale from URL prefix /id/
|--------------------------------------------------------------------------
*/
Route::middleware('web')->group(function () {

    // --- English (default) ---
    Route::prefix('/')->name('en.')->group(function () {
        Route::get('/',                         [HomeController::class, 'index'])->name('home');
        Route::get('/who-we-are',               [WhoWeAreController::class, 'index'])->name('who-we-are');
        Route::get('/services',                 [ServiceController::class, 'index'])->name('services');
        Route::get('/services/{slug}',          [ServiceController::class, 'show'])->name('services.show');
        Route::get('/sharia-library',           [AkadController::class, 'index'])->name('sharia-library');
        Route::get('/sharia-library/{slug}',    [AkadController::class, 'show'])->name('sharia-library.show');
        Route::get('/insight',                  [ArticleController::class, 'index'])->name('insight');
        Route::get('/insight/{slug}',           [ArticleController::class, 'show'])->name('insight.show');
        Route::get('/business-case',            [PortfolioController::class, 'index'])->name('business-case');
        Route::get('/business-case/{slug}',     [PortfolioController::class, 'show'])->name('business-case.show');
        Route::get('/contact',                  [ContactController::class, 'index'])->name('contact');
        Route::post('/contact/project',         [ContactController::class, 'submitProject'])->name('contact.submitProject')->middleware('throttle:5,1');
        Route::post('/contact/message',         [ContactController::class, 'submitMessage'])->name('contact.submitMessage')->middleware('throttle:5,1');
        Route::post('/newsletter/subscribe',    [\App\Http\Controllers\NewsletterController::class, 'subscribe'])->name('newsletter.subscribe')->middleware('throttle:5,1');
        Route::get('/privacy-policy',           [HomeController::class, 'privacyPolicy'])->name('privacy-policy');
        Route::get('/terms-conditions',         [HomeController::class, 'termsConditions'])->name('terms-conditions');
    });

    // --- Indonesian ---
    Route::prefix('/id')->name('id.')->group(function () {
        Route::get('/',                         [HomeController::class, 'index'])->name('home');
        Route::get('/who-we-are',               [WhoWeAreController::class, 'index'])->name('who-we-are');
        Route::get('/services',                 [ServiceController::class, 'index'])->name('services');
        Route::get('/services/{slug}',          [ServiceController::class, 'show'])->name('services.show');
        Route::get('/sharia-library',           [AkadController::class, 'index'])->name('sharia-library');
        Route::get('/sharia-library/{slug}',    [AkadController::class, 'show'])->name('sharia-library.show');
        Route::get('/insight',                  [ArticleController::class, 'index'])->name('insight');
        Route::get('/insight/{slug}',           [ArticleController::class, 'show'])->name('insight.show');
        Route::get('/business-case',            [PortfolioController::class, 'index'])->name('business-case');
        Route::get('/business-case/{slug}',     [PortfolioController::class, 'show'])->name('business-case.show');
        Route::get('/contact',                  [ContactController::class, 'index'])->name('contact');
        Route::post('/contact/project',         [ContactController::class, 'submitProject'])->name('contact.submitProject')->middleware('throttle:5,1');
        Route::post('/contact/message',         [ContactController::class, 'submitMessage'])->name('contact.submitMessage')->middleware('throttle:5,1');
        Route::post('/newsletter/subscribe',    [\App\Http\Controllers\NewsletterController::class, 'subscribe'])->name('newsletter.subscribe')->middleware('throttle:5,1');
        Route::get('/privacy-policy',           [HomeController::class, 'privacyPolicy'])->name('privacy-policy');
        Route::get('/terms-conditions',         [HomeController::class, 'termsConditions'])->name('terms-conditions');
    });

});
