<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Username untuk login akun Quality Assurance
            $table->string('username')->nullable()->unique()->after('name');
            // admin = boleh masuk panel Filament + halaman QA
            // qa_viewer = hanya boleh melihat halaman QA di website
            $table->string('role', 20)->default('qa_viewer')->after('password');
            $table->boolean('is_active')->default(true)->after('role');
            // Akun QA tidak wajib punya email
            $table->string('email')->nullable()->change();
        });

        // Semua akun yang sudah ada sebelum migrasi ini adalah admin panel.
        DB::table('users')->update(['role' => 'admin']);
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropUnique(['username']);
            $table->dropColumn(['username', 'role', 'is_active']);
        });
    }
};