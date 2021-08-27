<?php

namespace App\Domains\Hub\Http\Service;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Http\Service\BaseWithdrawalTransaction;

class HubWalletTransactions extends BaseWithdrawalTransaction
{
    public function __construct(User $holder)
    {
        $this->holder = Hub::where('admin_id',  $holder->id)->first();
        $this->walletType = ['name' => 'Income Wallet', 'slug' => 'income-wallet'];
        $this->reviewer = User::role('Processor')->get()->first()->id;
    }

    public function getWallet()
    {
        $wallet = $this->checkWallet();
        if ($this->holder === null) {
            return ['error', 'message' => 'Wallet is unavailable. please contact the account administrator'];
        }
        return view('backend.wallet.hub-wallet')->with('hub', $this->holder)->with('hubWallet', $wallet);
    }

}
