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
        if ($transaction->payable_type == User::class) {
            if ($payable->hasRole('Player')) {
                $payable->confirm($transaction);
            } else {
                $payable->getWallet('income-wallet')->confirm($transaction);
            }
        }

        if ($transaction->payable_type == Hub::class) {
            $payable->getWallet('income-wallet')->confirm($transaction);
        }

        if ($user->hasRole('Master Agent')) {
            $user->withdrawFloat($transaction->amountFloat * -1, ['withdrawal' => true, 'from_transaction' => $transaction->uuid]);
        } elseif ($user->hasRole('Virtual Hub')) {
            $hub = Hub::where('admin_id', $user->id)->first();
            $hub->withdrawFloat($transaction->amountFloat * -1, ['withdrawal' => true, 'from_transaction' => $transaction->uuid]);
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
            return redirect()->back()->withErrors("Insufficient funds. Your current balance is ". number_format($user->balance));
        }
    }
}
