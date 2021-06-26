<?php


namespace App\Domains\Wallet\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Models\Withdrawal;
use App\Exceptions\GeneralException;
use App\Http\Requests\WithdrawalRequest;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use DB;
class WithdrawalController extends \App\Http\Controllers\Controller
{
    public function index()
    {

    }

    public function show(Withdrawal $withdrawal)
    {
        return view('backend.wallet.withdrawal.show')->with(compact('withdrawal'));
    }

    public function complete(Withdrawal $withdrawal)
    {
        try {
            DB::beginTransaction();
            $withdrawal->status = Withdrawal::COMPLETED;
            $withdrawal->save();
            $transaction = Transaction::find($withdrawal->meta['transactionId']);
            $withdrawal->user->confirm($transaction);
            $withdrawal->reviewer->withdrawFloat($withdrawal->amountFloat, ['withdrawal' => true, 'user' => $withdrawal->user->id]);
            DB::commit();
            return redirect()->back()->withFlashSuccess("Withdrawal request of ". number_format($withdrawal->amountFloat, 2). " was approved.");
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
}
