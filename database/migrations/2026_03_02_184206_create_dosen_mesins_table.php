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
        Schema::create('dosen_mesin', function (Blueprint $table) {
            $table->id();
            $table->string('gambar_dosen');
            $table->string('nama_dosen', 255);
            $table->enum('jabatan_dosen', ['Asisten Ahli', 'Lektor Kepala', 'Lektor', 'Profesor'])->nullable();
            $table->enum('posisi_dosen', ['Kaprodi', 'Dosen'])->default('Dosen');
            $table->string('nuptk', 25)->nullable();
            $table->string('riwayat_prodi', 255)->nullable();
            $table->string('riwayat_universitas', 255)->nullable();
            $table->string('link_publikasi', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dosen_mesin');
    }
};
