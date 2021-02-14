<?php

namespace App\Models;

use App\Models\Traits\HasBetCommission;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Interfaces\WalletFloat;
use Bavix\Wallet\Traits\HasWalletFloat;
use Illuminate\Database\Eloquent\Model;

class Company extends Model implements Wallet, WalletFloat
{
    use HasWalletFloat;
    use HasBetCommission;

    protected $fillable = ['name'];
}
