<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TeamMember;

class TeamMemberSeeder extends Seeder
{
    public function run(): void
    {
        $members = [
            [
                'name' => 'Dr. Hisham Al-Sabah',
                'title_en' => 'Managing Partner',
                'title_id' => 'Mitra Pengelola',
                'bio_en' => 'With over 20 years in Islamic banking and private equity, Dr. Hisham oversees the firm’s strategic direction and capital allocation.',
                'bio_id' => 'Dengan pengalaman lebih dari 20 tahun di perbankan syariah dan ekuitas swasta, Dr. Hisham mengawasi arah strategis dan alokasi modal perusahaan.',
                'photo' => null,
                'order' => 1,
                'is_published' => true,
            ],
            [
                'name' => 'Aisha Rahman',
                'title_en' => 'Head of Structuring',
                'title_id' => 'Kepala Penataan Syariah',
                'bio_en' => 'Aisha leads the Sharia structuring desk, ensuring all deals are strictly compliant with international Islamic finance standards.',
                'bio_id' => 'Aisha memimpin meja penataan Syariah, memastikan semua kesepakatan sangat mematuhi standar keuangan Islam internasional.',
                'photo' => null,
                'order' => 2,
                'is_published' => true,
            ]
        ];

        foreach ($members as $member) {
            TeamMember::updateOrCreate(
                ['name' => $member['name']],
                $member
            );
        }
    }
}
