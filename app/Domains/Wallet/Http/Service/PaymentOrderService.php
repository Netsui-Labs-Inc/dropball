<?php

namespace App\Domains\Wallet\Http\Service;

use App\Domains\Wallet\Http\Service\Actions\PaymentChannelFactory;
use Illuminate\Support\Facades\Config;
use Ixudra\Curl\Facades\Curl;

class PaymentOrderService
{
    private $channel;
    private $amount;
    private $response;
    private $paymentChannelFactory;

    public function __construct(PaymentChannelFactory $paymentChannelFactory)
    {
        $this->paymentChannelFactory = $paymentChannelFactory;

    }

    public function setChannel($channel)
    {
        $this->channel = $this->paymentChannelFactory->createPaymentChannel($channel);
        return $this;

    }

    public function setAmount($amount)
    {
        $this->amount = $amount;
        return $this;

    }

    public function setCurrency($currency = null)
    {
        $this->channel->setCurrency($currency);
        return $this;

    }

    public function sendRequest()
    {
        $this->response = json_decode(
                Curl::to(Config::get('cash-in.CASH_IN_URL') . $this->channel->getChannel())
                ->withData(
                        $this->channel->getPaymentOrder($this->amount)
                    )
                ->withHeader('x-b2play-key: ' . Config::get('cash-in.B2PLAY_KEY'))
                ->withHeader('Content-Type: application/x-www-form-urlencoded')
                ->post(),
            true
        );

        return $this;
    }

    private function storeResponse()
    {
        $this->channel->storePaymentOrderResponse(
            $this->response, $this->amount
        );
        return $this;

    }

    private function redirectToPaymentChannel()
    {
        redirect()
            ->to($this->channel->geturl())
            ->send();

    }

    public function getResult()
    {
        if($this->response['code'] === Config::get('cash-in.PAYMENT_ORDER_SUCCESS'))
        {
            $this->storeResponse()
                ->redirectToPaymentChannel();
            return;
        }

        return [
            'error' => 'message'
        ];
    }

}
