<?php

declare(strict_types=1);

use App\Models\Akad;
use App\Models\Article;
use App\Models\Portfolio;
use App\Models\Service;
use Illuminate\Contracts\Console\Kernel;

require __DIR__ . '/../vendor/autoload.php';

$app = require __DIR__ . '/../bootstrap/app.php';
$app->make(Kernel::class)->bootstrap();

$serverUrl = rtrim(getenv('APP_URL') ?: 'http://127.0.0.1:8000', '/');
$outputDir = __DIR__ . '/../dist-static';
$staticBasePath = normalizeBasePath(getenv('STATIC_BASE_PATH') ?: '');

removeDirectory($outputDir);
mkdir($outputDir, 0777, true);

copyDirectory(__DIR__ . '/../public', $outputDir);

// Export storage directory contents
@mkdir($outputDir . '/storage', 0755, true);
if (is_dir(__DIR__ . '/../storage/app/public')) {
    copyDirectory(__DIR__ . '/../storage/app/public', $outputDir . '/storage');
}
// Fallback: seeders put filenames in DB but files are physically in public/images.
// The frontend expects them in /storage/. We copy them over so they don't 404.
if (is_dir(__DIR__ . '/../public/images')) {
    copyDirectory(__DIR__ . '/../public/images', $outputDir . '/storage');
}

rewriteStaticAssetReferences($outputDir, $staticBasePath);
file_put_contents($outputDir . '/.nojekyll', '');

$paths = [
    '/',
    '/who-we-are',
    '/services',
    '/sharia-library',
    '/insight',
    '/business-case',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
];

foreach (Service::published()->pluck('slug') as $slug) {
    $paths[] = "/services/{$slug}";
}

foreach (Akad::published()->pluck('slug') as $slug) {
    $paths[] = "/sharia-library/{$slug}";
}

foreach (Article::published()->pluck('slug') as $slug) {
    $paths[] = "/insight/{$slug}";
}

foreach (Portfolio::published()->pluck('slug') as $slug) {
    $paths[] = "/business-case/{$slug}";
}

$localizedPaths = [];
foreach ($paths as $path) {
    $localizedPaths[] = $path;
    $localizedPaths[] = $path === '/' ? '/id' : "/id{$path}";
}

foreach (array_unique($localizedPaths) as $path) {
    exportPath($serverUrl, $outputDir, $path, $staticBasePath);
}

echo 'Exported ' . count(array_unique($localizedPaths)) . " pages to dist-static.\n";

function exportPath(string $serverUrl, string $outputDir, string $path, string $staticBasePath): void
{
    $url = $serverUrl . $path;
    $context = stream_context_create([
        'http' => [
            'timeout' => 30,
            'ignore_errors' => true,
            'header' => "User-Agent: STIF Static Exporter\r\n",
        ],
    ]);

    $html = file_get_contents($url, false, $context);
    if ($html === false || !str_contains($http_response_header[0] ?? '', '200')) {
        throw new RuntimeException("Failed to export {$url}: " . ($http_response_header[0] ?? 'no response'));
    }

    $target = rtrim($outputDir . $path, '/');
    if ($target === $outputDir) {
        $target .= '/index.html';
    } else {
        $target .= '/index.html';
    }

    $targetDirectory = dirname($target);
    if (!is_dir($targetDirectory)) {
        mkdir($targetDirectory, 0777, true);
    }

    $html = rewriteRootReferences($html, $staticBasePath);
    file_put_contents($target, injectStaticNavigationScript($html, $staticBasePath));
    echo "Exported {$path}\n";
}

function injectStaticNavigationScript(string $html, string $staticBasePath): string
{
    $encodedBasePath = json_encode($staticBasePath, JSON_THROW_ON_ERROR);
    $script = <<<'HTML'
<script>
window.STATIC_BASE_PATH = __STATIC_BASE_PATH__;
document.addEventListener('click', function (event) {
    var staticBasePath = window.STATIC_BASE_PATH;
    var stripBasePath = function (path) {
        if (staticBasePath && path.indexOf(staticBasePath + '/') === 0) {
            return path.substring(staticBasePath.length);
        }

        if (staticBasePath && path === staticBasePath) {
            return '/';
        }

        return path;
    };
    var withBasePath = function (path) {
        if (!staticBasePath || path.indexOf(staticBasePath + '/') === 0 || path === staticBasePath) {
            return path;
        }

        return staticBasePath + (path === '/' ? '' : path);
    };

    var languageButton = event.target.closest && event.target.closest('button.lang-btn');
    if (languageButton) {
        var targetLocale = languageButton.textContent.trim().toLowerCase();
        var path = stripBasePath(window.location.pathname);
        var nextPath = path;

        if (targetLocale === 'id' && !path.startsWith('/id')) {
            nextPath = '/id' + (path === '/' ? '' : path);
        }

        if (targetLocale === 'en' && path.startsWith('/id')) {
            nextPath = path.substring(3) || '/';
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        window.location.href = withBasePath(nextPath) + window.location.search + window.location.hash;
        return;
    }

    var link = event.target.closest && event.target.closest('a[href]');
    if (!link || link.target || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
    }

    var url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) {
        return;
    }

    event.preventDefault();
    window.location.href = withBasePath(stripBasePath(url.pathname)) + url.search + url.hash;
}, true);
</script>
HTML;

    $script = str_replace('__STATIC_BASE_PATH__', $encodedBasePath, $script);

    return str_replace('</body>', $script . "\n</body>", $html);
}

