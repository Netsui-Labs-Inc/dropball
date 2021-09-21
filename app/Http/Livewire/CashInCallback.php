<?php

namespace App\Http\Livewire;

use App\Domains\Wallet\Models\CallbackBroadcastRequest;
use Livewire\Component;

class CashInCallback extends Component
{

    public function getListeners()
    {
        return [
            "echo-private:event.update_cash_in_status,UpdateCashInStatus" => 'updateCashInStatus',
        ];

    }

    public function updateCashInStatus()
    {
        $self = $this;
        $callbackBroadcastRequest = CallbackBroadcastRequest::where('status', 0)->get();
        $callbackBroadcastRequest->map(function ($callBackRequest, $key) use ($self) {
            $self->emit('cashInCallbackRequest', [
                'id' => $callBackRequest->cash_in_id
            ]);
            $callBackRequest->status = 1;
            $callBackRequest->save();
        });

    }

    public function render()
    {
        return view('livewire.cash-in-callback');
    }
}
