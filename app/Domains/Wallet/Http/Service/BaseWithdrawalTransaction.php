<?php

namespace App\Domains\Wallet\Http\Service;

class BaseWithdrawalTransaction
{
    protected $holder;
    protected $reviewer;
    protected $walletType;

    protected function checkWallet()
    {
        if (!$this->holder->hasWallet($this->walletType['slug'])) {
            return $this->createWallet();
        }

        return $this->holder->getWallet($this->walletType['slug']);
    }

    protected function createWallet()
    {
        return $this->holder->createWallet($this->walletType);
    }

    protected function addTwoZerosToAmount($amount)
    {
        return $amount * 100;
    }

    public function withdraw($withdrawalRequestData, $amount)
    {
        try {
            $withdrawalTransaction = $this->checkWallet()->withdrawFloat($amount, ['withdrawal' => true], false);
            $this->holder->withdrawals()->create([
                'uuid' => $withdrawalTransaction->uuid,
                'amount' => $this->addTwoZerosToAmount($withdrawalRequestData['amount']),
                'reviewer_id' => $this->reviewer,
                'channel' => $withdrawalRequestData['channel'],
                'account_number' => $withdrawalRequestData['account_number'],
                'account_name' => $withdrawalRequestData['account_name'],
                'note' => $withdrawalRequestData['details'],
                'meta' => [
                    'transactionId' => $withdrawalTransaction->id
                ]
            ]);
            return ['result' => true, 'amount' => number_format($amount)];
        } catch (\Exception $e) {
            return ['result' => true, 'amount' => number_format($this->checkWallet()->balanceFloat)];
        }
    }

    public function getWalletType()
    {
        return $this->walletType;
    }
}
