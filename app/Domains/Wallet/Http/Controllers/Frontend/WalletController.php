<?php


namespace App\Domains\Wallet\Http\Controllers\Frontend;

use App\Domains\Auth\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\WithdrawalRequest;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        return view('frontend.pages.wallet.index')
            ->with('user', $user);
    }

    public function withdraw(WithdrawalRequest $request)
    {
        /** @var User $user */
        $user = $request->user();

        try {
            $user->withdrawFloat($request->get('amount'), null, false);

            return redirect()->back()->withFlashSuccess("Withdrawal request of ". number_format($request->get('amount')). " submitted.");
        } catch (\Exception $e) {
            return redirect()->back()->withErrors("Insufficient funds. Your current balance is ". number_format($user->balance));
        }
    }

    public function deposit()
    {
    }
}
