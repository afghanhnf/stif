<?php

use App\Models\Article;
use Carbon\Carbon;

require __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$fallbackArticles = [
    [
        'slug' => 'why-musharakah-mutanaqisah-beats-conventional-mortgage',
        'category' => 'STRUCTURING',
        'title_en' => 'Why Musharakah Mutanaqisah beats conventional mortgage',
        'title_id' => 'Mengapa Musyarakah Mutanaqisah mengungguli KPR konvensional',
        'excerpt_en' => 'Diminishing partnership transfers ownership over time without interest - and it does so with better risk-sharing.',
        'excerpt_id' => 'Kemitraan bertahap mengalihkan kepemilikan dari waktu ke waktu tanpa bunga dan dengan pembagian risiko yang lebih baik.',
        'author' => 'Dr. Hisham Al-Sabah',
        'published_at' => '2026-05-12 00:00:00',
        'read_time_minutes' => 6,
        'featured_image' => '/images/article-buildings.png',
        'is_published' => true,
    ],
    [
        'slug' => 'sukuk-pipeline-outlook-gcc-issuances-h2-2026',
        'category' => 'MARKETS',
        'title_en' => 'Sukuk pipeline outlook: GCC issuances in H2 2026',
        'title_id' => 'Prospek pipeline sukuk: penerbitan GCC di H2 2026',
        'excerpt_en' => 'A closer look at regional issuance momentum, refinancing cycles, and appetite for asset-backed instruments.',
        'excerpt_id' => 'Tinjauan momentum penerbitan regional, siklus refinancing, dan minat terhadap instrumen berbasis aset.',
        'author' => 'STIF Desk',
        'published_at' => '2026-05-04 00:00:00',
        'read_time_minutes' => 4,
        'featured_image' => '/images/article-spiral.png',
        'is_published' => true,
    ],
    [
        'slug' => 'inside-our-sharia-board-a-quarterly-fatwa-cycle',
        'category' => 'GOVERNANCE',
        'title_en' => 'Inside our Sharia board: a quarterly fatwa cycle',
        'title_id' => 'Di balik dewan Syariah kami: siklus fatwa triwulanan',
        'excerpt_en' => 'How independent review, documentation, and monitoring keep each structure aligned with Sharia standards.',
        'excerpt_id' => 'Bagaimana tinjauan independen, dokumentasi, dan pemantauan menjaga setiap struktur tetap sesuai standar Syariah.',
        'author' => 'Supervisory Board',
        'published_at' => '2026-04-28 00:00:00',
        'read_time_minutes' => 8,
        'featured_image' => '/images/article-office.png',
        'is_published' => true,
    ],
    [
        'slug' => 'stif-capital-annual-report-2025',
        'category' => 'ANNUAL REPORT',
        'title_en' => 'STIF Capital Annual Report 2025',
        'title_id' => 'Laporan Tahunan STIF Capital 2025',
        'excerpt_en' => 'Portfolio performance, governance updates, and measured impact across our mandates.',
        'excerpt_id' => 'Kinerja portofolio, pembaruan tata kelola, dan dampak terukur di seluruh mandat kami.',
        'author' => 'STIF Capital',
        'published_at' => '2026-03-31 00:00:00',
        'read_time_minutes' => 32,
        'featured_image' => '/images/case-trade.png',
        'is_published' => true,
    ],
    [
        'slug' => 'stif-capital-annual-report-2024',
        'category' => 'ANNUAL REPORT',
        'title_en' => 'STIF Capital Annual Report 2024',
        'title_id' => 'Laporan Tahunan STIF Capital 2024',
        'excerpt_en' => 'A year of disciplined capital allocation, transparent reporting, and Sharia-first execution.',
        'excerpt_id' => 'Setahun alokasi modal yang disiplin, pelaporan transparan, dan eksekusi yang mendahulukan Syariah.',
        'author' => 'STIF Capital',
        'published_at' => '2025-03-31 00:00:00',
        'read_time_minutes' => 28,
        'featured_image' => '/images/case-agriculture.png',
        'is_published' => true,
    ],
    [
        'slug' => 'waqf-2025-beneficiaries-across-6-provinces',
        'category' => 'SOCIAL IMPACT',
        'title_en' => 'Waqf 2025: 12,400 beneficiaries across 6 provinces',
        'title_id' => 'Wakaf 2025: 12.400 penerima manfaat di 6 provinsi',
        'excerpt_en' => 'How dedicated endowment assets supported education, health, and local resilience programs.',
        'excerpt_id' => 'Bagaimana aset wakaf mendukung pendidikan, kesehatan, dan program ketahanan lokal.',
        'author' => 'Impact Desk',
        'published_at' => '2026-02-14 00:00:00',
        'read_time_minutes' => 5,
        'featured_image' => '/images/case-manufacturing.png',
        'is_published' => true,
    ],
];

foreach ($fallbackArticles as $data) {
    Article::updateOrCreate(
        ['slug' => $data['slug']],
        $data
    );
}

echo "Articles seeded successfully!\n";
