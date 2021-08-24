<?php


namespace App\Domains\Wallet\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Http\Service\WalletHolderFactory;
use App\Domains\Wallet\Models\Withdrawal;
use Bavix\Wallet\Models\Transaction;
use DB;
class WithdrawalController extends \App\Http\Controllers\Controller
{
    public function show(Withdrawal $withdrawal)
    {
        if(Auth()->user()->hasRole('Processor')) {
            $withdrawal->user->name = Hub::find($withdrawal->user_id)->get()->first()->name;
        }
        return view('backend.wallet.withdrawal.show')->with(compact('withdrawal'));
    }

    public function complete(Withdrawal $withdrawal, WalletHolderFactory $holderFactory)
    {
        try {
            DB::beginTransaction();
            $withdrawal->status = Withdrawal::COMPLETED;
            $withdrawal->save();
            $transaction = Transaction::find($withdrawal->meta['transactionId']);
            if(Auth()->user()->hasRole('Processor')) {
                $withdrawal->user = User::find(Hub::find($withdrawal->user_id)->get()->first()->admin_id);
            }
            $holder = $holderFactory->createWalletHolder($withdrawal->user);
            $holder->confirm($transaction);
            $reviewer = $holderFactory->createWalletHolder($withdrawal->reviewer);
            $reviewer->deposit($withdrawal->amountFloat, $transaction, $withdrawal->user->id);
            DB::commit();
            return redirect()->back()->withFlashSuccess("Withdrawal request of ". number_format($withdrawal->amountFloat, 2). " was approved.");
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
}
