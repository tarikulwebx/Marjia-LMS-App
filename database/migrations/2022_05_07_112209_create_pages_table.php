<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
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
        if (!Schema::hasTable('pages')) {
            Schema::create('pages', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->text('body');
                $table->string('slug')->nullable();
                $table->timestamps();
            });

            // Common Roles for as website inclusion automatically
            DB::table('pages')->insert([
                ['title' => 'About Us', 'body' => 'Empty page', 'slug' => 'about-us', 'created_at'=> Carbon::now(), 'updated_at'=> Carbon::now()],
                ['title' => 'Term & Condition', 'body' => 'Empty page', 'slug' => 'term-condition', 'created_at'=> Carbon::now(), 'updated_at'=> Carbon::now()],
                ['title' => 'Privacy & Policy', 'body' => 'Empty page', 'slug' => 'privacy-policy', 'created_at'=> Carbon::now(), 'updated_at'=> Carbon::now()],
                ['title' => 'DOC', 'body' => 'Empty page', 'slug' => 'doc', 'created_at'=> Carbon::now(), 'updated_at'=> Carbon::now()],
                ['title' => 'Support', 'body' => 'Empty page', 'slug' => 'support', 'created_at'=> Carbon::now(), 'updated_at'=> Carbon::now()],
            ]);
        }
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
};
