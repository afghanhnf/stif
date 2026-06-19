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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('title_en')->nullable();
            $table->string('title_id')->nullable();
            $table->text('manifesto_en')->nullable();
            $table->text('manifesto_id')->nullable();
            $table->text('description_en')->nullable();
            $table->text('description_id')->nullable();
            $table->string('image')->nullable();
            $table->string('button_text_en')->nullable();
            $table->string('button_text_id')->nullable();
            $table->string('button_url')->nullable();
            $table->json('values')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
