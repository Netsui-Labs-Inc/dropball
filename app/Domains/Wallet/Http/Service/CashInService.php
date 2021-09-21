<?php

namespace App\Domains\Wallet\Http\Service;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Http\Service\Actions\PaymentChannelFactory;
use App\Domains\Wallet\Models\CallbackBroadcastRequest;
use App\Domains\Wallet\Models\CashIn;
use App\Events\UpdateCashInStatus;

class CashInService
{
    private $status = ['Pending', 'Success', 'Failed'];
    private $paymentChannelFactory;

    public function __construct(PaymentChannelFactory $paymentChannelFactory)
    {
        $this->paymentChannelFactory = $paymentChannelFactory;
    }

    public function saveCashIn($cashInCallbackResponse)
    {
        $cashIn = CashIn::where('tracking_id', $cashInCallbackResponse['tracking_id'])->get()->first();
        if(!$cashIn) {
            return [
                'error' => true,
                'message' => 'Tracking Id did not match.'
            ];
        }

        if($cashIn->status === 1) {
            return [
                'error' => true,
                'message' => 'Already processed.'
            ];
        }

        CallbackBroadcastRequest::where('status', 1)->delete();
        $channel = $this->paymentChannelFactory->createPaymentChannel($cashIn->channel);
        $result = $channel->saveCashInResponse($cashIn, $cashInCallbackResponse)
                            ->getResult();
        $this->addToCreditPoints($cashIn, $result);
        $this->saveCallbackBroadcast($result);
        event(new UpdateCashInStatus());
        return $result;
    }

    public function addToCreditPoints(CashIn $cashIn, $result)
    {
        if($result['error']) {
            return;
        }

        $source = [
            'from: ' => $cashIn->channel,
            'tracking_Id' => $cashIn->tracking_id
        ];
        $user = User::where('id', $cashIn->user_id)->get()->first();
        $user->depositFloat($cashIn->amount, $source);
    }

    public function refreshCashIn($cashInId)
    {
        return $this->status[
            CashIn::where('id', $cashInId)->get()->first()->status
        ];
    }

    private function saveCallbackBroadcast($result)
    {
        CallbackBroadcastRequest::create([
            'user_id' => $result['cash-in']->user->id,
            'cash_in_id' => $result['cash-in']->id
        ]);

    }
}
