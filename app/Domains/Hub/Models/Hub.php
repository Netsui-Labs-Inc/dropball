<?php

namespace App\Domains\Hub\Models;

use App\Domains\Auth\Models\User;
use App\Models\Traits\HasBetCommission;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Interfaces\WalletFloat;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\HasWalletFloat;
use Bavix\Wallet\Traits\HasWallets;
use Database\Factories\HubFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hub extends Model implements WalletFloat, Wallet
{
    use HasWallets;
    use HasWalletFloat;
    use CanConfirm;
    use HasBetCommission;
    use HasFactory;

    protected $fillable = [
        'name', 'admin_id',
    ];

    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }

    protected static function newFactory()
    {
        return HubFactory::new();
    }
}
