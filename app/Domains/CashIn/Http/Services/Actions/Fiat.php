<?php

namespace App\Domains\CashIn\Http\Services\Actions;

use App\Domains\CashIn\Interfaces\CashInChannelInterface;
use App\Domains\CashIn\Models\CashIn;
use Arr;
use Config;

class Fiat implements CashInChannelInterface {
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

    public function getPaymentOrder(array $fields) : array
    {
        return [
            'currency' => $this->currency,
            'amount'   => $fields['amount']
        ];
    }

    public function storePaymentOrderResponse($response, $amount) : CashInChannelInterface
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

    public function returnPaymentOrderResponse() : array
    {
        return [
            'status' => 1,
            'url'    => $this->url
        ];
    }

    public function saveCashInResponse(CashIn $cashIn, $cashInResponse) : CashInChannelInterface
    {
        if($this->checkResponseData($cashIn, $cashInResponse)) {
            return $this;
        }

        $cashIn->status = Config::get('cash-in.SUCCESS');
        $cashIn->save();

        $this->cashInResult = [
            'cash-in' => $cashIn,
            'error'   => false,
            'message' => 'Payment Successful.'
        ];
        return $this;
    }

    public function checkResponseData(CashIn $cashIn, $cashInResponse)
    {
        if (!Arr::exists($cashInResponse, 'amount') ||  !Arr::exists($cashInResponse, 'amount'))
        {
            $this->cashInResult = [
                'cash-in' => $cashIn,
                'error'   => true,
                'message' => 'Field did not match.'
            ];
            return true;
        }

        if ($cashIn->amount !== $cashInResponse['amount'] || $cashIn->currency !== $cashInResponse['currency'])
        {
            $this->cashInResult = [
                'cash-in' => $cashIn,
                'error'   => true,
                'message' => 'Data did not match.'
            ];
            return true;
        }

        if($cashInResponse['status'] === Config::get('cash-in.CALLBACK_FAILED')) {
            $cashIn->status = Config::get('cash-in.FAILED');
            $cashIn->save();

            $this->cashInResult = [
                'cash-in' => $cashIn,
                'error'   => true,
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
