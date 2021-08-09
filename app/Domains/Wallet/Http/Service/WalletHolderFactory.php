<?php

namespace App\Domains\Wallet\Http\Service;

use App\Domains\Hub\Http\Service\HubWalletTransactions;
use App\Domains\MasterAgent\Http\Service\MasterAgentWalletTransactions;
use App\Domains\Player\Http\Service\PlayerWalletTransactions;

class WalletHolderFactory
{
    private $holder;

    public function createWalletHolder($user)
    {
        $this->holder = $user;
        if ($this->holder->hasRole('Virtual Hub'))
        {
            return new HubWalletTransactions($this->holder);
        }

        if ($this->holder->hasRole('Master Agent'))
        {
            return new MasterAgentWalletTransactions($this->holder);
        }

        return new PlayerWalletTransactions($this->holder);
    }
}
