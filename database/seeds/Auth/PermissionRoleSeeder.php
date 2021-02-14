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
            'name' => 'Player',
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
                'name' => 'admin.access.betting-rounds.create',
                'description' => 'Create Betting Rounds',
                'sort' => 13,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.players.list',
                'description' => 'View Players',
                'sort' => 14,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.players.info',
                'description' => 'View Player Info',
                'sort' => 15,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.players.wallet',
                'description' => 'View Player Wallet',
                'sort' => 15,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.master-agents.wallet',
                'description' => 'Manage Master Agents Wallet',
                'sort' => 14,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.master-agents.transactions',
                'description' => 'Manage Master Agents Transactions',
                'sort' => 14,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.master-agents.list',
                'description' => 'View Master Agents',
                'sort' => 14,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.master-agents.create',
                'description' => 'Create Master Agent',
                'sort' => 14,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.master-agents.info',
                'description' => 'View Master Agent Info',
                'sort' => 15,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.master-agents.wallet',
                'description' => 'Manage Master Agents Wallet',
                'sort' => 14,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-rounds.list',
                'description' => 'View Betting Rounds',
                'sort' => 15,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-rounds.create',
                'description' => 'Create Betting Round',
                'sort' => 16,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-rounds.edit',
                'description' => 'Edit Betting Round',
                'sort' => 17,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-rounds.show',
                'description' => 'Show Betting Round',
                'sort' => 18,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-rounds.bets',
                'description' => 'View Drop Ball Bets',
                'sort' => 19,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-rounds.moderate',
                'description' => 'Moderate Betting Round',
                'sort' => 20,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.wallets.manage',
                'description' => 'Manage Wallet Transactions',
                'sort' => 21,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.virtual.hub.wallet',
                'description' => 'Virtual Hub Wallet Transactions',
                'sort' => 22,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.master-agents.manage',
                'description' => 'Manage Master Agents',
                'sort' => 23,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.hubs.manage',
                'description' => 'Virtual Hubs Manage',
                'sort' => 23,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.hubs.transactions',
                'description' => 'Virtual Hubs Transactions',
                'sort' => 23,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.hubs.list',
                'description' => 'Virtual Hubs List',
                'sort' => 23,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.hubs.create',
                'description' => 'Create Virtual Hub',
                'sort' => 23,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.hubs.show',
                'description' => 'Show Virtual Hub Info',
                'sort' => 23,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.hubs.update',
                'description' => 'Update Virtual Hub',
                'sort' => 23,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.hubs.delete',
                'description' => 'Delete Virtual Hub',
                'sort' => 23,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.hubs.wallet',
                'description' => 'Manage Virtual Hub Wallet',
                'sort' => 23,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.my-wallet',
                'description' => 'Manage My Wallet',
                'sort' => 24,
            ]),
            new Permission([
                'type' => User::TYPE_ADMIN,
                'name' => 'admin.access.betting-rounds.report',
                'description' => 'Betting Rounds Detaild Report',
                'sort' => 25,
            ]),
        ]);

        // Assign Permissions to other Roles
        //
        $this->masterAgent();
        $this->betAdmin();
        $this->virtualHub();
        $this->satoshi();
        $this->operator();

        $this->enableForeignKeys();
    }

    public function operator()
    {
        $role = Role::create([
            'type' => User::TYPE_ADMIN,
            'name' => 'Operator',
        ]);

        $role->givePermissionTo([
            'admin.access.betting-events.list',
            'admin.access.betting-events.show',
            'admin.access.betting-rounds.list',
            'admin.access.betting-rounds.edit',
            'admin.access.virtual.hub.wallet',
            'admin.access.virtual.hub.wallet',
            'admin.access.hubs.manage',
            'admin.access.hubs.list',
            'admin.access.hubs.update',
            'admin.access.hubs.create',
            'admin.access.hubs.delete',
            'admin.access.hubs.wallet',
        ]);
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
            'admin.access.wallets.manage',
            'admin.access.master-agents.wallet',
            'admin.access.master-agents.create',
            'admin.access.master-agents.transactions',
            'admin.access.my-wallet'
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
            'admin.access.betting-rounds.list',
            'admin.access.betting-rounds.edit',
            'admin.access.betting-rounds.moderate',
            'admin.access.betting-rounds.bets'
        ]);
    }

    public function virtualHub()
    {
        $role = Role::create([
            'type' => User::TYPE_ADMIN,
            'name' => 'Virtual Hub',
        ]);

        $role->givePermissionTo([
            'admin.access.master-agents.manage',
            'admin.access.master-agents.list',
            'admin.access.master-agents.info',
            'admin.access.master-agents.wallet',
            'admin.access.master-agents.create',
            'admin.access.master-agents.transactions',
            'admin.access.my-wallet',
        ]);
    }

    public function satoshi()
    {
        $role = Role::create([
            'type' => User::TYPE_ADMIN,
            'name' => 'Satoshi',
        ]);

        $role->givePermissionTo([
            'admin.access.virtual.hub.wallet',
            'admin.access.hubs.transactions',
            'admin.access.hubs.manage',
            'admin.access.hubs.list',
            'admin.access.hubs.update',
            'admin.access.hubs.create',
            'admin.access.hubs.delete',
            'admin.access.hubs.wallet',
        ]);
    }
}
