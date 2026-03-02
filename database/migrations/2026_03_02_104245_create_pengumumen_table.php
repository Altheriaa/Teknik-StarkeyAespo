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
        Schema::create('pengumuman', function (Blueprint $table) {
            $table->id();
            $table->integer('tanggal_pengumuman');
            $table->enum('bulan_pengumuman', ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUNI', 'JULI', 'AGU', 'SEP', 'OKT', 'NOV', 'DES']);
            $table->string('judul_pengumuman');
            $table->text('deskripsi_pengumuman');
            $table->string('link');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengumuman');
    }
};
