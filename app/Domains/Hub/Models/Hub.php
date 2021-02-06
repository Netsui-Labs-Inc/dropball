<?php

namespace App\Domains\Hub\Models;

use App\Domains\Auth\Models\User;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Interfaces\WalletFloat;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\HasWalletFloat;
use Bavix\Wallet\Traits\HasWallets;
use Illuminate\Database\Eloquent\Model;

class Hub extends Model implements WalletFloat, Wallet
{
    use HasWallets;
    use HasWalletFloat;
    use CanConfirm;

    protected $fillable = [
        'name', 'admin_id'
    ];

    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }
}
