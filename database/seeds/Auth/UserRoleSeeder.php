<?php

use App\Domains\Auth\Models\User;
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

        $masterAgent = factory(User::class)->state('master_agent')->create(['email' => 'master@agent.com']);
        $betAdmin = factory(User::class)->state('bet_admin')->create(['email' => 'bet@admin.com']);
        $bettingRounder = factory(User::class)->create(['email' => 'spider@player.com', 'referred_by' => $masterAgent->id]);

        $this->enableForeignKeys();
    }
}
