<?php

namespace App\Domains\Wallet\Http\Service;
use Bavix\Wallet\Models\Transaction;
use App\Domains\Wallet\Interfaces\WalletTransactionInterface;
use App\Domains\Wallet\Models\AmendedTransaction;
use App\Domains\Wallet\Models\Withdrawal;
use DB;

class TransactionAmendmentService
{
    private $transaction;
    private $amount;
    private $walletHolder;
    private $notes;
    private $metaNotes;
    private $approver;

    public function setWalletHolder(WalletTransactionInterface $walletHolder)
    {
        $this->approver = auth()->user()->id;
        $this->walletHolder = $walletHolder;
        return $this;
    }

    private function addTwoDigitsToAmount($amount)
    {
        return $amount * 100;
    }

    private function removeTwoDigitsFromAmount($amount)
    {
        return $amount / 100;
    }

    public function amend(Transaction $transaction, $amount, $notes)
    {
        $amount = $this->addTwoDigitsToAmount($amount);
        $this->transaction = $transaction;
        $this->notes = $notes;

        $this->metaNotes = '<br />Transaction Amendment from <br />Transaction id : <a href="/admin/wallet-transactions/' . $this->transaction->id
        . '">'.$this->transaction->uuid .' </a> <br />Dated ' . $this->transaction->created_at;

        if ($transaction->amount > $amount)
        {
            $this->amount = $this->removeTwoDigitsFromAmount($transaction->amount - $amount);
            return $this->withdraw();
        }

        $this->amount = $this->removeTwoDigitsFromAmount($amount - $transaction->amount);
        return $this->deposit();
    }

    private function withdraw()
    {

        try {
            DB::beginTransaction();
            $withdrawals = [
                'amount' => $this->amount,
                'channel' => 'N/A',
                'account_number' => 'N/A',
                'account_name' => 'N/A',
                'details' => $this->metaNotes
            ];

            $meta =[
                'withdrawal' => true,
                'notes' => $this->metaNotes,
                'approved_by' => $this->approver
            ];

            $result = $this->walletHolder->setWalletType(['name' => 'Default Wallet', 'slug' => 'default'])
                ->withdraw($withdrawals, $this->amount, $meta);

            $withdrawal = $result['withdrawal'];
            $withdrawal->status = Withdrawal::COMPLETED;
            $withdrawal->save();

            $this->walletHolder->confirm($result['transaction']);
            $this->changeTypeToAmendment($result['transaction']);

            AmendedTransaction::create([
                'original_transaction_id'  => $this->transaction->id,
                'amendment_transaction_id' => $result['transaction']->id,
                'user'                     => $this->transaction->payable_id,
                'notes'                    => $this->notes,
                'amended_by'               => $this->approver

            ]);

            $result['transaction']->confirmed = 0;
            $result['transaction']->save();

            DB::commit();
            return [
                'error' => false,
                'message' => 'Transaction successfully adjusted.'
            ];

        } catch (\Exception $e) {
            dd($e);
            DB::rollBack();
            return [
                'error' => true,
                'message' => 'Something went wrong.'
            ];
        }

    }

    private function changeTypeToAmendment($transaction)
    {
        $transaction->type = 'amendment';
        $transaction->save();
    }

    private function deposit()
    {
        try {
            DB::beginTransaction();
            $meta = [
                'notes' => $this->metaNotes,
                'credited_by' => $this->approver
            ];

            $amendedTransaction = $this->walletHolder->setWalletType(['name' => 'Default Wallet', 'slug' => 'default'])
                ->deposit($this->amount, $meta);


            $this->changeTypeToAmendment($amendedTransaction);

            AmendedTransaction::create([
                'original_transaction_id'  => $this->transaction->id,
                'amendment_transaction_id' => $amendedTransaction->id,
                'notes'                    => $this->notes,
                'user'                     => $this->transaction->payable_id,
                'amended_by'               => $this->approver
            ]);

            $amendedTransaction->confirmed = 0;
            $amendedTransaction->save();

            DB::commit();
            return [
                'error' => false,
                'message' => 'Transaction successfully adjusted.'
            ];

        } catch (\Exception $e) {
            dd($e);
            DB::rollBack();
            return [
                'error' => true,
                'message' => 'Something went wrong.'
            ];
        }
    }

}
