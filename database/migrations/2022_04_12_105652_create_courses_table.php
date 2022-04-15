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
        if (!Schema::hasTable('courses')) {
            Schema::create('courses', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
                $table->integer('category_id')->unsigned()->nullable();
                $table->string('name')->nullable();
                $table->string('slug')->nullable();
                $table->text('description')->nullable();
                $table->text('short_description')->nullable();
                $table->string('visibility')->nullable();
                $table->string('thumbnail')->nullable();
                $table->string('level')->nullable();
                $table->string('certification')->nullable();
                $table->string('language')->nullable();
                $table->string('duration')->nullable();
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
        Schema::dropIfExists('courses');
    }
};
