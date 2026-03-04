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
        Schema::create('kerjasama', function (Blueprint $table) {
            $table->id();
            $table->string('nama_kerjasama');
            $table->string('lingkup_kerjasama');
            $table->string('jenis_dokumen');
            $table->enum('status_kerjasama', ['Aktif', 'Selesai']);
            $table->string('link');
            $table->date('tanggal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kerjasama');
    }
};
