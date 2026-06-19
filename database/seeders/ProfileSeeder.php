<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Profile;

class ProfileSeeder extends Seeder
{
    public function run(): void
    {
        Profile::updateOrCreate(
            ['id' => 1],
            [
                'title_en' => 'We build capital with principles.',
            'title_id' => 'Kami membangun modal dengan prinsip.',
            'manifesto_en' => 'OUR VALUES',
            'manifesto_id' => 'NILAI KAMI',
            'description_en' => 'We drive growth through asset-backed partnerships, ensuring risk and reward are shared equitably under transparent contracts and meticulous due diligence.',
            'description_id' => 'Kami mendorong pertumbuhan melalui kemitraan berbasis aset, memastikan risiko dan imbalan dibagi secara adil di bawah kontrak yang transparan dan uji tuntas yang cermat.',
            'button_text_en' => 'Read the methodology',
            'button_text_id' => 'Baca metodologi',
            'button_url' => '/who-we-are',
            'values' => [
                [
                    'num' => '01',
                    'title_en' => 'Transparent & Responsible Investing',
                    'title_id' => 'Investasi Transparan & Bertanggung Jawab',
                    'desc_en' => 'Capital allocated only to projects with proven scalability and measurable growth potential.',
                    'desc_id' => 'Modal dialokasikan hanya untuk proyek dengan skalabilitas yang terbukti dan potensi pertumbuhan yang terukur.',
                    'icon' => '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />'
                ],
                [
                    'num' => '02',
                    'title_en' => 'Sharia Supervisory Expert',
                    'title_id' => 'Pakar Pengawas Syariah',
                    'desc_en' => 'Independent supervisory board that ensure adherence to Sharia on each structure.',
                    'desc_id' => 'Dewan pengawas independen yang memastikan kepatuhan terhadap Syariah pada setiap struktur.',
                    'icon' => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />'
                ],
                [
                    'num' => '03',
                    'title_en' => 'Sustainable & Tangible Results',
                    'title_id' => 'Hasil Berkelanjutan & Nyata',
                    'desc_en' => 'Every transaction is tied to tangible, identifiable assets to minimize speculative risk.',
                    'desc_id' => 'Setiap transaksi terikat pada aset berwujud dan dapat diidentifikasi untuk meminimalkan risiko spekulatif.',
                    'icon' => '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />'
                ],
                [
                    'num' => '04',
                    'title_en' => 'Meaningful Investment Beyond Profits',
                    'title_id' => 'Investasi Bermakna Melampaui Keuntungan',
                    'desc_en' => 'Fostering genuine partnership and social responsibility through just risk-sharing model.',
                    'desc_id' => 'Mendorong kemitraan sejati dan tanggung jawab sosial melalui model pembagian risiko yang adil.',
                    'icon' => '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />'
                ]
                ],
                'vision_en' => 'Becoming a trustworthy private equity firm by adhering to Sharia principles in its operations',
                'vision_id' => 'Menjadi perusahaan private equity terpercaya dengan berpegang pada prinsip Syariah dalam setiap kegiatan operasionalnya',
                'mission_title_en' => 'Three commitments we measure ourselves against.',
                'mission_title_id' => 'Tiga komitmen yang menjadi ukuran kami.',
                'missions' => [
                    [
                        'text_en' => 'Manage projects and investments under Sharia-compliant agreements',
                        'text_id' => 'Mengelola proyek dan investasi berdasarkan perjanjian yang sesuai Syariah'
                    ],
                    [
                        'text_en' => 'Transparent management of projects and investments, free of investment disbursements',
                        'text_id' => 'Pengelolaan proyek dan investasi yang transparan dan bebas dari penyimpangan penyaluran dana'
                    ],
                    [
                        'text_en' => 'Upholding the principles of sustainability and social responsibility',
                        'text_id' => 'Menjunjung prinsip keberlanjutan dan tanggung jawab sosial'
                    ]
                ],
                'corporate_values_title_en' => 'Our core values.',
                'corporate_values_title_id' => 'Nilai inti kami.',
                'corporate_values_emphasis_en' => 'Uncompromised.',
                'corporate_values_emphasis_id' => 'Tanpa kompromi.',
                'corporate_values_text_en' => 'The core values that define our professional conduct and institutional discipline.',
                'corporate_values_text_id' => 'Nilai inti yang membentuk perilaku profesional dan disiplin kelembagaan kami.',
                'corporate_values' => [
                    [
                        'letter' => 'E',
                        'title_en' => 'Ethical',
                        'title_id' => 'Etis',
                        'desc_en' => 'Strict Shariah compliance without Riba, Gharar, and non-halal practices.',
                        'desc_id' => 'Kepatuhan Syariah yang ketat tanpa Riba, Gharar, dan praktik non-halal.'
                    ],
                    [
                        'letter' => 'A',
                        'title_en' => 'Accountability',
                        'title_id' => 'Akuntabilitas',
                        'desc_en' => 'Upholding our duty through total transparency and clear contract terms.',
                        'desc_id' => 'Menjalankan amanah melalui transparansi penuh dan ketentuan kontrak yang jelas.'
                    ],
                    [
                        'letter' => 'I',
                        'title_en' => 'Integrity',
                        'title_id' => 'Integritas',
                        'desc_en' => 'Ensure complete alignment between our word, contracts, and every execution.',
                        'desc_id' => 'Memastikan keselarasan utuh antara ucapan, kontrak, dan setiap pelaksanaan.'
                    ],
                    [
                        'letter' => 'F',
                        'title_en' => 'Social Responsibility',
                        'title_id' => 'Tanggung Jawab Sosial',
                        'desc_en' => 'Ensuring our actions drive positive social impact alongside financial growth.',
                        'desc_id' => 'Memastikan tindakan kami mendorong dampak sosial positif bersama pertumbuhan finansial.'
                    ]
                ],
                'hero_features' => [
                    [
                        'icon' => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />',
                        'title_en' => 'The First Sharia-Compliant Indonesian Private Equity',
                        'title_id' => 'Private Equity Indonesia Pertama yang Mematuhi Syariah'
                    ],
                    [
                        'icon' => '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />',
                        'title_en' => 'Tangible & Impactful Investment',
                        'title_id' => 'Investasi Berwujud & Berdampak'
                    ],
                    [
                        'icon' => '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />',
                        'title_en' => 'Transparency and Responsibility',
                        'title_id' => 'Transparansi dan Tanggung Jawab'
                    ],
                    [
                        'icon' => '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />',
                        'title_en' => 'Measurable Social Impact',
                        'title_id' => 'Dampak Sosial yang Terukur'
                    ]
                ],
                'why_stif_badge_en' => 'WHY STIF',
                'why_stif_badge_id' => 'MENGAPA STIF',
                'why_stif_title_en' => 'Because Growth Shouldn\'t Be a Burden',
                'why_stif_title_id' => 'Karena Pertumbuhan Seharusnya Bukan Menjadi Beban',
                'why_stif_text_en' => 'Our model is built on a foundation of integrity to ensure that our success is your success.',
                'why_stif_text_id' => 'Model kami dibangun di atas fondasi integritas untuk memastikan bahwa kesuksesan kami adalah kesuksesan Anda.',
                'why_stif_button_en' => 'About the firm',
                'why_stif_button_id' => 'Tentang perusahaan',
                'why_stif_button_url' => '/who-we-are',
                'why_stif_cards' => [
                    [
                        'title_en' => 'Sharia Principle',
                        'title_id' => 'Prinsip Syariah',
                        'desc_en' => 'An investment ecosystem entirely free from interest (Riba), uncertainty (Gharar), and speculation (Maysir).',
                        'desc_id' => 'Ekosistem investasi yang sepenuhnya bebas dari bunga (Riba), ketidakpastian (Gharar), dan spekulasi (Maysir).',
                        'icon' => '<line x1="12" y1="2" x2="12" y2="22" /><line x1="5" y1="7" x2="19" y2="7" /><path d="M5 7l-2 8h4L5 7z" /><path d="M19 7l-2 8h4L19 7z" /><path d="M10 22h4" />'
                    ],
                    [
                        'title_en' => 'Tangible & Impactful Investment',
                        'title_id' => 'Investasi Berwujud & Berdampak',
                        'desc_en' => 'Eliminating high-risk speculation by anchoring every investment in real and productive economic sectors.',
                        'desc_id' => 'Menghilangkan spekulasi berisiko tinggi dengan melabuhkan setiap investasi di sektor ekonomi riil dan produktif.',
                        'icon' => '<circle cx="12" cy="8" r="6" /><path d="M15.47 14L19 22l-7-3-7 3 3.53-8" />'
                    ],
                    [
                        'title_en' => 'Global Leadership Excellence',
                        'title_id' => 'Keunggulan Kepemimpinan Global',
                        'desc_en' => 'Managed by executives with experience across MNCs, SOEs, and local companies in 30+ countries.',
                        'desc_id' => 'Dikelola oleh para eksekutif dengan pengalaman di seluruh MNC, BUMN, dan perusahaan lokal di 30+ negara.',
                        'icon' => '<circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />'
                    ],
                    [
                        'title_en' => 'Measurable Social Impact',
                        'title_id' => 'Dampak Sosial yang Terukur',
                        'desc_en' => 'Creating measurable societal value by channeling capital into projects that elevate local communities.',
                        'desc_id' => 'Menciptakan nilai masyarakat yang terukur dengan menyalurkan modal ke proyek-proyek yang meningkatkan komunitas lokal.',
                        'icon' => '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />'
                    ]
                ],
                'is_active' => true,
            ]
        );
    }
}
