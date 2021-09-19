<?php

namespace App\Domains\Wallet\Http\Service\Actions;

use App\Domains\Wallet\Models\CashIn;
use Arr;
use Config;

class fiat {
    private $currency;
    private $cashInResult;
    private $url;
    private $channel = 'fiat-payment';

    public function setCurrency($currency)
    {
        if ($currency) {
            $this->currency = $currency;
            return;
        }

        $this->currency = 'PHP';
    }

    public function getPaymentOrder($amount)
    {
        return [
            'currency' => $this->currency,
            'amount'   => $amount
        ];
    }

    public function storePaymentOrderResponse($response, $amount)
    {
        CashIn::create([
            'tracking_id' => $response['tracking_id'],
            'user_id'     => auth()->user()->id,
            'status'      => Config::get('cash-in.PENDING'),
            'url'         => $response['url'],
            'amount'      => $amount,
            'currency'    => $this->currency,
            'channel'     => $this->channel
        ]);

        $this->url = $response['url'];
        return $this;
    }

    public function returnPaymentOrderResponse()
    {
        return [
            'status' => 1,
            'url'    => $this->url
        ];
    }

    public function saveCashInResponse(CashIn $cashIn, $cashInResponse)
    {
        if($this->checkResponseData($cashIn, $cashInResponse)) {
            return $this;
        }

        $cashIn->status = Config::get('cash-in.SUCCESS');
        $cashIn->save();
        $this->cashInResult = [
            'error' => false,
            'message' => 'Payment Successful.'
        ];
        return $this;
    }

    private function checkResponseData(CashIn $cashIn, $cashInResponse)
    {
        if (!Arr::exists($cashInResponse, 'amount') ||  !Arr::exists($cashInResponse, 'amount'))
        {
            $this->cashInResult = [
                'error' => true,
                'message' => 'Field did not match.'
            ];
            return true;
        }

        if ($cashIn->amount !== $cashInResponse['amount'] || $cashIn->currency !== $cashInResponse['currency'])
        {
            $this->cashInResult = [
                'error' => true,
                'message' => 'Data did not match.'
            ];
            return true;
        }

        if($cashInResponse['status'] === Config::get('cash-in.CALLBACK_FAILED')) {
            $cashIn->status = Config::get('cash-in.FAILED');
            $cashIn->save();

            $this->cashInResult = [
                'error' => true,
                'message' => 'Cash-in Failed.'
            ];
            return true;
        }

        return false;
    }

    public function getChannel()
    {
        return $this->channel;
    }

    public function getCurrency()
    {
        return $this->currency;
    }

    public function getResult()
    {
        return $this->cashInResult;
    }

}
