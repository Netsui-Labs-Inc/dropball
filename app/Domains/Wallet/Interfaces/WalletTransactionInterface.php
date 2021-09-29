<?php

namespace App\Domains\Wallet\Interfaces;

interface WalletTransactionInterface
{
    public function getWallet() : array;
    public function setWalletType($walletType) : WalletTransactionInterface;
}
