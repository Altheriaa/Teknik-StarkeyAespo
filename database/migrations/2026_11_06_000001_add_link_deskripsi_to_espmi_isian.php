<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Mengembalikan kolom "Data Dukung (link)" dan "Deskripsi" yang dipakai tabel
 * ringkas e-SPMI. Dicek dulu dengan hasColumn agar aman dijalankan baik
 * sebelum maupun sesudah migrasi 2026_11_05 (yang sempat menghapus kolom ini).
 */
return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasColumn('espmi_isian', 'link')) {
            Schema::table('espmi_isian', function (Blueprint $table) {
                $table->string('link')->nullable()->after('siklus');
            });
        }

        if (! Schema::hasColumn('espmi_isian', 'deskripsi')) {
            Schema::table('espmi_isian', function (Blueprint $table) {
                $table->text('deskripsi')->nullable()->after('link');
            });
        }
    }

    public function down(): void
    {
        foreach (['link', 'deskripsi'] as $kolom) {
            if (Schema::hasColumn('espmi_isian', $kolom)) {
                Schema::table('espmi_isian', function (Blueprint $table) use ($kolom) {
                    $table->dropColumn($kolom);
                });
            }
        }
    }
};