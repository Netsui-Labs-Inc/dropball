<?php

namespace App\Domains\Wallet\Http\Service;

use App\Domains\Wallet\Models\CashIn;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Redirect;
use Ixudra\Curl\Facades\Curl;

class CashInService
{
    private $channel;
    private $amount;
    private $currency;
    private $paymentOrderResponse;

    public function setChannel($channel)
    {
        $this->channel = $channel;
        return $this;
    }

    public function setAmount($amount)
    {
        $this->amount = $amount;
        return $this;
    }

    public function setCurrency($currency = 'PHP')
    {
        $this->currency = $currency;
        return $this;
    }

    public function sendRequest()
    {

        $this->paymentOrderResponse = json_decode(
                Curl::to(Config::get('dropball.cash_in_url') . $this->channel)
                ->withData(array(
                    'currency' => $this->currency,
                    'amount' => $this->amount
                ))
                ->withHeader('x-b2play-key: ' . Config::get('dropball.b2play_key'))
                ->withHeader('Content-Type: application/x-www-form-urlencoded')
                ->post(),
            true
        );

        return $this;

    }

    private function storePaymentDetails()
    {
        $cashIn = CashIn::create([
            'tracking_id' => $this->paymentOrderResponse['tracking_id'],
            'status'      => 0,
            'amount'      => $this->amount,
            'currency'    => $this->currency,
            'channel'     => $this->channel
        ]);
        return $this;
    }

    private function updatePaymentDetails()
    {

    }

    private function redirectToPaymentChannel()
    {
        redirect()->to($this->paymentOrderResponse['url'])->send();
    }

    public function result()
    {

        if($this->paymentOrderResponse['code'] === Config::get('cash-in.PAYMENT_ORDER_SUCCESS'))
        {

            $this->storePaymentDetails()
                ->redirectToPaymentChannel();
            return;
        }

        return [
            'error' => 'message'
        ];
    }

    private function checkDomain()
    {

    }

    public function checkCallback()
    {

    }

}
