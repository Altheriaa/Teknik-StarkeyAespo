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
        Schema::create('kurikulum_mesin', function (Blueprint $table) {
            $table->id();
            $table->integer('semester');
            $table->string('kode_mk', 10);
            $table->string('mata_kuliah', 100);
            $table->integer('sks');
            $table->integer('praktek');
            $table->integer('teori');
            $table->enum('kategori', ['wajib', 'pilihan']);
            $table->string('rps', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kurikulum_mesin');
    }
};
