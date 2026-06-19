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
        Schema::create('hero_sections', function (Blueprint $table) {
            $table->id();
            $table->string('badge_en')->nullable();
            $table->string('badge_id')->nullable();
            $table->string('title_en')->nullable();
            $table->string('title_id')->nullable();
            $table->text('description_1_en')->nullable();
            $table->text('description_1_id')->nullable();
            $table->text('description_2_en')->nullable();
            $table->text('description_2_id')->nullable();
            $table->string('button_1_text_en')->nullable();
            $table->string('button_1_text_id')->nullable();
            $table->string('button_1_url')->nullable();
            $table->string('button_2_text_en')->nullable();
            $table->string('button_2_text_id')->nullable();
            $table->string('button_2_url')->nullable();
            $table->string('image')->nullable();
            $table->string('verse_arabic')->nullable();
            $table->text('verse_translation_en')->nullable();
            $table->text('verse_translation_id')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hero_sections');
    }
};
