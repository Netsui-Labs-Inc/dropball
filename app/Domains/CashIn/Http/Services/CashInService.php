<?php

namespace App\Domains\CashIn\Http\Services;

use App\Domains\Auth\Models\User;
use App\Domains\CashIn\Models\CallbackBroadcastRequest;
use App\Domains\CashIn\Models\CashIn;
use App\Events\UpdateCashInStatus;
use App\Domains\CashIn\Interfaces\CashInChannelInterface;

class CashInService
{
    private $channel;

    public function __construct(CashInChannelInterface $channel)
    {
        $this->channel = $channel;
    }

    public function saveCashIn(CashIn $cashIn, $cashInCallbackResponse)
    {

        if($cashIn->status === 1) {
            return [
                'error' => true,
                'message' => 'Already processed.'
            ];
        }

        CallbackBroadcastRequest::where('status', 1)->delete();

        $result = $this->channel
            ->saveCashInResponse($cashIn, $cashInCallbackResponse)
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

    private function saveCallbackBroadcast($result)
    {
        CallbackBroadcastRequest::create([
            'user_id' => $result['cash-in']->user->id,
            'cash_in_id' => $result['cash-in']->id
        ]);

    }

}
