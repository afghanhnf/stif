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
            $table->text('vision_en')->nullable();
            $table->text('vision_id')->nullable();
            $table->string('mission_title_en')->nullable();
            $table->string('mission_title_id')->nullable();
            $table->json('missions')->nullable();
            $table->string('corporate_values_title_en')->nullable();
            $table->string('corporate_values_title_id')->nullable();
            $table->string('corporate_values_emphasis_en')->nullable();
            $table->string('corporate_values_emphasis_id')->nullable();
            $table->text('corporate_values_text_en')->nullable();
            $table->text('corporate_values_text_id')->nullable();
            $table->json('corporate_values')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->dropColumn([
                'vision_en', 'vision_id',
                'mission_title_en', 'mission_title_id', 'missions',
                'corporate_values_title_en', 'corporate_values_title_id',
                'corporate_values_emphasis_en', 'corporate_values_emphasis_id',
                'corporate_values_text_en', 'corporate_values_text_id',
                'corporate_values'
            ]);
        });
    }
};
