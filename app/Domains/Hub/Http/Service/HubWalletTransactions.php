<?php

namespace App\Domains\Hub\Http\Service;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Http\Service\BaseWithdrawalTransaction;
use App\Domains\Wallet\Interfaces\WalletTransactionInterface;
use App\Domains\Wallet\Models\Withdrawal;

class HubWalletTransactions
extends BaseWithdrawalTransaction
implements WalletTransactionInterface
{
    public function __construct(User $holder)
    {
        $this->holder = Hub::where('admin_id',  $holder->id)->first();
        $this->walletType = ['name' => 'Income Wallet', 'slug' => 'income-wallet'];
        if (User::role('Processor')->get()->count() < 1) {
            $this->errorMessage = 'Can\'t Access Wallet. Please create a withdrawal processor account';
        } else {
            $this->reviewer = User::role('Processor')->get()->first()->id;
        }

    }

    public function setWalletType($walletType): WalletTransactionInterface
    {
        $this->walletType = $walletType;
        return $this;
    }

    public function getWallet() : array
    {
        $error = null;
        if ($this->errorMessage !== null) {
            $error =  $this->errorMessage;
        }

        $wallet = $this->checkWallet();
        if ($this->holder === null) {
            $error =  'Wallet is unavailable. please contact the account administrator';
        }
        return [
            'view' => view('backend.wallet.hub-wallet')
                ->with('hub', $this->holder)->with('hubWallet', $wallet)
                ->with('withdrawal', Withdrawal::where(['user_id' => $this->holder->id])->get()),
            'error' => $error
        ];

    }

}
