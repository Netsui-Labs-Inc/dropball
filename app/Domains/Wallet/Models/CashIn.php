<?php

namespace App\Domains\Wallet\Models;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CashIn extends Model
{
    use HasFactory;
    protected $fillable = [
        'tracking_id',
        'user_id',
        'url',
        'status',
        'amount',
        'currency',
        'channel',
        'created_at',
        'updated_at'
    ];

    public function cryptoWithdrawalWallet()
    {
        return $this->hasOne(CryptoWithdrawalWallet::class, 'tracking_id', 'tracking_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
