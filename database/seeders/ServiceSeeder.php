<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'slug' => 'shariah',
                'name_en' => 'Sharia Foundation',
                'name_id' => 'Fondasi Syariah',
                'subtitle_en' => 'Flexible capital solutions tailored to Islamic ethics.',
                'subtitle_id' => 'Solusi modal fleksibel yang disesuaikan dengan etika Islam.',
                'description_en' => 'Every investment is structured under rigorous Sharia principles that ensure alignment with Islamic values in any capital deployment.',
                'description_id' => 'Dewan Pengawas Syariah independen kami meninjau setiap kontrak dan struktur kemitraan sebelum modal dikucurkan. Laporan diterbitkan setiap kuartal kepada LP.',
            ],
            [
                'slug' => 'trust-fund',
                'name_en' => 'Trust Fund',
                'name_id' => 'Dana Perwalian',
                'subtitle_en' => 'Secure management of wealth aligned with Sharia principles.',
                'subtitle_id' => 'Pengelolaan kekayaan yang aman dan selaras dengan prinsip Syariah.',
                'description_en' => 'Capital managed with discipline, transparency, and long-term responsibility that preserves trust and pursues sustainable value creation.',
                'description_id' => 'Kami mengelola wakaf, zakat dan kendaraan endowmen keluarga dengan standar yang sama ketatnya seperti modal institusional. Penerima manfaat menerima laporan disbursement kuartalan langsung.',
            ],
            [
                'slug' => 'investment',
                'name_en' => 'Investment',
                'name_id' => 'Investasi',
                'subtitle_en' => 'Strategic guidance on M&A, restructuring, and expansion.',
                'subtitle_id' => 'Panduan strategis tentang M&A, restrukturisasi, dan ekspansi.',
                'description_en' => 'Direct capital allocation focused on proven, productive projects to build sustainable and compounding growth.',
                'description_id' => 'Investasi ekuitas berbasis syariah melalui struktur Musyarakah dan Mudharabah. Kami mengalokasikan modal ke bisnis yang dapat diskalakan dan didukung aset dengan dampak sosial yang terukur.',
            ],
            [
                'slug' => 'financing',
                'name_en' => 'Financing',
                'name_id' => 'Pembiayaan',
                'subtitle_en' => 'Direct investments in high-growth, ethical enterprises.',
                'subtitle_id' => 'Investasi langsung pada perusahaan etis dengan pertumbuhan tinggi.',
                'description_en' => 'Access interest-free funding solutions to scale up your business. Our asset-backed structures provide a secure path to capital without the burden of Riba.',
                'description_id' => 'Solusi pembiayaan terstruktur menggunakan Murabahah, Istishna\', dan Ijarah. Setiap transaksi didukung aset dan bebas dari riba, gharar, dan maysir.',
            ],
        ];

        foreach ($services as $service) {
            $genericContentEn = '<p class="intro">Detailed overview of our <strong>' . $service['name_en'] . '</strong> services.</p><p>We provide comprehensive solutions designed to scale with your business while strictly adhering to Sharia mandates. Our dedicated team of experts ensures seamless execution from start to finish.</p>';
            
            $genericContentId = '<p class="intro">Gambaran terperinci tentang layanan <strong>' . $service['name_id'] . '</strong> kami.</p><p>Kami menyediakan solusi komprehensif yang dirancang untuk berkembang bersama bisnis Anda dengan tetap berpegang teguh pada mandat Syariah. Tim ahli kami memastikan eksekusi yang lancar dari awal hingga akhir.</p>';

            Service::updateOrCreate(
                ['slug' => $service['slug']],
                array_merge($service, [
                    'content_en' => $genericContentEn,
                    'content_id' => $genericContentId,
                    'is_published' => true,
                ])
            );
        }
    }
}
