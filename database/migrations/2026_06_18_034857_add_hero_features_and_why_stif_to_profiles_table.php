<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->json('hero_features')->nullable();
            
            $table->string('why_stif_badge_en')->nullable();
            $table->string('why_stif_badge_id')->nullable();
            $table->string('why_stif_title_en')->nullable();
            $table->string('why_stif_title_id')->nullable();
            $table->text('why_stif_text_en')->nullable();
            $table->text('why_stif_text_id')->nullable();
            $table->string('why_stif_button_en')->nullable();
            $table->string('why_stif_button_id')->nullable();
            $table->string('why_stif_button_url')->nullable();
            
            $table->json('why_stif_cards')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->dropColumn([
                'hero_features',
                'why_stif_badge_en', 'why_stif_badge_id',
                'why_stif_title_en', 'why_stif_title_id',
                'why_stif_text_en', 'why_stif_text_id',
                'why_stif_button_en', 'why_stif_button_id',
                'why_stif_button_url',
                'why_stif_cards',
            ]);
        });
    }
};
