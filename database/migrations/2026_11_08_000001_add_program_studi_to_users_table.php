<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Peran "Ka. Prodi" terikat ke tepat satu program studi.
 * Kolom ini hanya terisi untuk akun ber-role kaprodi (null untuk role lain).
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('program_studi', 60)->nullable()->after('role');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('program_studi');
        });
    }
};