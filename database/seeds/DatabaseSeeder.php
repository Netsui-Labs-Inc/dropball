<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\Bet\Models\Bet;

class DatabaseSeeder extends Seeder
{
    use TruncateTable;

    /**
     * Seed the application's database.
     */
    public function run()
    {
        Model::unguard();

        $this->truncateMultiple([
            'activity_log',
            'failed_jobs',
        ]);

        $this->call(AuthSeeder::class);
        $this->call(CompaniesTableSeeder::class);
        $this->call(BetOptionsTableSeeder::class);
        //$this->call(AnnouncementSeeder::class);
        if (app()->environment(['local', 'testing'])) {
            BettingEvent::factory()->has(BettingRound::factory()->has(Bet::factory()))->today()->create();

        }

        Model::reguard();
    }
}
