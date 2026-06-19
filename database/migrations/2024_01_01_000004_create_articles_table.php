<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title_en');
            $table->string('title_id')->nullable();
            $table->text('excerpt_en')->nullable();
            $table->text('excerpt_id')->nullable();
            $table->longText('content_en')->nullable();
            $table->longText('content_id')->nullable();
            $table->string('author')->nullable();
            $table->string('category')->nullable();
            $table->string('featured_image')->nullable();
            $table->unsignedInteger('read_time_minutes')->default(5);
            $table->boolean('is_published')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
