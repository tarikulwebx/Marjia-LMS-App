<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $user = User::firstOrCreate([   
            'first_name' => 'Tarikul',
            'last_name' => 'Islam',
            'email' => 'tarikul.cse.bru@gmail.com',
            'is_active' => 1,
            'password' => bcrypt('123456')
        ]);

        $user->roles()->attach(1);
    }
}
