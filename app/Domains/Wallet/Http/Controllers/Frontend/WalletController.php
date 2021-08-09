<?php


namespace App\Domains\Wallet\Http\Controllers\Frontend;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Http\Service\WalletHolderFactory;
use App\Http\Controllers\Controller;
use App\Http\Requests\WithdrawalRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class WalletController extends Controller
{
    private $holder;
    private $holderFactory;

    public function __construct(WalletHolderFactory $holderFactory)
    {
        $this->holderFactory = $holderFactory;
    }

    public function index(Request $request)
    {
        $this->holder = $this->holderFactory->createWalletHolder($request->user());
        return $this->holder->getWallet();
    }

    public function withdraw(WithdrawalRequest $request)
    {
        /** @var User $user */
        $user = $request->user();
        if (! Hash::check($request->get('password'), $user->password)) {
            return redirect()->back()->withErrors("Invalid Password");
        }

        $this->holder = $this->holderFactory->createWalletHolder($request->user());
        $result = $this->holder->withdraw($request->all(), $request->get('amount'));
        if ($result['result']) {
            return redirect()->back()->withFlashSuccess("Withdrawal request of ". $result['amount']. " submitted.");
        }
        return redirect()->back()->withErrors("Insufficient funds. Your current balance is ". $result['amount']);
    }
}
