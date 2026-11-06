<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Menyesuaikan tabel e-SPMI dengan instrumen AMI (Excel):
 * - indikator: kolom baku instrumen (renstra, capaian, acuan, sumber data, verifikasi)
 * - isian: kolom yang diisi auditor + pilihan siklus audit
 */
return new class extends Migration
{
    public function up(): void
    {
        // ---- INDIKATOR
        Schema::table('espmi_indikator', function (Blueprint $table) {
            $table->renameColumn('dokumen_pendukung', 'capaian'); // = Indikator Capaian Standar
        });

        Schema::table('espmi_indikator', function (Blueprint $table) {
            $table->text('renstra_unaya')->nullable()->after('kode');
            $table->text('renstra_lppm')->nullable()->after('renstra_unaya');
            $table->text('acuan')->nullable()->after('capaian');
            $table->text('sumber_data')->nullable()->after('acuan');
            $table->text('verifikasi')->nullable()->after('sumber_data');
        });

        // ---- ISIAN
        // 1) tambah kolom baru + unique baru (indikator + prodi + siklus)
        Schema::table('espmi_isian', function (Blueprint $table) {
            $table->string('siklus', 20)->default('VI-2026')->after('program_studi');
            $table->text('hasil_verifikasi')->nullable()->after('siklus');
            $table->text('penyebab')->nullable()->after('hasil_verifikasi');
            $table->text('tindakan_pencegahan')->nullable()->after('penyebab');
            $table->date('realisasi')->nullable()->after('skor');

            $table->unique(['indikator_id', 'program_studi', 'siklus']);
        });

        // 2) baru hapus unique lama (agar index yang dipakai foreign key tidak hilang)
        Schema::table('espmi_isian', function (Blueprint $table) {
            $table->dropUnique(['indikator_id', 'program_studi']);
        });

        // 3) kolom lama yang digantikan alur instrumen AMI
        Schema::table('espmi_isian', function (Blueprint $table) {
            $table->dropColumn(['link', 'deskripsi', 'status', 'catatan']);
        });
    }

    public function down(): void
    {
        Schema::table('espmi_isian', function (Blueprint $table) {
            $table->string('link')->nullable();
            $table->text('deskripsi')->nullable();
            $table->string('status', 20)->default('menunggu');
            $table->text('catatan')->nullable();
        });

        Schema::table('espmi_isian', function (Blueprint $table) {
            $table->unique(['indikator_id', 'program_studi']);
        });

        Schema::table('espmi_isian', function (Blueprint $table) {
            $table->dropUnique(['indikator_id', 'program_studi', 'siklus']);
        });

        Schema::table('espmi_isian', function (Blueprint $table) {
            $table->dropColumn(['siklus', 'hasil_verifikasi', 'penyebab', 'tindakan_pencegahan', 'realisasi']);
        });

        Schema::table('espmi_indikator', function (Blueprint $table) {
            $table->dropColumn(['renstra_unaya', 'renstra_lppm', 'acuan', 'sumber_data', 'verifikasi']);
        });

        Schema::table('espmi_indikator', function (Blueprint $table) {
            $table->renameColumn('capaian', 'dokumen_pendukung');
        });
    }
};