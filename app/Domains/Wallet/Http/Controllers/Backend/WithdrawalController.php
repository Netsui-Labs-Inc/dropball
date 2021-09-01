<?php


namespace App\Domains\Wallet\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Http\Service\WalletHolderFactory;
use App\Domains\Wallet\Models\ApprovedWithdrawalRequest;
use App\Domains\Wallet\Models\Withdrawal;
use App\Http\Requests\WithdrawalRequestApproval;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use DB;
use function Clue\StreamFilter\fun;

class WithdrawalController extends \App\Http\Controllers\Controller
{
    private $transactionMeta;
    private $walletHolder;
    private $transaction;
    private $reviewer;
    private $withdrawalAmount;
    public function show(Withdrawal $withdrawal)
    {
        if(Auth()->user()->hasRole('Processor')) {
            $withdrawal->user->name = Hub::find($withdrawal->user_id)->get()->first()->name;
        }
        return view('backend.wallet.withdrawal.show')->with(compact('withdrawal'));
    }

    public function complete(WithdrawalRequestApproval $withdrawalRequestApproval, WalletHolderFactory $holderFactory)
    {
        $withdrawalRequestDeposit = $withdrawalRequestApproval->validated();
        try {
            DB::beginTransaction();
            $this->saveWithdrawalRequestStatus($withdrawalRequestDeposit['withdrawal_id'])
                ->updateTransaction($holderFactory)
                ->depositToWalletHolder($holderFactory)
                ->saveWithdrawalRequetApproval($withdrawalRequestApproval);
            DB::commit();
            return redirect()->back()->withFlashSuccess("Withdrawal request of ". number_format($this->withdrawalAmount, 2). " was approved.");
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->withErrors($e->getMessage());
        }
    }

    private function saveWithdrawalRequetApproval($withdrawalRequestApproval)
    {
        $withdrawalRequestApprovalData = [
            'transaction_id'   => $this->transaction->id,
            'approved_by'      => Auth()->user()->id,
            'reference_no'     => $withdrawalRequestApproval['reference_number'],
            'channel'          => $withdrawalRequestApproval['channel'],
            'date_of_transfer' => Carbon::createFromFormat('m/d/Y', $withdrawalRequestApproval['date_of_transfer'])
                ->format('Y-m-d')
        ];
        ApprovedWithdrawalRequest::create($withdrawalRequestApprovalData);
    }

    private function saveWithdrawalRequestStatus($withdrawalId)
    {
        $withdrawal = Withdrawal::find($withdrawalId);
        $withdrawal->status = Withdrawal::COMPLETED;
        $withdrawal->save();
        $this->withdrawalAmount = $withdrawal->amountFloat;
        $this->transactionMeta = $withdrawal->meta['transactionId'];
        $this->walletHolder = ($this->selectBlacklistRoleForHubTransactions()) ?
            User::find(Hub::find($withdrawal->user_id)->get()->first()->admin_id) :
            $this->walletHolder = $withdrawal->user;
        $this->reviewer = $withdrawal->reviewer;
        return $this;
    }
    private function selectBlacklistRoleForHubTransactions()
    {
        if(Auth()->user()->hasRole('Player') ||
            Auth()->user()->hasRole('Master Agent') ||
            Auth()->user()->hasRole('Virtual Hub')
        ) {
            return false;
        }
        return true;
    }
    private function updateTransaction($holderFactory)
    {
        $transaction = Transaction::find($this->transactionMeta);
        $transaction->updated_at = Carbon::now()->toDateTimeString();
        $this->transaction = $transaction;
        $holder = $holderFactory->createWalletHolder($this->walletHolder);
        $holder->confirm($transaction);
        return $this;
    }

    private function depositToWalletHolder($holderFactory)
    {
        $reviewer = $holderFactory->createWalletHolder($this->reviewer);
        $reviewer->deposit($this->withdrawalAmount, $this->transaction, $this->walletHolder->id);

        return $this;
    }
}

