<?php

namespace App\Domains\Factories;

use App\Domains\CashIn\Http\Services\Actions\Crypto;
use App\Domains\CashIn\Http\Services\Actions\CryptoWithdrawal;
use App\Domains\CashIn\Http\Services\Actions\Fiat;

class ClassFactory
{
    private $classList;

    public function __construct()
    {
        $this->setList();
    }

    private function setList()
    {
        $this->classList = collect([
            'crypto-payment' => new Crypto(),
            'fiat-payment'  => new Fiat(),
            'crypto-withdrawal' => new CryptoWithdrawal()
        ]);
    }

    public function getClass($key)
    {
        return $this->classList->get($key);
    }

}
