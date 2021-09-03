<?php

namespace App\Http\Livewire\Services;

use App\Http\Livewire\Services\TransactionTable\AllTransactions;
use App\Http\Livewire\Services\TransactionTable\HubsTransaction;
use App\Http\Livewire\Services\TransactionTable\MasterAgentsTransaction;
use App\Http\Livewire\Services\TransactionTable\PlayersTransaction;
use Illuminate\Http\Request;

class TransactionRoleQueryFactory
{
    private $user;
    public function __construct()
    {
        $this->user = Auth()->user();
    }

    public function createTransactionTable($userType = null)
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

        return new AllTransactions($userType);
    }
}
