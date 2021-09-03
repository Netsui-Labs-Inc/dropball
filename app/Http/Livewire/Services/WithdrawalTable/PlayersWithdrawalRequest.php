<?php

namespace App\Http\Livewire\Services\WithdrawalTable;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Models\Withdrawal;

class PlayersWithdrawalRequest
{
    private $user;
    public function __construct()
    {
        $this->user = Auth()->user();
    }

    public function getQuery()
    {
        $query = User::query();
        return $query->join('withdrawals', 'withdrawals.user_id', 'users.id')
            ->where('reviewer_id', $this->user->id);
    }

    public function getView($row)
    {
        return view('backend.wallet.withdrawal.action', [
            'withdrawal' => $row,
            'route' => 'admin.players.withdrawals.show'
        ]);
    }

}
