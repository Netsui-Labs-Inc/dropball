<?php

namespace App\Domains\Wallet\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CashIn extends Model
{
    use HasFactory;
    protected $fillable = [
        'tracking_id',
        'status',
        'amount',
        'currency',
        'channel',
        'created_at',
        'updated_at'
    ];

    public function CryptoWithdrawalWallet()
    {
        return $this->hasOne(CryptoWithdrawalWallet::class, 'tracking_id', 'tracking_id');
    }
}
