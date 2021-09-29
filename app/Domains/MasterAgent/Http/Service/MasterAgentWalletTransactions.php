<?php

namespace App\Domains\MasterAgent\Http\Service;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Http\Service\BaseWithdrawalTransaction;
use App\Domains\Wallet\Interfaces\WalletTransactionInterface;


class MasterAgentWalletTransactions
extends BaseWithdrawalTransaction
implements WalletTransactionInterface
{
    public function __construct(User $holder)
    {
        $this->holder = $holder;
        $this->reviewer = Hub::find($holder->hub_id)->admin_id;
        $this->walletType = ['name' => 'Income Wallet', 'slug' => 'income-wallet'];
    }

    public function setWalletType($walletType) : WalletTransactionInterface
    {
        $this->walletType = $walletType;
        return $this;
    }

    public function getWallet() : array
    {
        $this->checkWallet();
        return [
            'view' => view('backend.wallet.master-agent-wallet')->with('user',   $this->holder),
            'error' => null
        ];
    }

}
