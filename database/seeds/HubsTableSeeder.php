<?php

use Illuminate\Database\Seeder;

class HubsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hub = factory(\App\Domains\Hub\Models\Hub::class)->create();
        $hub->depositFloat(100000);
    }
}
