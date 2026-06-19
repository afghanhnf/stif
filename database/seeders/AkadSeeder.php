<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Akad;

class AkadSeeder extends Seeder
{
    public function run(): void
    {
        $akads = [
            ['number' => 1, 'slug' => 'mudarabah', 'arabic_name' => 'مُضَارَبَةٌ', 'latin_name' => 'Mudarabah', 'name_en' => 'Mudarabah', 'name_id' => 'Mudharabah', 'definition_en' => 'Profit-Sharing Partnership', 'definition_id' => 'Kemitraan Bagi Hasil'],
            ['number' => 2, 'slug' => 'musharakah', 'arabic_name' => 'مُشَارَكَةٌ', 'latin_name' => 'Musharakah', 'name_en' => 'Musharakah', 'name_id' => 'Musyarakah', 'definition_en' => 'Joint-Venture Equity', 'definition_id' => 'Ekuitas Usaha Patungan'],
            ['number' => 3, 'slug' => 'wakalah', 'arabic_name' => 'وَكَالَةٌ', 'latin_name' => 'Wakalah', 'name_en' => 'Wakalah', 'name_id' => 'Wakalah', 'definition_en' => 'Agency', 'definition_id' => 'Keagenan/Perwakilan'],
            ['number' => 4, 'slug' => 'murabahah', 'arabic_name' => 'مُرَابَحَةٌ', 'latin_name' => 'Murabahah', 'name_en' => 'Murabahah', 'name_id' => 'Murabahah', 'definition_en' => 'Cost-Plus Sale', 'definition_id' => 'Jual Beli dengan Margin'],
            ['number' => 5, 'slug' => 'ijarah', 'arabic_name' => 'إِجَارَةٌ', 'latin_name' => 'Ijarah', 'name_en' => 'Ijarah', 'name_id' => 'Ijarah', 'definition_en' => 'Lease', 'definition_id' => 'Sewa-Menyewa'],
            ['number' => 6, 'slug' => 'ijarah-muntahiya-bittamleek', 'arabic_name' => 'إِجَارَةٌ وَعْدٌ بِالتَّمْلِيكِ', 'latin_name' => 'Ijarah Muntahiya Bittamleek', 'name_en' => 'IMBT', 'name_id' => 'IMBT', 'definition_en' => 'Lease-to-Own', 'definition_id' => 'Sewa Berakhir Kepemilikan'],
            ['number' => 7, 'slug' => 'diminishing-musharakah', 'arabic_name' => 'مُشَارَكَةٌ مُتَنَاقِصَةٌ', 'latin_name' => 'Diminishing Musharakah', 'name_en' => 'Diminishing Musharakah', 'name_id' => 'Musyarakah Mutanaqisah', 'definition_en' => 'Partnership with Buyout', 'definition_id' => 'Kemitraan dengan Pembelian Bertahap'],
            ['number' => 8, 'slug' => 'salam', 'arabic_name' => 'سَلَمٌ', 'latin_name' => 'Salam', 'name_en' => 'Salam', 'name_id' => 'Salam', 'definition_en' => 'Forward Purchase', 'definition_id' => 'Pembelian di Muka'],
            ['number' => 9, 'slug' => 'istisna', 'arabic_name' => 'إِسْتِصْنَاعٌ', 'latin_name' => 'Istisna', 'name_en' => 'Istisna', 'name_id' => 'Istishna', 'definition_en' => 'Manufacturing Contract', 'definition_id' => 'Kontrak Manufaktur'],
            ['number' => 10, 'slug' => 'qard', 'arabic_name' => 'قَرْضٌ', 'latin_name' => 'Qard', 'name_en' => 'Qard', 'name_id' => 'Qardh', 'definition_en' => 'Benevolent Loan', 'definition_id' => 'Pinjaman Kebajikan'],
            ['number' => 11, 'slug' => 'waqf', 'arabic_name' => 'وَقْفٌ', 'latin_name' => 'Waqf', 'name_en' => 'Waqf', 'name_id' => 'Wakaf', 'definition_en' => 'Charitable Endowment', 'definition_id' => 'Sumbangan Amal'],
        ];

        foreach ($akads as $akad) {
            $genericContentEn = '<p class="intro">In Islamic finance, <strong>' . $akad['name_en'] . '</strong> (' . $akad['arabic_name'] . ') is defined as a ' . strtolower($akad['definition_en']) . '.</p><p>This contract provides a robust framework for ethical financing and investment.</p>';
            
            $genericContentId = '<p class="intro">Dalam keuangan Islam, <strong>' . $akad['name_id'] . '</strong> (' . $akad['arabic_name'] . ') didefinisikan sebagai ' . strtolower($akad['definition_id']) . '.</p><p>Akad ini menyediakan kerangka kerja yang kuat untuk pembiayaan dan investasi etis.</p>';

            Akad::updateOrCreate(
                ['slug' => $akad['slug']],
                array_merge($akad, [
                    'jurisprudence_en' => $genericContentEn,
                    'jurisprudence_id' => $genericContentId,
                    'is_published' => true,
                ])
            );
        }
    }
}
