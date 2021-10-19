<?php

namespace App\Domains\Wallet\Models;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Models\Traits\Scope\WithdrawalScope;
use App\Models\Traits\Uuid;
use Bavix\Wallet\Interfaces\Mathable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Withdrawal extends Model
{
    use Uuid,
        WithdrawalScope,
        HasFactory;

    const PENDING = 'pending';
    const CANCELLED = 'cancelled';
    const COMPLETED = 'completed';

    protected $fillable = [
        'amount',
        'user_id',
        'reviewer_id',
        'notes',
        'account_number',
        'account_name',
        'fee',
        'meta',
        'channel',
    ];

    protected $casts = [
        'meta' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewer_id');
    }

    /**
     * @return int|float
     */
    public function getAmountFloatAttribute()
    {
        return app(Mathable::class)->div($this->amount, 100);
    }
}
