<?php

namespace App\Domains\Bet\Models;

use App\Domains\Auth\Models\User;
use App\Domains\BettingRound\Models\BettingRound;
use App\Models\Traits\Uuid;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Interfaces\WalletFloat;
use Bavix\Wallet\Traits\HasWalletFloat;
use Bavix\Wallet\Traits\HasWallets;
use Carbon\Carbon;
use Database\Factories\BetFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Bet
 *
 * @package App\Domains\Bet\Models
 * @property BettingRound $bettingRound
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property int $id
 * @property User|WalletFloat $user
 * @property int $user_id,
 * @property int $betting_round_id
 * @property int $bet
 * @property int $bet_amount
 * @property string $status
 * @property float $payout
 * @property string $winnings_processed_at
 * @property string $refund_processed_at
 * @property string $uuid
 * @property int|null $agent_id
 * @property float|null $gain_loss
 * @property bool|null $commission_processed
 * @property int|null $other_commissions
 * @property string|null $note
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read User|null $agent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Domains\Bet\Models\BetCommission[] $commissions
 * @property-read int|null $commissions_count
 * @property-read int|float|string $balance
 * @property-read int|float|string $balance_float
 * @property-read \App\Domains\Bet\Models\BetOption $option
 * @property-read BettingRound $play
 * @property-read \Illuminate\Database\Eloquent\Collection|\Bavix\Wallet\Models\Transaction[] $transactions
 * @property-read int|null $transactions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Bavix\Wallet\Models\Transfer[] $transfers
 * @property-read int|null $transfers_count
 * @property-read \Bavix\Wallet\Models\Wallet $wallet
 * @property-read \Illuminate\Database\Eloquent\Collection|\Bavix\Wallet\Models\Wallet[] $wallets
 * @property-read int|null $wallets_count
 * @method static \Illuminate\Database\Eloquent\Builder|Bet betType($type)
 * @method static \Database\Factories\BetFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Bet newQuery()
 * @method static \Illuminate\Database\Query\Builder|Bet onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Bet query()
 * @method static \Illuminate\Database\Eloquent\Builder|Bet uuid($uuid)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereAgentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereBet($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereBetAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereBettingRoundId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereCommissionProcessed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereGainLoss($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereOtherCommissions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet wherePayout($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereRefundProcessedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereUuid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bet whereWinningsProcessedAt($value)
 * @method static \Illuminate\Database\Query\Builder|Bet withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Bet withoutTrashed()
 * @mixin \Eloquent
 */
class Bet extends Model implements Wallet, WalletFloat
{
    use HasFactory,
        SoftDeletes,
        Uuid,
        HasWalletFloat,
        HasWallets;

    protected $table = 'bets';

    protected $fillable = [
        'uuid',
        'betting_round_id',
        'user_id',
        'bet',
        'bet_amount',
        'status',
        'gain_loss',
        'payout',
        'commission_processed',
        'other_commissions',
        'winnings_processed_at',
        'refund_processed_at',
        'agent_id',
        'note',
    ];

    protected $casts = [
        'commission_processed' => 'boolean',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    const PULA = 1;
    const PUTI = 2;
    const BOKYA = 3;
    const JACKPOT = 4;
    const RESULT = [
        1 => 'pula',
        2 => 'puti',
    ];

    public function play()
    {
        return $this->belongsTo(BettingRound::class, 'betting_round_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function agent()
    {
        return $this->belongsTo(User::class, 'agent_id');
    }

    public function betLabel()
    {
        $color = $this->option->color == '#FFFFFF' ? '#8898aa' : '#FFFFFF';
        return "<span class=\"badge\" style=\"background-color: {$this->option->color}; color: {$color} \">".strtoupper($this->option->name)."</span>";
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

    public function commissions()
    {
        return $this->hasMany(BetCommission::class);
    }

    public function scopeBetType($query, $type)
    {
        return $query->where('bet', $type);
    }

    protected static function newFactory()
    {
        return BetFactory::new();
    }
}
