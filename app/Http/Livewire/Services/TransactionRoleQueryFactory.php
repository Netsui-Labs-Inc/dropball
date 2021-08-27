<?php

namespace App\Http\Livewire\Services;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Http\Service\HubWalletTransactions;
use App\Http\Livewire\Services\TransactionTable\HubsTransaction;
use App\Http\Livewire\Services\TransactionTable\MasterAgentsTransaction;
use App\Http\Livewire\Services\TransactionTable\PlayersTransaction;

class TransactionRoleQueryFactory
{
    private $user;
    public function __construct()
    {
        $this->user = Auth()->user();
    }

    public function createTransactionTable()
    {
        if ($this->user->hasRole('Master Agent'))
        {
            return new PlayersTransaction();
        }

        if ($this->user->hasRole('Virtual Hub'))
        {
            return new MasterAgentsTransaction();
        }

        if ($this->user->hasRole('Processor'))
        {
            return new HubsTransaction();
        }
    }
}
