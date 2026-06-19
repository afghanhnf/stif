<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Static Routes -->
    <url>
        <loc>{{ url('/') }}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>{{ url('/who-we-are') }}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>{{ url('/services') }}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>{{ url('/sharia-library') }}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>{{ url('/contact') }}</loc>
        <changefreq>yearly</changefreq>
        <priority>0.6</priority>
    </url>
    <url>
        <loc>{{ url('/privacy-policy') }}</loc>
        <changefreq>yearly</changefreq>
        <priority>0.4</priority>
    </url>
    <url>
        <loc>{{ url('/terms-conditions') }}</loc>
        <changefreq>yearly</changefreq>
        <priority>0.4</priority>
    </url>

    <!-- Services -->
    @foreach ($services as $service)
    <url>
        <loc>{{ url('/services/' . $service->slug) }}</loc>
        <lastmod>{{ $service->updated_at->tz('UTC')->toAtomString() }}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    @endforeach

    <!-- Sharia Library (Akads) -->
    @foreach ($akads as $akad)
    <url>
        <loc>{{ url('/sharia-library/' . $akad->slug) }}</loc>
        <lastmod>{{ $akad->updated_at->tz('UTC')->toAtomString() }}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    @endforeach

    <!-- Business Cases (Portfolios) -->
    @foreach ($portfolios as $portfolio)
    <url>
        <loc>{{ url('/business-case/' . $portfolio->slug) }}</loc>
        <lastmod>{{ $portfolio->updated_at->tz('UTC')->toAtomString() }}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    @endforeach

    <!-- Insights (Articles) -->
    @foreach ($articles as $article)
    <url>
        <loc>{{ url('/insight/' . $article->slug) }}</loc>
        <lastmod>{{ $article->updated_at->tz('UTC')->toAtomString() }}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>
    @endforeach
</urlset>
