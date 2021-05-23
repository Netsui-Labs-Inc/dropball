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
            ['name' => 'PULA', 'color' => '#DB2B39', 'hidden' => false],
            ['name' => 'PUTI', 'color' => '#FFFFFF' , 'hidden' => false],
            ['name' => 'BOKYA', 'color' => '#636f83', 'hidden' => true],
            ['name' => 'JACKPOT', 'color' => '#FCD34D', 'hidden' => true],
        ]);
    }
}
