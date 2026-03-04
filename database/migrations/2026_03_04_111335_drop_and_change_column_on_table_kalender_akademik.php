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
        Schema::table('kalender_akademik', function (Blueprint $table) {
            if (Schema::hasColumn('kalender_akademik', 'image_genap')) {
                $table->dropColumn('image_genap');
            }
            $table->renameColumn('image_ganjil', 'image');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('kalender_akademik', function (Blueprint $table) {
            $table->string('image_genap');
            $table->renameColumn('image', 'image_ganjil');
        });
    }
};
