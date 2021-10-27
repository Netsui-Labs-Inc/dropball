<?php

namespace App\Domains\CashIn\Interfaces;

use App\Domains\CashIn\Models\CashIn;


interface CashInChannelInterface
{
    public function setCurrency($currency);
    public function storePaymentOrderResponse($response, $amount) : CashInChannelInterface;
    public function getPaymentOrder(array $fields) : array;
    public function returnPaymentOrderResponse() : array;
    public function saveCashInResponse(CashIn $cashIn, $cashInResponse) : CashInChannelInterface;
    public function checkResponseData(CashIn $cashIn, $cashInResponse);
    public function getResult();
    public function getChannel();
    public function getCurrency();
}
