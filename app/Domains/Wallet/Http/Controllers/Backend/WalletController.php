<?php


namespace App\Domains\Wallet\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Http\Requests\WithdrawalRequest;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class WalletController extends \App\Http\Controllers\Controller
{
    public function index()
    {
        $query = Transaction::query();

        if (auth()->user()->hasRole('Administrator')) {
            $query = Transaction::query();
        }
        if (auth()->user()->hasRole('Master Agent')) {
            $pendingTransactions = Transaction::query()->where("payable_type", User::class)->where('confirmed', false)
                ->whereIn('payable_id', auth()->user()->referrals->pluck('id'));
        } else {
            $pendingTransactions = $query->where('confirmed', false)->get();
        }

        return view('backend.wallet.index')->with('pendingTransactions', $pendingTransactions);
    }

    public function show(Transaction $transaction)
    {
        return view('backend.wallet.show')
            ->with('transaction', $transaction);
    }

    public function confirm(Transaction $transaction)
    {
        /** @var User $user */
        $user = auth()->user();
        $payable = $transaction->payable;

        $holder = $user;

        if ($user->hasRole('Virtual Hub')) {
            $hub = Hub::where('admin_id', $user->id)->first();
            $holder = $hub;
        }

        if ($this->checkSufficientBalance($holder, abs($transaction->amountFloat))){
            return  redirect()->back()->withErrors("Insufficient Balance. Your Balance is $holder->balanceFloat");
        }

        if ($payable->hasRole('Player')) {
            $payable->confirm($transaction);
        } else {
            $payable->getWallet('income-wallet')->confirm($transaction);
        }

        $holder->withdrawFloat(abs($transaction->amountFloat), ['withdrawal' => true, 'from_transaction' => $transaction->uuid, 'payable' => $payable->id]);

        return redirect()->back()->withFlashSuccess("Request confirmed");
    }

    public function checkSufficientBalance($holder, $requestedAmount)
    {
        if ($holder->balanceFloat >= $requestedAmount) {
            return false;
        }
        return true;
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
            if ($hub === null) {
                return redirect()->back()->withErrors("Wallet is unavailable. please contact the account administrator");
            }
            if (! $hub->hasWallet('income-wallet')) {
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
        $user = $request->user();
        if (! Hash::check($request->get('password'), $user->password)) {
            return redirect()->back()->withErrors("Invalid Password");
        }

        try {
            $meta = [
                'channel' => $request->get('channel'),
                'details' => $request->get('details'),
            ];
            if ($request->user()->hasRole('Virtual Hub')) {
                $hub = Hub::where('admin_id',  $request->user()->id)->first();
                if (! $hub->hasWallet('income-wallet')) {
                    $hubWallet = $hub->createWallet([
                        'name' => 'Income Wallet',
                        'slug' => 'income-wallet',
                    ]);
                } else {
                    $hubWallet = $hub->getWallet('income-wallet');
                }
                $hubWallet->withdrawFloat($request->get('amount'), $meta, false);
            } else {
                $user->getWallet('income-wallet')
                    ->withdrawFloat($request->get('amount'), $meta, false);
            }

            return redirect()->back()->withFlashSuccess("Withdrawal request of ". number_format($request->get('amount')). " submitted.");
        } catch (\Exception $e) {
            return redirect()->back()->withErrors("Insufficient funds. Your current balance is ". number_format($user->getWallet('income-wallet')->balanceFloat));
        }
    }
}
