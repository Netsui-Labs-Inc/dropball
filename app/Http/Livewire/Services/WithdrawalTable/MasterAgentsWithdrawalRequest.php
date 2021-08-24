<?php

namespace App\Http\Livewire\Services\WithdrawalTable;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Models\Withdrawal;

class MasterAgentsWithdrawalRequest
{
    private $user;

    public function __construct()
    {
        $this->user = Auth()->user();
    }

    public function getQuery()
    {
        $query = Withdrawal::query();
        $query->where('reviewer_id', $this->user->hub->admin_id);
        return $query;
    }

    public function getView($row)
    {
        return view('backend.wallet.withdrawal.action', [
            'withdrawal' => $row,
            'route'      => 'admin.master-agents.withdrawals.show'
        ]);
    }
}
