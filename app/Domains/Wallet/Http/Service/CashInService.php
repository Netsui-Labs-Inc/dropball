<?php

namespace App\Domains\Wallet\Http\Service;

use App\Domains\Wallet\Http\Service\Actions\PaymentChannelFactory;
use App\Domains\Wallet\Models\CashIn;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Redirect;
use Ixudra\Curl\Facades\Curl;

class CashInService
{
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

        $channel = $this->paymentChannelFactory->createPaymentChannel($cashIn->channel);
        return $channel->saveCashInResponse($cashIn, $cashInCallbackResponse)
                            ->getResult();
    }
}
