<?php
namespace App\Domains\Bet\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class BetCommission
 *
 * @package App\Domains\Bet\Models
 * @property string $type
 * @property float $amount
 * @property int $bet_id
 * @property float $rate
 * @property string $commission_type
 * @property int $commissions_id
 * @property Carbon $created_at
 * @property int $id
 * @property int $commission_id
 * @property mixed|null $meta
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Domains\Bet\Models\Bet $bet
 * @property-read Model|\Eloquent $commission
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission query()
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission whereBetId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission whereCommissionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission whereCommissionType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission whereMeta($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission whereRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetCommission whereUpdatedAt($value)
 * @mixin \Eloquent
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
