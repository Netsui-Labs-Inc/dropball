<?php

namespace App\Domains\Player\Http\Service;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Http\Service\BaseWithdrawalTransaction;

class PlayerWalletTransactions extends BaseWithdrawalTransaction
{
    public function __construct(User $holder)
    {
        $this->holder = $holder;
        $this->reviewer = $holder->referred_by;
        $this->walletType = ['name' => 'Default Wallet', 'slug' => 'default'];
    }

    public function getWallet()
    {
        return view('frontend.pages.wallet.index')
            ->with('user', $this->holder);
    }
}
