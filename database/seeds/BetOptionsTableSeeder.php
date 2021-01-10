<?php

use Illuminate\Database\Seeder;

class BetOptionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Domains\Bet\Models\BetOption::insert([
            ['name' => 'Red'],
            ['name' => 'Green'],
            ['name' => 'Blue'],
            ['name' => 'Yellow'],
            ['name' => 'Pink'],
        ]);
    }
}
