<?php

namespace App\Domains\Wallet\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CryptoWithdrawalWallet extends Model
{
    use HasFactory;
    protected $fillable = [
        'tracking_id',
        'wallet_address',
        'created_at',
        'updated_at'
    ];
    public function cashIn()
    {
        return $this->belongsTo(CashIn::class, 'tracking_id', 'tracking_id');
    }
}
