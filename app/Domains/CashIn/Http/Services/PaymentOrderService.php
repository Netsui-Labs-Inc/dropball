<?php

namespace App\Domains\CashIn\Http\Services;

use App\Domains\CashIn\Interfaces\CashInChannelInterface;
use Illuminate\Support\Facades\Config;
use Ixudra\Curl\Facades\Curl;

class PaymentOrderService
{
    private $channel;
    private $fields;
    private $response;
    private $result;
    private $address;

    public function __construct(CashInChannelInterface $channel)
    {
        $this->channel = $channel;
    }

    public function setChannel($channel)
    {
        $this->channel = $this->paymentChannelFactory->createPaymentChannel($channel);
        return $this;

    }

    public function setField($amount, $address = null, $extraFields = null)
    {
        $this->fields = [
            'amount' => $amount,
            'address' => $address,
            'extra'   => $extraFields
        ];

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
                        $this->channel->getPaymentOrder($this->fields)
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
        $this->result = $this->channel->storePaymentOrderResponse(
            $this->response, $this->fields['amount']
        )
        ->returnPaymentOrderResponse();

        return $this;
    }

    public function getResult()
    {
        if($this->response['code'] === Config::get('cash-in.PAYMENT_ORDER_SUCCESS'))
        {
           $this->storeResponse();
           return $this->result;
        }

        return [
            'status' => 0
        ];
    }

}
