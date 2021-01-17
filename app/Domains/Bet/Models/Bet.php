<?php

namespace App\Domains\Bet\Models;

use App\Domains\Auth\Models\User;
use App\Domains\BettingRound\Models\BettingRound;
use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bet extends Model
{
    use SoftDeletes, Uuid;

    protected $table = 'bets';

    protected $fillable = [
        'uuid',
        'betting_round_id',
        'user_id',
        'bet',
        'bet_amount',
        'status',
        'gain_loss',
        'note',
    ];

    public function play()
    {
        return $this->belongsTo(BettingRound::class, 'betting_round_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function betLabel()
    {
        $class = $this->bet === 'meron' ? 'badge-danger' : 'badge-info';

        return "<span class=\"badge $class\">".strtoupper($this->bet)."</span>";
    }

    public function statusLabel()
    {
        if (! $this->status) {
            return 'N/A';
        }
        switch ($this->status) {
            case 'win':
                $class = 'badge-success';

                break;
            case 'lose':
                $class = 'badge-danger';

                break;
            default:
                $class = 'badge-info';

                break;
        }

        return "<span class=\"badge $class\">".strtoupper(str_ireplace("_", " ", $this->status))."</span>";
    }

    public function gainLossLabel()
    {
        if ($this->gain_loss < 0) {
            $class = 'text-danger';
            $sign = "<i class='fa fa-arrow-down text-danger mr-2'></i>";
        } elseif ($this->gain_loss == 0) {
            $class = 'text-muted';
            $sign = "<i class='fa fa-minus text-info mr-2'></i>";
        } else {
            $class = 'text-success';
            $sign = "<i class='fa fa-arrow-up success mr-2'></i>+";
        }

        return "<span class='$class'>$sign".number_format($this->gain_loss)."</span>";
    }

    public function option()
    {
        return $this->belongsTo(BetOption::class, 'bet');
    }

    public function bettingRound()
    {
        return $this->belongsTo(BettingRound::class, 'betting_round_id');

    }

    public function scopeBetType($query, $type)
    {
        return $query->where('bet', $type);
    }
}
