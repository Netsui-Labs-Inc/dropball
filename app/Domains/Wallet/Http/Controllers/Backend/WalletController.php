<?php


namespace App\Domains\Wallet\Http\Controllers\Backend;

use Bavix\Wallet\Models\Transaction;

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
        $user->confirm($transaction);

        return redirect()->back()->withFlashSuccess("Request confirmed");
    }
}
