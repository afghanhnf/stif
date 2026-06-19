<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('akads', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('number'); // 1-11
            $table->string('slug')->unique();
            $table->string('arabic_name');
            $table->string('latin_name'); // e.g. Mudarabah
            $table->string('name_en');
            $table->string('name_id')->nullable();
            $table->text('definition_en')->nullable();
            $table->text('definition_id')->nullable();
            $table->longText('jurisprudence_en')->nullable();
            $table->longText('jurisprudence_id')->nullable();
            $table->longText('scheme_en')->nullable();
            $table->longText('scheme_id')->nullable();
            $table->longText('example_en')->nullable();
            $table->longText('example_id')->nullable();
            $table->longText('sponsor_benefits_en')->nullable();
            $table->longText('sponsor_benefits_id')->nullable();
            $table->boolean('is_published')->default(true);
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('akads');
    }
};
