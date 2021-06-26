<?php


namespace App\Domains\Wallet\Http\Controllers\Frontend;

use App\Domains\Auth\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\WithdrawalRequest;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use DB;

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
            DB::beginTransaction();
            $withdrawalTransaction = $user->withdrawFloat($request->get('amount'), ['withdrawal' => true], false);
            $withdrawal = $user->withdrawals()->create([
                'uuid' => $withdrawalTransaction->uuid,
                'amount' => $request->get('amount') * 100,
                'reviewer_id' => $user->referred_by,
                'channel' => $request->get('channel'),
                'account_number' => $request->get('account_number'),
                'note' => $request->get('note'),
                'meta' => [
                    'transactionId' => $withdrawalTransaction->id
                ]
            ]);
            $user->masterAgent->depositFloat($request->get('amount'), [
                'withdrawal' => true,
                'user' => $user->name,
                'transaction' => $withdrawal->uuid,
            ]);
            DB::commit();

            return redirect()->back()->withFlashSuccess("Withdrawal request of ". number_format($request->get('amount')). " submitted.");
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->withErrors("Insufficient funds. Your current balance is ". number_format($user->balanceFloat). $e->getMessage());
        }
    }

    public function deposit()
    {
    }
}
