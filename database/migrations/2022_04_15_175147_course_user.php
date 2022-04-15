<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('course_user')) {
            Schema::create('course_user', function(Blueprint $table) {
                $table->primary('user_id', 'course_id');
                $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
                $table->foreignId('course_id')->constrained('courses')->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_user');
    }
};
