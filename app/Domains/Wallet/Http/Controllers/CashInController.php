<?php


namespace App\Domains\Wallet\Http\Controllers;

use App\Domains\Wallet\Http\Service\CashInService;
use App\Domains\Wallet\Http\Service\PaymentOrderService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CashInController extends Controller
{
    private $cashInService;
    private $paymentOrderService;

    public function index()
    {
        return  view('frontend.pages.cash-in.index');
                // ->with('user', $this->holder);
    }

    public function __construct(CashInService $cashInService, PaymentOrderService $paymentOrderService)
    {
        $this->cashInService = $cashInService;
        $this->paymentOrderService = $paymentOrderService;
    }

    public function cashIn($channel, $amount)
    {
        $this->paymentOrderService->setChannel($channel)
            ->setAmount($amount)
            ->setCurrency()
            ->sendRequest()
            ->getResult();
    }

    public function getCashIn(Request $request)
    {
        dd($this->cashInService->saveCashIn($request->all()));
    }
}
