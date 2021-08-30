<?php

namespace App\Domains\Hub\Models;

use App\Domains\Auth\Models\User;
use App\Models\Traits\HasBetCommission;
use App\Models\Traits\HasWithdrawal;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Interfaces\WalletFloat;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\HasWalletFloat;
use Bavix\Wallet\Traits\HasWallets;
use Database\Factories\HubFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as AuthUser;
use Spatie\Permission\Traits\HasRoles;

/**
 * App\Domains\Hub\Models\Hub
 *
 * @property int $id
 * @property string $name
 * @property int $admin_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read User $admin
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Domains\Bet\Models\BetCommission[] $commissions
 * @property-read int|null $commissions_count
 * @property-read int|float|string $balance
 * @property-read int|float|string $balance_float
 * @property-read \Illuminate\Database\Eloquent\Collection|\Bavix\Wallet\Models\Transaction[] $transactions
 * @property-read int|null $transactions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Bavix\Wallet\Models\Transfer[] $transfers
 * @property-read int|null $transfers_count
 * @property-read \Bavix\Wallet\Models\Wallet $wallet
 * @property-read \Illuminate\Database\Eloquent\Collection|\Bavix\Wallet\Models\Wallet[] $wallets
 * @property-read int|null $wallets_count
 * @method static \Database\Factories\HubFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Hub newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Hub newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Hub query()
 * @method static \Illuminate\Database\Eloquent\Builder|Hub whereAdminId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Hub whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Hub whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Hub whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Hub whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Hub extends Model implements WalletFloat, Wallet
{
    use HasWallets;
    use HasWalletFloat;
    use CanConfirm;
    use HasBetCommission;
    use HasFactory;
    use HasWithdrawal;
    use HasRoles;

    protected $fillable = [
        'name', 'admin_id',
    ];

    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }

    protected static function newFactory()
    {
        return HubFactory::new();
    }

    public function user()
    {
        return $this->hasMany(User::class);
    }

}
