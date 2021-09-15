<?php


namespace App\Domains\Wallet\Http\Controllers;

use App\Domains\Wallet\Http\Service\CashInService;
use App\Http\Controllers\Controller;

class CashInController extends Controller
{
    private $cashInService;

    public function __construct(CashInService $cashInService)
    {
        $this->cashInService = $cashInService;
    }

    public function cashIn($channel, $amount)
    {
        $this->cashInService->setChannel($channel)
            ->setAmount($amount)
            ->setCurrency()
            ->sendRequest()
            ->result();
    }


}
