<?php

namespace App\Domains\CashIn\Http\Services\Actions;

use App\Domains\CashIn\Interfaces\CashInChannelInterface;
use App\Domains\CashIn\Models\CashIn;
use App\Domains\CashIn\Models\CryptoWithdrawalWallet;
use Arr;
use Config;

class Crypto implements CashInChannelInterface{
    private $currency;
    private $cashInResult;
    private $url;
    private $channel = 'crypto-payment';

    public function setCurrency($currency)
    {
        if ($currency) {
            $this->currency = $currency;
            return;
        }

        $this->currency = 'BTC';
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

    public function getPaymentOrder(array $fields) : array
    {
        return [
            'currency' => $this->currency,
            'amount'   => $fields['amount']
        ];
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

        CryptoWithdrawalWallet::create([
            'tracking_id'    => $cashInResponse['tracking_id'],
            'wallet_address' => $cashInResponse['wallet_address'],
            'created_at'     => $cashInResponse['created']
        ]);

        $this->cashInResult = [
            'cash-in' => $cashIn,
            'error'   => false,
            'message' => 'Payment Successful.'
        ];
        return $this;
    }

    public function checkResponseData(CashIn $cashIn, $cashInResponse)
    {
        if (!Arr::exists($cashInResponse, 'wallet_address'))
        {
            $this->cashInResult = [
                'cash-in' => $cashIn,
                'error'   => true,
                'message' => 'Field did not match.'
            ];
            return true;
        }

        if ($cashInResponse['status'] === Config::get('cash-in.CALLBACK_FAILED'))
        {
            $this->cashInResult = [
                'cash-in' => $cashIn,
                'error'   => true,
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
