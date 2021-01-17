<?php

use App\Domains\Auth\Models\Permission;
use App\Domains\Auth\Models\Role;
use App\Domains\Auth\Models\User;
use Illuminate\Database\Seeder;

/**
 * Class PermissionRoleTableSeeder.
 */
class PermissionRoleSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seed.
     */
    public function run()
    {
        $this->disableForeignKeys();

        // Create Roles
        Role::create([
            'id' => 1,
            'type' => User::TYPE_ADMIN,
            'name' => 'Administrator',
        ]);

        Role::create([
            'type' => User::TYPE_USER,
            'name' => 'BettingRound',
        ]);

        // Non Grouped Permissions
        //

        // Grouped permissions
        // Users category
        $users = Permission::create([
            'type' => User::TYPE_ADMIN,
            'name' => 'admin.access.user',
            'description' => 'All User Permissions',
        ]);

        $users->children()->saveMany([
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.user.list',
                'description' => 'View Users',
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.user.deactivate',
                'description' => 'Deactivate Users',
                'sort' => 2,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.user.reactivate',
                'description' => 'Reactivate Users',
                'sort' => 3,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.user.clear-session',
                'description' => 'Clear User Sessions',
                'sort' => 4,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.user.impersonate',
                'description' => 'Impersonate Users',
                'sort' => 5,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.user.change-password',
                'description' => 'Change User Passwords',
                'sort' => 6,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-events.list',
                'description' => 'View Betting Events List',
                'sort' => 7,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-events.show',
                'description' => 'View Betting Event info',
                'sort' => 8,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-events.create',
                'description' => 'Create Betting Event',
                'sort' => 9,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-events.edit',
                'description' => 'Edit Betting Event',
                'sort' => 10,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-events.delete',
                'description' => 'Delete Betting Event',
                'sort' => 11,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.players.list',
                'description' => 'View Players',
                'sort' => 12,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.players.info',
                'description' => 'View Player Info',
                'sort' => 13,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.players.wallet',
                'description' => 'Manage Players Wallet',
                'sort' => 14,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.plays.list',
                'description' => 'View Betting Rounds',
                'sort' => 15,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.plays.create',
                'description' => 'Create Betting Round',
                'sort' => 16,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.plays.edit',
                'description' => 'Edit Betting Round',
                'sort' => 17,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.plays.show',
                'description' => 'Edit Betting Round',
                'sort' => 18,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.plays.bets',
                'description' => 'View Drop Ball Bets',
                'sort' => 19,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.plays.moderate',
                'description' => 'Moderate Betting Round',
                'sort' => 20,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.wallets.manage',
                'description' => 'Manage Wallet Transactions',
                'sort' => 21,
            ]),
        ]);

        // Assign Permissions to other Roles
        //
        $this->masterAgent();
        $this->betAdmin();

        $this->enableForeignKeys();
    }

    public function masterAgent()
    {
        $role = Role::create([
            'type' => User::TYPE_ADMIN,
            'name' => 'Master Agent',
        ]);

        $role->givePermissionTo([
            'admin.access.players.list',
            'admin.access.players.info',
            'admin.access.players.wallet',
            'admin.access.betting-events.list',
            'admin.access.betting-events.show',
            'admin.access.betting-events.create',
            'admin.access.plays.list',
            'admin.access.wallets.manage',
        ]);
    }

    public function betAdmin()
    {
        $role = Role::create([
            'type' => User::TYPE_ADMIN,
            'name' => 'Bet Admin',
        ]);

        $role->givePermissionTo([
            'admin.access.betting-events.list',
            'admin.access.betting-events.show',
            'admin.access.plays.list',
            'admin.access.plays.create',
            'admin.access.plays.edit',
            'admin.access.plays.bets',
            'admin.access.plays.moderate',
        ]);
    }
}
