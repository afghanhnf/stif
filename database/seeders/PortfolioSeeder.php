<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Portfolio;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        $portfolios = [
            [
                'slug' => 'agriculture',
                'sector' => 'AGRICULTURE',
                'title_en' => 'Seasonal crop working capital',
                'title_id' => 'Modal kerja musiman untuk hasil panen',
                'description_en' => 'Financing the agricultural supply chain using forward contracts.',
                'description_id' => 'Pembiayaan rantai pasok pertanian menggunakan kontrak salam.',
                'akad_type' => 'Salam',
                'ticket_size' => 'USD 1B',
                'thumbnail' => 'case-agriculture.png',
            ],
            [
                'slug' => 'trade-fmcg',
                'sector' => 'TRADE & FMCG',
                'title_en' => 'Consumer goods trade financing',
                'title_id' => 'Pembiayaan perdagangan barang konsumsi',
                'description_en' => 'Facilitating trade flows with cost-plus structuring.',
                'description_id' => 'Memfasilitasi arus perdagangan dengan penataan murabahah.',
                'akad_type' => 'Murabahah',
                'ticket_size' => 'USD 2B',
                'thumbnail' => 'case-trade.png',
            ],
            [
                'slug' => 'manufacturing',
                'sector' => 'MANUFACTURING',
                'title_en' => 'Biodegradable packaging production',
                'title_id' => 'Produksi kemasan biodegradable',
                'description_en' => 'Funding the manufacturing of eco-friendly packaging materials.',
                'description_id' => 'Mendanai produksi bahan kemasan ramah lingkungan.',
                'akad_type' => "Istisna' Mawazi",
                'ticket_size' => 'USD 5B',
                'thumbnail' => 'case-manufacturing.png',
            ],
        ];

        foreach ($portfolios as $portfolio) {
            $genericContentEn = '<p class="intro">This business case outlines our structured approach to <strong>' . $portfolio['title_en'] . '</strong>.</p><p>By leveraging the ' . $portfolio['akad_type'] . ' structure, we provided a scalable capital solution that aligned with the operational realities of the ' . $portfolio['sector'] . ' sector.</p><h2>Impact & Results</h2><ul><li>Capital Deployed: ' . $portfolio['ticket_size'] . '</li><li>Structure Used: ' . $portfolio['akad_type'] . '</li><li>Outcome: Enhanced liquidity and sustainable growth.</li></ul>';
            
            $genericContentId = '<p class="intro">Studi kasus bisnis ini menguraikan pendekatan terstruktur kami terhadap <strong>' . $portfolio['title_id'] . '</strong>.</p><p>Dengan memanfaatkan akad ' . $portfolio['akad_type'] . ', kami menyediakan solusi modal terukur yang selaras dengan realitas operasional di sektor ' . $portfolio['sector'] . '.</p><h2>Dampak & Hasil</h2><ul><li>Modal Disalurkan: ' . $portfolio['ticket_size'] . '</li><li>Akad Digunakan: ' . $portfolio['akad_type'] . '</li><li>Hasil: Peningkatan likuiditas dan pertumbuhan berkelanjutan.</li></ul>';

            Portfolio::updateOrCreate(
                ['slug' => $portfolio['slug']],
                array_merge($portfolio, [
                    'content_en' => $genericContentEn,
                    'content_id' => $genericContentId,
                    'is_published' => true,
                ])
            );
        }
    }
}
