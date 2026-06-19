<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // General
            ['key' => 'site_name',       'value' => 'STIF Capital',                         'group' => 'general', 'type' => 'text',  'label' => 'Site Name'],
            ['key' => 'site_tagline_en', 'value' => 'Sharia Private Equity',                 'group' => 'general', 'type' => 'text',  'label' => 'Tagline (EN)'],
            ['key' => 'site_tagline_id', 'value' => 'Private Equity Syariah',                'group' => 'general', 'type' => 'text',  'label' => 'Tagline (ID)'],
            ['key' => 'founded_year',    'value' => '2024',                                  'group' => 'general', 'type' => 'text',  'label' => 'Founded Year'],

            // Contact
            ['key' => 'email',           'value' => 'partners@stifcapital.com',              'group' => 'contact', 'type' => 'text',  'label' => 'Contact Email'],
            ['key' => 'phone_jakarta',   'value' => '+62 21 1234 567',                       'group' => 'contact', 'type' => 'text',  'label' => 'Phone Jakarta'],
            ['key' => 'phone_dubai',     'value' => '+971 4 123 4567',                       'group' => 'contact', 'type' => 'text',  'label' => 'Phone Dubai'],
            ['key' => 'office_hours',    'value' => 'Mon – Fri · 08.00–17.00',               'group' => 'contact', 'type' => 'text',  'label' => 'Office Hours'],
            ['key' => 'offices',         'value' => 'Jakarta — Dubai',                       'group' => 'contact', 'type' => 'text',  'label' => 'Offices'],

            // Address
            ['key' => 'address_jakarta_en', 'value' => 'Jakarta, Indonesia',                'group' => 'contact', 'type' => 'text',  'label' => 'Address Jakarta (EN)'],
            ['key' => 'address_dubai_en',   'value' => 'Dubai, UAE',                         'group' => 'contact', 'type' => 'text',  'label' => 'Address Dubai (EN)'],

            // Social
            ['key' => 'social_linkedin', 'value' => '',                                      'group' => 'social',  'type' => 'text',  'label' => 'LinkedIn URL'],
            ['key' => 'social_instagram','value' => '',                                      'group' => 'social',  'type' => 'text',  'label' => 'Instagram URL'],
            ['key' => 'social_whatsapp', 'value' => '',                                      'group' => 'social',  'type' => 'text',  'label' => 'WhatsApp Business'],

            // SEO
            ['key' => 'meta_description_en', 'value' => 'STIF Capital — The First Sharia-Compliant Private Equity in Indonesia. Headquartered in Jakarta with offices in Dubai and Singapore.', 'group' => 'seo', 'type' => 'text', 'label' => 'Meta Description (EN)'],
            ['key' => 'meta_description_id', 'value' => 'STIF Capital — Private Equity Syariah pertama di Indonesia. Berkantor pusat di Jakarta dengan kantor di Dubai dan Singapura.', 'group' => 'seo', 'type' => 'text', 'label' => 'Meta Description (ID)'],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(['key' => $setting['key']], $setting);
        }

        $this->command->info('✅ Settings seeded successfully.');
    }
}
