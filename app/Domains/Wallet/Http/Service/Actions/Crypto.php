<?php

namespace App\Domains\Wallet\Http\Service\Actions;

use App\Domains\Wallet\Models\CashIn;
use App\Domains\Wallet\Models\CryptoWithdrawalWallet;
use Arr;
use Config;

class Crypto {
    private $currency;
    private $cashInResult;
    private $url;
    private $status;
    private $channel = 'crypto-payment';

    public function setCurrency($currency)
    {
        if ($currency) {
            $this->currency = $currency;
            return;
        }

        $this->currency = 'BTC';
    }

    public function storePaymentOrderResponse($response, $amount)
    {
        CashIn::create([
            'tracking_id' => $response['data']['tracking_id'],
            'user_id'     => auth()->user()->id,
            'status'      => Config::get('cash-in.PENDING'),
            'url'         => $response['data']['url'],
            'amount'      => $amount,
            'currency'    => $this->currency,
            'channel'     => $this->channel
        ]);

        $this->url = $response['data']['url'];
        return $this;
    }

    public function getPaymentOrder($amount)
    {
        return [
            'currency' => $this->currency,
            'amount'   => $amount
        ];
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

        CryptoWithdrawalWallet::create([
            'tracking_id'    => $cashInResponse['tracking_id'],
            'wallet_address' => $cashInResponse['wallet_address'],
            'created_at'     => $cashInResponse['created']
        ]);

        $this->cashInResult = [
            'error' => false,
            'message' => 'Payment Successful.'
        ];
        return $this;
    }

    private function checkResponseData(CashIn $cashIn, $cashInResponse)
    {
        if (!Arr::exists($cashInResponse, 'wallet_address'))
        {
            $this->cashInResult = [
                'error' => true,
                'message' => 'Field did not match.'
            ];
            return true;
        }
        if ($cashInResponse['status'] === Config::get('cash-in.CALLBACK_FAILED'))
        {
            $this->cashInResult = [
                'error' => true,
                'message' => 'Cash-in Failed.'
            ];
            $cashIn->status = Config::get('cash-in.FAILED');
            $cashIn->save();
            return true;
        }

        return false;
    }

    public function getResult()
    {
        return $this->cashInResult;
    }

    public function getChannel()
    {
        return $this->channel;
    }

    public function getCurrency()
    {
        return $this->currency;
    }


}
