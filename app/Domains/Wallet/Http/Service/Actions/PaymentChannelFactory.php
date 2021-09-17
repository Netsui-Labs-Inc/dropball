<?php

namespace App\Domains\Wallet\Http\Service\Actions;

class PaymentChannelFactory {

    public function createPaymentChannel($channel)
    {
        if($channel === 'fiat-payment')
        {
            return new fiat();
        } else
        {
            return new Crypto();
        }
    }
}