function normalizeBasePath(string $basePath): string
{
    $basePath = trim($basePath);
    if ($basePath === '' || $basePath === '/') {
        return '';
    }

    return '/' . trim($basePath, '/');
}

function rewriteRootReferences(string $content, string $staticBasePath): string
{
    if ($staticBasePath === '') {
        return $content;
    }

    $escapedBasePath = str_replace('/', '\/', $staticBasePath);

    $replacements = [
        'href="/' => 'href="' . $staticBasePath . '/',
        'src="/' => 'src="' . $staticBasePath . '/',
        'content="/' => 'content="' . $staticBasePath . '/',
        'url(/' => 'url(' . $staticBasePath . '/',
        '"/images/' => '"' . $staticBasePath . '/images/',
        "'/images/" => "'" . $staticBasePath . '/images/',
        '`/images/' => '`' . $staticBasePath . '/images/',
        '"/storage/' => '"' . $staticBasePath . '/storage/',
        "'/storage/" => "'" . $staticBasePath . '/storage/',
        '`/storage/' => '`' . $staticBasePath . '/storage/',
        '"\/images\/' => '"' . $escapedBasePath . '\/images\/',
        '"\/storage\/' => '"' . $escapedBasePath . '\/storage\/',
    ];

    $content = strtr($content, $replacements);

    // Fix double-prefixing that can occur if ASSET_URL is already injecting the base path
    $doublePrefix = $staticBasePath . $staticBasePath . '/';
    $singlePrefix = $staticBasePath . '/';
    $content = str_replace($doublePrefix, $singlePrefix, $content);

    // Fix double-prefixing for escaped paths
    $doubleEscapedPrefix = $escapedBasePath . $escapedBasePath . '\/';
    $singleEscapedPrefix = $escapedBasePath . '\/';
    $content = str_replace($doubleEscapedPrefix, $singleEscapedPrefix, $content);

    return $content;
}

function rewriteStaticAssetReferences(string $outputDir, string $staticBasePath): void
{
    if ($staticBasePath === '') {
        return;
    }

    $items = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($outputDir, FilesystemIterator::SKIP_DOTS)
    );

    foreach ($items as $item) {
        if (!$item->isFile()) {
            continue;
        }

        if (!in_array($item->getExtension(), ['css', 'js', 'json'], true)) {
            continue;
        }

        $path = $item->getPathname();
        file_put_contents($path, rewriteRootReferences(file_get_contents($path), $staticBasePath));
    }
}

function copyDirectory(string $source, string $destination): void
{
    if (!is_dir($source)) {
        return;
    }

    if (!is_dir($destination)) {
        mkdir($destination, 0777, true);
    }

    $items = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($source, FilesystemIterator::SKIP_DOTS),
        RecursiveIteratorIterator::SELF_FIRST
    );

    foreach ($items as $item) {
        $relativePath = str_replace('\\', '/', $items->getSubPathName());
        if (in_array($relativePath, ['.htaccess', 'index.php', 'hot'], true)) {
            continue;
        }

        $target = $destination . DIRECTORY_SEPARATOR . $items->getSubPathName();
        if ($item->isDir()) {
            if (!is_dir($target)) {
                mkdir($target, 0777, true);
            }
        } else {
            copy($item->getPathname(), $target);
        }
    }
}

function removeDirectory(string $directory): void
{
    if (!is_dir($directory)) {
        return;
    }

    $items = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($directory, FilesystemIterator::SKIP_DOTS),
        RecursiveIteratorIterator::CHILD_FIRST
    );

    foreach ($items as $item) {
        $item->isDir() ? rmdir($item->getPathname()) : unlink($item->getPathname());
    }

    rmdir($directory);
}
