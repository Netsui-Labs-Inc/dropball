<?php
namespace App\Domains\Bet\Models;

use Illuminate\Database\Eloquent\Model;

class BetCommission extends Model
{
    protected $table = 'bet_commissions';

    protected $fillable = [
        'type',
        'amount',
        'bet_id',
        'rate',
        'commission_type',
        'commission_id',
    ];

    public function bet()
    {
        return $this->belongsTo(Bet::class);
    }

    public function commission()
    {
        return $this->morphTo();
    }
}
