<?php
namespace App\Domains\Bet\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class BetCommission
 * @package App\Domains\Bet\Models
 * @property string $type
 * @property float $amount
 * @property int $bet_id
 * @property float $rate
 * @property string $commission_type
 * @property int $commissions_id
 * @property Carbon $created_at
 */
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

    protected $dates = [
        'created_at'
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
