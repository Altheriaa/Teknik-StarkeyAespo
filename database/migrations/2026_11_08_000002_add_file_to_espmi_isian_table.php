<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Data dukung boleh berupa link ATAU berkas yang diunggah Ka. Prodi.
 * Berkas disimpan di disk privat (bukan public) dan diunduh lewat route ber-login.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('espmi_isian', function (Blueprint $table) {
            $table->string('file_path')->nullable()->after('link');
            $table->string('file_nama')->nullable()->after('file_path');
        });
    }

    public function down(): void
    {
        Schema::table('espmi_isian', function (Blueprint $table) {
            $table->dropColumn(['file_path', 'file_nama']);
        });
    }
};