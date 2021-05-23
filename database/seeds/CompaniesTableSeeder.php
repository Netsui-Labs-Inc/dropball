<?php

use Illuminate\Database\Seeder;

class CompaniesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Company::create([
           'name' => 'Drop Ball'
        ]);

        \App\Models\Company::create([
           'name' => 'System'
        ]);
    }
}
