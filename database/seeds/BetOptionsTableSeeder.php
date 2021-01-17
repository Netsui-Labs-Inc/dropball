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
            ['name' => 'Red', 'color' => '#DB2B39'],
            ['name' => 'Green', 'color' => '#99C24D'],
            ['name' => 'Blue', 'color' => '#027BCE'],
            ['name' => 'Yellow', 'color' => '#FADF63'],
            ['name' => 'Pink', 'color' => '#F865B0'],
            ['name' => 'Black', 'color' => '#0D1321'],
        ]);
    }
}
