<?php

use App\Domains\Auth\Models\User;
use App\Models\Company;
use Illuminate\Database\Seeder;
use App\Domains\Hub\Models\Hub;
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
        $hub = Hub::factory()->create();
        $hub->depositFloat(100000);

        $operator = Company::firstOrCreate(['name' => 'Operator']);
        $masterAgent = User::factory()->masterAgent()->create(['email' => 'master@agent.com',  'referral_id' => 'master1']);
        $masterAgent2 = User::factory()->masterAgent()->create(['email' => 'master@agent2.com', 'referral_id' => 'master2']);
        $betAdmin = User::factory()->betAdmin()->create(['email' => 'bet@admin.com']);
        $player = User::factory()->player()->create(['email' => 'dropball@player.com', 'referred_by' => $masterAgent->id]);
        $player2 = User::factory()->player()->create(['email' => 'dropball2@player.com', 'referred_by' => $masterAgent->id]);
        $virtualHub = User::factory()->virtualHub()->create(['email' => 'admin@hub.com']);
        $satoshi = User::factory()->satoshi()->create(['email' => 'satoshi@nakamoto.com']);
        $operator = User::factory()->operator()->create(['email' => 'operator@admin.com']);
        $player->depositFloat(10000);
        $this->enableForeignKeys();

        $masterAgent->createWallet([
            'name' => 'Income Wallet',
            'slug' => 'income-wallet',
        ]);
        $masterAgent2->createWallet([
            'name' => 'Income Wallet',
            'slug' => 'income-wallet',
        ]);
    }
}
