<?php

namespace App\Http\Livewire\Services\WithdrawalTable;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Models\Withdrawal;

class HubsWithdrawalRequest
{
    private $user;

    public function __construct()
    {
        $this->user = Auth()->user();
    }

    public function getQuery()
    {
        return User::join('withdrawals', 'withdrawals.user_id', 'users.id')
        ->where('reviewer_id', User::role('Processor')->get()->first()->id);
    }

    public function getView($row)
    {
        return view('backend.wallet.withdrawal.action', [
            'withdrawal' => $row,
            'route'      => 'admin.hubs.withdrawals.show'
        ]);
    }
}
