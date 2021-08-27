<?php

namespace App\Http\Livewire\Services\WithdrawalTable;

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
        $query = Withdrawal::query();
        $query->where('reviewer_id', $this->user->id);
        return $query;
    }

    public function getView($row)
    {
        return view('backend.wallet.withdrawal.action', [
            'withdrawal' => $row,
            'route' => 'admin.players.withdrawals.show'
        ]);
    }

}
