<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Identitas auditee per program studi & siklus (bagian A sheet "HASIL AL").
 * Fakultas tidak disimpan: diambil dari config('espmi.fakultas').
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('espmi_audit', function (Blueprint $table) {
            $table->id();
            $table->string('program_studi', 60);
            $table->string('siklus', 20);
            $table->string('nama_dekan')->nullable();
            $table->string('nama_kaprodi')->nullable();
            $table->json('dtps')->nullable();         // ["Nama 1", "Nama 2", ...]
            $table->json('tim_auditor')->nullable();  // ["Auditor 1", "Auditor 2", ...]
            $table->date('tanggal_audit')->nullable();
            $table->timestamps();

            $table->unique(['program_studi', 'siklus']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('espmi_audit');
    }
};