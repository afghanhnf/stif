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
        Schema::table('services', function (Blueprint $table) {
            $table->string('ticket_minimum')->nullable();
            $table->string('ticket_median')->nullable();
            $table->string('ticket_maximum')->nullable();
            $table->json('what_you_get_en')->nullable();
            $table->json('what_you_get_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn([
                'ticket_minimum',
                'ticket_median',
                'ticket_maximum',
                'what_you_get_en',
                'what_you_get_id'
            ]);
        });
    }
};
