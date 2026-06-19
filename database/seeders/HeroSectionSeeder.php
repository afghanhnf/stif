<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\HeroSection;

class HeroSectionSeeder extends Seeder
{
    public function run(): void
    {
        HeroSection::create([
            'badge_en' => 'SHARIA PRIVATE EQUITY',
            'badge_id' => 'EKUITAS SWASTA SYARIAH',
            'title_en' => 'Prosper with Purpose',
            'title_id' => 'Sejahtera dengan Tujuan',
            'description_1_en' => 'Discover the power of Sharia-Compliant equity. Guided by a strict Sharia fiduciary structure, we manage every fund with the utmost duty of care.',
            'description_1_id' => 'Temukan kekuatan ekuitas yang mematuhi prinsip Syariah. Dipandu oleh struktur fidusia Syariah yang ketat, kami mengelola setiap dana dengan kehati-hatian yang tinggi.',
            'description_2_en' => 'We reject excessive uncertainty and debt-driven models, opting instead for a rock-solid, profit-sharing partnership where your capital generates sustainable growth and more importantly social impact.',
            'description_2_id' => 'Kami menolak ketidakpastian yang berlebihan dan model berbasis hutang, dan lebih memilih kemitraan bagi hasil yang solid, di mana modal Anda menghasilkan pertumbuhan yang berkelanjutan dan yang lebih penting, dampak sosial.',
            'button_1_text_en' => 'Pitch a project',
            'button_1_text_id' => 'Ajukan proyek',
            'button_1_url' => '/contact',
            'button_2_text_en' => 'Business Case',
            'button_2_text_id' => 'Studi Kasus',
            'button_2_url' => '/business-case',
            'image' => 'hero-building.jpg',
            'verse_arabic' => 'اتَّقُوا اللَّهَ وَأَجْمِلُوا فِي الطَّلَبِ',
            'verse_translation_en' => '"Be mindful of Allah, and be moderate in seeking a living."',
            'verse_translation_id' => '"Bertakwalah kepada Allah, dan bersederhanalah dalam mencari rezeki."',
            'is_active' => true,
        ]);
    }
}
