<?php

namespace App\Domains\Player\Http\Service;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Http\Service\BaseWithdrawalTransaction;
use App\Domains\Wallet\Interfaces\WalletTransactionInterface;

class PlayerWalletTransactions
extends BaseWithdrawalTransaction
implements WalletTransactionInterface
{
    public function __construct(User $holder)
    {
        $this->holder = $holder;
        $this->reviewer = $holder->referred_by;
        $this->walletType = ['name' => 'Default Wallet', 'slug' => 'default'];
    }
    public function setWalletType($walletType) : WalletTransactionInterface
    {
        $this->walletType = $walletType;
        return $this;
    }

    public function getWallet() : array
    {
        return [
            'view' => view('frontend.pages.wallet.index')
                ->with('user', $this->holder),
            'error' => null
        ];
    }
}
