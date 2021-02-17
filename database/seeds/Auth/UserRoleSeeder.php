<?php

use App\Domains\Auth\Models\User;
use App\Models\Company;
use Illuminate\Database\Seeder;

/**
 * Class UserRoleTableSeeder.
 */
class UserRoleSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seed.
     */
    public function run()
    {
        $this->disableForeignKeys();

        User::find(1)->assignRole(config('boilerplate.access.role.admin'));
        $hub = factory(\App\Domains\Hub\Models\Hub::class)->create();
        $hub->depositFloat(100000);

        $operator = Company::firstOrCreate(['name' => 'Operator']);

        $masterAgent = factory(User::class)->state('master_agent')->create(['email' => 'master@agent.com',  'referral_id' => 'master1']);
        $masterAgent2 = factory(User::class)->state('master_agent')->create(['email' => 'master@agent2.com', 'referral_id' => 'master2']);
        $betAdmin = factory(User::class)->state('bet_admin')->create(['email' => 'bet@admin.com']);
        $player = factory(User::class)->state('player')->create(['email' => 'dropball@player.com', 'referred_by' => $masterAgent->id]);
        $player2 = factory(User::class)->state('player')->create(['email' => 'dropball2@player.com', 'referred_by' => $masterAgent->id]);
        $virtualHub = factory(User::class)->state('virtual-hub')->create(['email' => 'admin@hub.com']);
        $satoshi = factory(User::class)->state('satoshi')->create(['email' => 'satoshi@nakamoto.com']);
        $operator = factory(User::class)->state('operator')->create(['email' => 'operator@admin.com']);
        $player->depositFloat(10000);
        $this->enableForeignKeys();
    }
}
