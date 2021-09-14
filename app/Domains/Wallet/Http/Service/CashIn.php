<?php

namespace App\Domains\Wallet\Http\Service;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Redirect;
use Ixudra\Curl\Facades\Curl;

class CashIn
{
    private $channel;
    private $amount;
    private $currency;
    private $trackingId;
    private $url;

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
        $response = json_decode(Curl::to(Config::get('dropball.cash_in_url') . $this->channel)
            ->withData(array(
                'amount' => $this->amount,
                'currency' => $this->currency
            ))
            ->withHeader('x-b2play-key: ' . Config::get('dropball.b2play_key'))
            ->withHeader('Content-Type: application/x-www-form-urlencoded')
            ->post(), true);
        dd($response['url']);
        return \redirect($response['url']);
    }

    private function storePaymentDetails()
    {

    }

    private function updatePaymentDetails()
    {

    }

    private function redirectToPaymentChannel()
    {

    }

    public function result()
    {

    }

    private function checkDomain()
    {

    }

}
