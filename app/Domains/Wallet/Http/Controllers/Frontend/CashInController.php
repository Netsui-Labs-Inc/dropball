<?php


namespace App\Domains\Wallet\Http\Controllers\Frontend;

use App\Domains\Wallet\Http\Service\Buy2PlayApiRequests;
use App\Domains\Wallet\Http\Service\WalletHolderFactory;
use App\Http\Controllers\Controller;

class CashInController extends Controller
{
    private $cashInService;
    public function __construct(Buy2PlayApiRequests $cashInService)
    {
        $this->cashInService = $cashInService;
    }

}
