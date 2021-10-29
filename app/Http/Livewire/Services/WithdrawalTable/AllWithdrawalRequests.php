<?php

namespace App\Http\Livewire\Services\WithdrawalTable;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Models\Withdrawal;

class AllWithdrawalRequests
{
    private $userType;
    private $routes = [
            'Player'       => 'admin.players.withdrawals.show',
            'Master-Agent' => 'admin.master-agents.withdrawals.show',
            'Hub'          => 'admin.hubs.withdrawals.show'
        ];
    public function __construct($userType)
    {
        $this->userType = $userType;
    }

    public function getQuery()
    {
        $userType = $this->userType;
        if ($userType === 'Hub') {
            return User::join('withdrawals', 'withdrawals.user_id', 'users.id')
                ->where('reviewer_id', User::role('Processor')->get()->first()->id);
        }

        return User::join('withdrawals', 'withdrawals.user_id', 'users.id')
            ->whereHas('roles', function ($query) use ($userType) {
                return $query->where('name', $userType);
            });
    }

    public function getView($row)
    {
        return view('backend.wallet.withdrawal.action', [
            'withdrawal' => $row,
            'route' => $this->routes[str_replace(' ', '-', $this->userType)]
        ]);
    }

}
