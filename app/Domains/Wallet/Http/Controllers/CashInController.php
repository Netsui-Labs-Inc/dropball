<?php


namespace App\Domains\Wallet\Http\Controllers;

use App\Domains\Wallet\Http\Service\CashInService;
use App\Domains\Wallet\Http\Service\PaymentOrderService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Response;

class CashInController extends Controller
{
    private $cashInService;
    private $paymentOrderService;

    public function index()
    {
        return  view('frontend.pages.cash-in.index');
    }

    public function __construct(CashInService $cashInService, PaymentOrderService $paymentOrderService)
    {
        $this->cashInService = $cashInService;
        $this->paymentOrderService = $paymentOrderService;
    }

    public function cashInPage()
    {
        return view('backend.wallet.cash-in-page');
    }

    public function cashIn(Request $request)
    {

        $amount = $request->get('amount');
        $channel = $request->get('channel');

        $result = $this->paymentOrderService->setChannel($channel)
            ->setAmount($amount)
            ->setCurrency()
            ->sendRequest()
            ->getResult();

        return Response::json(array(
                'status' => $result['status'],
                'url'    => $result['url']
        ));
    }

    public function getCashIn(Request $request)
    {
        $this->cashInService->saveCashIn($request->all());
    }

    public function refresh(Request $request)
    {
        return $this->cashInService->refreshCashIn($request->get('cash-in-id'));
    }

    public fuction getWalletAddress()
    {
        
    }

}
