<?php


namespace App\Domains\Wallet\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Http\Requests\WithdrawalRequest;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;

class WalletController extends \App\Http\Controllers\Controller
{
    public function index()
    {
        $query = Transaction::query();

        if (auth()->user()->hasRole('Administrator')) {
            $query = Transaction::query();
        }
        $pendingTransactions = $query->where('confirmed', false)->get();

        return view('backend.wallet.index')->with('pendingTransactions', $pendingTransactions);
    }

    public function confirm(Transaction $transaction)
    {
        $user = $transaction->payable;
        if ($user->hasRole('Master Agent')) {
            /** @var User $hubAdmin */
            $hubAdmin = auth()->user();
            $hub = Hub::where('admin_id', $hubAdmin->id)->first();
            $hub->withdrawFloat($transaction->amountFloat);
            $user->getWallet('income-wallet')->confirm($transaction);
        } else {
            $user->confirm($transaction);
        }

        return redirect()->back()->withFlashSuccess("Request confirmed");
    }


    public function myWallet(Request $request)
    {
        $user = $request->user();
        if (! $user->hasWallet('income-wallet')) {
            $user = $user->createWallet([
               'name' => 'Income Wallet',
               'slug' => 'income-wallet',
            ]);
        }

        if ($request->user()->hasRole('Virtual Hub')) {
            $hub = Hub::where('admin_id',  $request->user()->id)->first();
            if(!$hub->hasWallet('income-wallet')) {
                $hubWallet = $hub->createWallet([
                    'name' => 'Income Wallet',
                    'slug' => 'income-wallet',
                ]);
            } else {
                $hubWallet = $hub->getWallet('income-wallet');
            }
            return view('backend.wallet.hub-wallet')->with('hub', $hub)->with('hubWallet', $hubWallet);
        } elseif ($request->user()->hasRole('Master Agent')) {
            return view('backend.wallet.master-agent-wallet')->with('user',  $request->user());
        }
    }

    public function withdraw(WithdrawalRequest $request)
    {
        /** @var User $user */
        $user = $request->user()->getWallet('income-wallet');

        try {
            $user->withdrawFloat($request->get('amount'), null, false);

            return redirect()->back()->withFlashSuccess("Withdrawal request of ". number_format($request->get('amount')). " submitted.");
        } catch (\Exception $e) {
            return redirect()->back()->withErrors("Insufficient funds. Your current balance is ". number_format($user->balance));
        }
    }
}
