<?php


namespace App\Domains\Wallet\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Http\Service\WalletHolderFactory;
use App\Domains\Wallet\Models\ApprovedWithdrawalRequest;
use App\Http\Requests\WithdrawalRequest;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class WalletController extends \App\Http\Controllers\Controller
{
    private $holder;
    private $holderFactory;
    public function __construct(WalletHolderFactory $holderFactory)
    {
        $this->holderFactory = $holderFactory;
    }

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
        $approvedWithdrawalRequest = ApprovedWithdrawalRequest::where('transaction_id', $transaction->id)
                                                        ->get()->first();
        return view('backend.wallet.show')
            ->with('transaction', $transaction)
            ->with('approvedWithdrawal', $approvedWithdrawalRequest);
    }

    public function myWallet(Request $request)
    {
        $this->holder = $this->holderFactory->createWalletHolder($request->user());
        return ($this->holder->getWallet()['error'] === null) ? $this->holder->getWallet() :
             redirect()->back()->withErrors($this->holder->getWallet()['error']);
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
