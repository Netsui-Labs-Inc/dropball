<?php


namespace App\Domains\CashIn\Http\Controllers;

use App\Domains\Factories\ClassFactory;
use App\Domains\CashIn\Http\Services\PaymentOrderService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Response;

class PaymentOrderController extends Controller
{
    private $paymentChannelFactory;

    public function __construct(ClassFactory $paymentChannelFactory)
    {
        $this->paymentChannelFactory = $paymentChannelFactory;
    }

    public function requestPaymentOrder(Request $request)
    {

        $amount = $request->get('amount');
        $channel = $request->get('channel');
        $address = $request->get('wallet_address');

        $paymentOrderService = new PaymentOrderService(
            $this->paymentChannelFactory->getClass($channel)
        );

        $extraFields = [
            'is_default_wallet' => $request->get('set_default_wallet'),
            'wallet_title' =>  $request->get('wallet_title')
        ];

        $result = $paymentOrderService->setField($amount, $address, $extraFields)
            ->setCurrency()
            ->sendRequest()
            ->getResult();

        return Response::json(array(
                'status' => $result['status'],
                'url'    => $result['url']
        ));
    }
}
