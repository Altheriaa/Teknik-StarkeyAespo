<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Standar / kriteria (satu standar = satu tabel di halaman e-SPMI)
        Schema::create('espmi_standar', function (Blueprint $table) {
            $table->id();
            $table->string('kode', 30);
            $table->string('nama');
            $table->unsignedInteger('urutan')->default(0);
            $table->timestamps();
        });

        // Indikator di dalam standar (mis. 1.1.1.a)
        Schema::create('espmi_indikator', function (Blueprint $table) {
            $table->id();
            $table->foreignId('standar_id')->constrained('espmi_standar')->cascadeOnDelete();
            $table->string('kode', 30);
            $table->text('dokumen_pendukung');
            $table->unsignedInteger('urutan')->default(0);
            $table->timestamps();
        });

        // Isian per indikator per program studi + penilaian auditor
        Schema::create('espmi_isian', function (Blueprint $table) {
            $table->id();
            $table->foreignId('indikator_id')->constrained('espmi_indikator')->cascadeOnDelete();
            $table->string('program_studi', 60);
            $table->string('link')->nullable();
            $table->text('deskripsi')->nullable();
            $table->unsignedTinyInteger('skor')->nullable();
            $table->string('status', 20)->default('menunggu'); // menunggu | valid | ditolak
            $table->text('catatan')->nullable();
            $table->foreignId('dinilai_oleh')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('dinilai_pada')->nullable();
            $table->timestamps();

            $table->unique(['indikator_id', 'program_studi']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('espmi_isian');
        Schema::dropIfExists('espmi_indikator');
        Schema::dropIfExists('espmi_standar');
    }
};