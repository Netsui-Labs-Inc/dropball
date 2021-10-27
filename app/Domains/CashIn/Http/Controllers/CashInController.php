<?php


namespace App\Domains\CashIn\Http\Controllers;

use App\Domains\CashIn\Http\Services\CashInService;
use App\Domains\CashIn\Models\CashIn;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Response;
use App\Domains\Factories\ClassFactory;
use App\Domains\CashIn\Models\CryptoWithdrawalWallet;
use App\Domains\Announcement\Models\Announcement;

class CashInController extends Controller
{
    private $cashInService;
    private $cashInFactory;
    private $status = ['Pending', 'Success', 'Failed'];

    public function __construct(ClassFactory $cashInFactory)
    {
        $this->cashInFactory = $cashInFactory;
    }

    public function index()
    {
        return  view('frontend.pages.cash-in.index');
    }

    public function cashInPage()
    {
        return view('cashin.cash-in-page');
    }

    public function getCashIn(Request $request)
    {
        Announcement::create([
            'message' => json_encode($request->all())
        ]);

        $cashIn = CashIn::where(
            'tracking_id', $request->get('tracking_id'))->get()->first();

        if(!$cashIn) {
            return [
                 'error' => true,
                 'message' => 'Tracking Id did not match.'
            ];
        }

        $this->cashInService = new CashInService(
            $this->cashInFactory->getClass($cashIn->channel)
        );

        $this->cashInService->saveCashIn($cashIn, $request->all());
    }

    public function refresh(Request $request)
    {
         return $this->status[
             CashIn::where('id', $request->get('cash-in-id'))
                ->get()
                ->first()
                ->status
         ];
    }

    public function getWalletAddress()
    {
        $walletAddress = CryptoWithdrawalWallet::where('user_id', auth()->user()->id)
            ->where('type', 1)->get()->first();

        return Response::json(array(
            'wallet_address' => $walletAddress['wallet_address'],
            'title'          => $walletAddress['title']
        ));

    }

}
