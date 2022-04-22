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
        if (!Schema::hasTable('lessons')) {
            Schema::create('lessons', function (Blueprint $table) {
                $table->id();
                $table->foreignId('course_id')->constrained('courses')->onDelete('cascade');
                $table->integer('group_id')->unsigned()->nullable();
                $table->string('title');
                $table->longText('body');
                $table->string('files')->nullable();
                $table->string('slug')->nullable();
                $table->timestamps();
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
        Schema::dropIfExists('lessons');
    }
};
