<?php

use App\Models\Service;

require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$services = [
    'shariah' => [
        'name_en' => 'Sharia Foundation',
        'subtitle_en' => 'Flexible capital solutions tailored to Islamic ethics.',
        'description_en' => 'Every investment is structured under Sharia principles that ensure fairness to all stakeholders. Our main goal is barakah, while financial return will follow.',
        'ticket_minimum' => 'USD 100K',
        'ticket_median' => 'USD 1M',
        'ticket_maximum' => 'USD 5M',
        'what_you_get_en' => [
            'Independent sharia scholar review',
            'International business expert assistance',
            'Quarterly progress review'
        ],
        'what_you_get_id' => [
            'Tinjauan akademisi syariah independen',
            'Bantuan pakar bisnis internasional',
            'Tinjauan kemajuan triwulanan'
        ]
    ],
    'trust-fund' => [
        'name_en' => 'Trust Fund',
        'subtitle_en' => 'Secure management of wealth aligned with Sharia principles.',
        'description_en' => 'Capital managed with discipline, transparency, and long-term responsibility that preserves trust and pursues sustainable value creation.',
        'ticket_minimum' => 'USD 100K',
        'ticket_median' => 'USD 1M',
        'ticket_maximum' => 'USD 5M',
        'what_you_get_en' => [
            'Waqf & zakat administration',
            'Family endowment vehicles',
            'Beneficiary disbursement ledger',
            'Annual independent audit'
        ],
        'what_you_get_id' => [
            'Administrasi wakaf & zakat',
            'Kendaraan dana abadi keluarga',
            'Buku besar pencairan penerima',
            'Audit independen tahunan'
        ]
    ],
    'investment' => [
        'name_en' => 'Investment',
        'subtitle_en' => 'Strategic guidance on M&A, restructuring, and expansion.',
        'description_en' => 'Direct capital allocation focused on proven, productive projects to build sustainable and compounding growth.',
        'ticket_minimum' => 'USD 500K',
        'ticket_median' => 'USD 2M',
        'ticket_maximum' => 'USD 10M',
        'what_you_get_en' => [
            'Strategic capital deployment',
            'Due diligence & valuation',
            'Board-level strategic guidance',
            'Exit planning execution'
        ],
        'what_you_get_id' => [
            'Penempatan modal strategis',
            'Uji tuntas & valuasi',
            'Bimbingan strategis tingkat dewan',
            'Eksekusi perencanaan keluar'
        ]
    ],
    'financing' => [
        'name_en' => 'Financing',
        'subtitle_en' => 'Direct investments in high-growth, ethical enterprises.',
        'description_en' => 'Access interest-free funding solutions to scale up your business. Our asset-backed structures provide a secure path to capital without the burden of Riba.',
        'ticket_minimum' => 'USD 50K',
        'ticket_median' => 'USD 500K',
        'ticket_maximum' => 'USD 2M',
        'what_you_get_en' => [
            'Asset-backed structuring',
            'Interest-free financing facilities',
            'Flexible repayment schedules',
            'Growth-aligned terms'
        ],
        'what_you_get_id' => [
            'Penataan berbasis aset',
            'Fasilitas pembiayaan bebas bunga',
            'Jadwal pembayaran fleksibel',
            'Persyaratan yang diselaraskan dengan pertumbuhan'
        ]
    ]
];

foreach ($services as $slug => $data) {
    // Treat 'sharia' and 'shariah' as the same
    $service = Service::whereIn('slug', [$slug, 'sharia'])->first();
    
    if (!$service) {
        $service = new Service();
        $service->slug = $slug;
        $service->is_published = true;
        echo "Creating new service: {$slug}\n";
    } else {
        echo "Updating existing service: {$slug}\n";
    }
    
    $service->name_en = $data['name_en'];
    $service->subtitle_en = $data['subtitle_en'];
    $service->description_en = $data['description_en'];
    $service->ticket_minimum = $data['ticket_minimum'];
    $service->ticket_median = $data['ticket_median'];
    $service->ticket_maximum = $data['ticket_maximum'];
    $service->what_you_get_en = $data['what_you_get_en'];
    $service->what_you_get_id = $data['what_you_get_id'];
    
    // Automatically set ID translations if not fully defined in seed
    if (empty($service->name_id)) {
        $service->name_id = $data['name_en'];
    }
    
    $service->save();
}

echo "Seeding complete!\n";
