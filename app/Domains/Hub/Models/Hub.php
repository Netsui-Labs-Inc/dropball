<?php

namespace App\Domains\Hub\Models;

use Bavix\Wallet\Interfaces\WalletFloat;
use Bavix\Wallet\Traits\HasWalletFloat;
use Bavix\Wallet\Traits\HasWallets;
use Illuminate\Database\Eloquent\Model;

class Hub extends Model implements WalletFloat
{
    use HasWallets;
    use HasWalletFloat;

}
