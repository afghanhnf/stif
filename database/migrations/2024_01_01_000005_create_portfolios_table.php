<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title_en');
            $table->string('title_id')->nullable();
            $table->text('description_en')->nullable();
            $table->text('description_id')->nullable();
            $table->longText('content_en')->nullable();
            $table->longText('content_id')->nullable();
            $table->string('akad_type')->nullable(); // e.g. Musharakah
            $table->string('sector')->nullable(); // e.g. Manufacturing, Trade
            $table->string('ticket_size')->nullable(); // e.g. USD 1M
            $table->string('return_rate')->nullable(); // e.g. ~18% p.a.
            $table->string('tenor')->nullable();
            $table->string('thumbnail')->nullable();
            $table->boolean('is_published')->default(false);
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('portfolios');
    }
};
