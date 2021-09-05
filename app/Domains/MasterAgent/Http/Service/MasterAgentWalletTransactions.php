<?php

namespace App\Domains\MasterAgent\Http\Service;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Http\Service\BaseWithdrawalTransaction;

class MasterAgentWalletTransactions extends BaseWithdrawalTransaction
{
    public function __construct(User $holder)
    {
        $this->holder = $holder;
        $this->reviewer = Hub::find($holder->hub_id)->admin_id;
        $this->walletType = ['name' => 'Income Wallet', 'slug' => 'income-wallet'];
    }

    public function getWallet()
    {
        $this->checkWallet();
        return [
            'view' => view('backend.wallet.master-agent-wallet')->with('user',   $this->holder),
            'error' => ''
        ];
    }

}
