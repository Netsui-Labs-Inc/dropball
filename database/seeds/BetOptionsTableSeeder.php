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
            ['name' => 'PULA', 'color' => '#DB2B39'],
            ['name' => 'PUTI', 'color' => '#FFFFFF'],
            ['name' => 'TABLA', 'color' => '#99C24D'],
        ]);
    }
}
