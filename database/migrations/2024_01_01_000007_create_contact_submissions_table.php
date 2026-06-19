<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contact_submissions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('company')->nullable();
            $table->string('project_title')->nullable();
            $table->text('project_description')->nullable();
            $table->string('sector')->nullable();
            $table->string('ticket_size_requested')->nullable();
            $table->string('locale', 2)->default('en'); // en or id
            $table->enum('status', ['new', 'reviewed', 'approved', 'rejected'])->default('new');
            $table->text('admin_notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contact_submissions');
    }
};
