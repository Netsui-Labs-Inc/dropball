<?php

namespace App\Domains\CashIn\Http\Services\Actions;

use App\Domains\CashIn\Interfaces\CashInChannelInterface;
use App\Domains\CashIn\Models\CashIn;
use App\Domains\CashIn\Models\CryptoWithdrawalWallet;
use Arr;
use Config;

class CryptoWithdrawal implements CashInChannelInterface{
    private $currency;
    private $cashInResult;
    private $channel = 'crypto-withdrawal';
    private $isDefaultWallet;
    private $cashIn;
    private $walletTitle;
    private $walletAddress;

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
        $this->cashIn = CashIn::create([
            'tracking_id' => $response['tracking_id'],
            'user_id'     => auth()->user()->id,
            'status'      => Config::get('cash-in.PENDING'),
            'amount'      => $amount,
            'currency'    => $this->currency,
            'channel'     => $this->channel
        ]);
        $this->walletAddress = $response['address'];
        return $this;
    }

    public function getPaymentOrder(array $fields) : array
    {

        $this->isDefaultWallet = $fields['extra']['is_default_wallet'];
        $this->walletTitle = $fields['extra']['wallet_title'];

        return [
            'address'  => $fields['address'],
            'currency' => $this->currency,
            'amount'   => $fields['amount']
        ];
    }

    public function returnPaymentOrderResponse() : array
    {
        $isPersonalWallet = 0;
        if($this->isDefaultWallet === 'true') {
            $currentWalletAddress = CryptoWithdrawalWallet::where('user_id', $this->cashIn->user_id)
                ->where('type', 1)->get()->first();
            $currentWalletAddress->type = 0;
            $currentWalletAddress->save();
            $isPersonalWallet = 1;
        }

        CryptoWithdrawalWallet::create([
            'user_id'         => $this->cashIn->user_id,
            'type'            => $isPersonalWallet,
            'title'           => $this->walletTitle,
            'tracking_id'     => $this->cashIn->tracking_id,
            'wallet_address' => $this->walletAddress
        ]);

        return [
            'status' => 1,
            'url'    => ''
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
        if (!Arr::exists($cashInResponse, 'wallet_address'))
        {
            $this->cashInResult = [
                'cash-in' => $cashIn,
                'error'   => true,
                'message' => 'Field did not match.'
            ];
            return true;
        }
        $walletAddress = $cashIn->cryptoWithdrawalWallet()->get()->first()->wallet_address;

        if($walletAddress !== $cashInResponse['wallet_address'])
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
