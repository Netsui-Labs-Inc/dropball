<?php

namespace App\Domains\BettingRound\Models;

use App\Domains\Bet\Models\Bet;
use App\Domains\Bet\Models\BetOption;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingEvent\Models\Jackpot;
use App\Models\Traits\Uuid;
use Database\Factories\BettingRoundFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Models\Activity;

/**
 * Class BettingRound
 */
class BettingRound extends Model
{
    use SoftDeletes,
        HasFactory,
        Uuid;

    protected $table = 'betting_rounds';

    protected $fillable = [
        'uuid',
        'queue',
        'betting_event_id',
        'result',
        'status',
        'is_betting_open',
        'pool_money',
        'meta',
        'note',
        'payouts',
        'jackpot_id',
    ];

    protected $casts = [
        'meta' => 'array',
        'payouts' => 'array',
    ];

    public function bettingEvent()
    {
        return $this->belongsTo(BettingEvent::class, 'betting_event_id');
    }

    public function jackpot()
    {
        return $this->belongsTo(Jackpot::class);
    }

    public function bets()
    {
        return $this->hasMany(Bet::class);
    }

    public function statusLabel($additionalClass = null)
    {
        if (! $this->status) {
            return 'N/A';
        }
        switch ($this->status) {
            case 'upcoming':
                $class = 'badge-info';
                break;
            case 'ongoing':
                $class = 'badge-success';

                break;
            case 'ended':
                $class = 'badge-danger';

                break;
            case 'cancelled':
                $class = 'badge-warning';

                break;
            default:
                $class = 'badge-info';

                break;
        }

        return "<span class=\"badge $class $additionalClass\">".strtoupper(str_ireplace("_", " ", $this->status))."</span>";
    }

    public function resultLabel($additionalClass = null)
    {
        if (! $this->betOption) {
            return 'N/A';
        }

        $color = $this->betOption->color == '#FFFFFF' ? '#8898aa' : '#FFFFFF';

        return "<span class=\"badge\" style=\"background-color: {$this->betOption->color}; color: {$color} \">".strtoupper($this->betOption->name)."</span>";
    }

    public function bettingOpenLabel()
    {
        $class = $this->is_betting_open ? 'badge-success' : 'badge-danger';
        $text = $this->is_betting_open ? 'OPEN' : 'CLOSED';

        return "<span class=\"badge $class\">".$text."</span>";
    }

    public function totalBetType($type)
    {
        return $this->bets()->betType($type)->sum('bet_amount');
    }

    public function totalBetTypeByUser($type, $userId)
    {
        return $this->bets()->where('user_id', $userId)->betType($type)->sum('bet_amount');
    }

    public function userBet($userId)
    {
        return $this->bets()->where('user_id', $userId)->first();
    }

    public function userBets($userId)
    {
        return $this->bets()->where('user_id', $userId);
    }

    public function betOption()
    {
        return $this->belongsTo(BetOption::class, 'result');
    }

    public function winners()
    {
        return $this->bets()->with('user')->where('bet', $this->result)->get()->pluck('user');
    }

    public function activityLogs()
    {
        return $this->morphMany(Activity::class, 'causer');
    }

    protected static function newFactory()
    {
        return BettingRoundFactory::new();
    }
}
