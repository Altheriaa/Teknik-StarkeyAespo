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
        Schema::create('roster_akademik', function (Blueprint $table) {
            $table->id();
            $table->string('roster_sipil')->nullable();
            $table->string('roster_mesin')->nullable();
            $table->string('roster_sistem_informasi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roster_akademik');
    }
};
