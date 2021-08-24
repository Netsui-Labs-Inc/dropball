<?php

namespace App\Http\Livewire\Services;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Http\Service\HubWalletTransactions;
use App\Http\Livewire\Services\TransactionTable\MasterAgentsTransaction;
use App\Http\Livewire\Services\TransactionTable\PlayersTransaction;
use App\Http\Livewire\Services\WithdrawalTable\HubsWithdrawalRequest;
use App\Http\Livewire\Services\WithdrawalTable\MasterAgentsWithdrawalRequest;
use App\Http\Livewire\Services\WithdrawalTable\PlayersWithdrawalRequest;

class WithdrawalQueryFactory
{
    private $user;

    public function __construct()
    {
        $this->user = Auth()->user();
    }

    public function createWithdrawalRequestTable()
    {
        if ($this->user->hasRole('Master Agent'))
        {
            return new PlayersWithdrawalRequest();
        }

        if ($this->user->hasRole('Virtual Hub'))
        {
            return new MasterAgentsWithdrawalRequest();
        }

        if ($this->user->hasRole('Processor'))
        {
            return new HubsWithdrawalRequest();
        }
    }
}
