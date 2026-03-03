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
        Schema::create('kesiapan_teknologi', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('produk_inovasi')->nullable();
            $table->string('deskripsi')->nullable();
            $table->string('nilai_tkt')->nullable();
            $table->date('tanggal')->nullable();
            $table->string('link')->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kesiapan_teknologi');
    }
};
