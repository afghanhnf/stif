<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ArticleSeeder::class,
            PortfolioSeeder::class,
            ServiceSeeder::class,
            AkadSeeder::class,
            TeamMemberSeeder::class,
            HeroSectionSeeder::class,
            ProfileSeeder::class,
        ]);
    }
}
