<?php

namespace App\Domains\Auth\Models;

use App\Domains\Auth\Models\Traits\Attribute\UserAttribute;
use App\Domains\Auth\Models\Traits\Method\UserMethod;
use App\Domains\Auth\Models\Traits\Relationship\UserRelationship;
use App\Domains\Auth\Models\Traits\Scope\UserScope;
use App\Domains\Auth\Notifications\Frontend\ResetPasswordNotification;
use App\Domains\Auth\Notifications\Frontend\VerifyEmail;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Models\ApprovedWithdrawalRequest;
use App\Domains\CashIn\Models\CashIn;
use App\Domains\Wallet\Models\WalletTransaction;
use App\Models\Traits\HasBetCommission;
use App\Models\Traits\HasWithdrawal;
use Bavix\Wallet\Interfaces\Confirmable;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Interfaces\WalletFloat;
use Bavix\Wallet\Models\Transaction;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\HasWalletFloat;
use Bavix\Wallet\Traits\HasWallets;
use Carbon\Carbon;
use DarkGhostHunter\Laraguard\Contracts\TwoFactorAuthenticatable;
use DarkGhostHunter\Laraguard\TwoFactorAuthentication;
use Database\Factories\UserFactory;
use Illuminate\Auth\MustVerifyEmail as MustVerifyEmailTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Lab404\Impersonate\Models\Impersonate;
use Spatie\Permission\Traits\HasRoles;

/**
 * Class User.

 */
class User extends Authenticatable implements MustVerifyEmail, TwoFactorAuthenticatable, Wallet, WalletFloat, Confirmable
{
    use HasRoles,
        HasFactory,
        Impersonate,
        HasWalletFloat,
        HasWallets,
        CanConfirm,
        MustVerifyEmailTrait,
        Notifiable,
        SoftDeletes,
        TwoFactorAuthentication,
        UserAttribute,
        UserMethod,
        UserRelationship,
        HasWithdrawal,
        UserScope,
        HasBetCommission;

    public const TYPE_ADMIN = 'admin';
    public const TYPE_USER = 'user';

    public const ROLES = [
        'ADMIN' => 1,
        'MASTER_AGENT' => 2,
        'BET_ADMIN' => 3,
        'PLAYER' => 4,
        'DEALER_ADMIN' => 5
    ];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'name',
        'email',
        'mobile',
        'email_verified_at',
        'mobile_verified_at',
        'password',
        'password_changed_at',
        'active',
        'timezone',
        'last_login_at',
        'last_login_ip',
        'last_event_id',
        'to_be_logged_out',
        'provider',
        'provider_id',
        'referral_id',
        'referred_by',
        'hub_id',
        'winning_streak',
        'commission_rate',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'last_login_at',
        'email_verified_at',
        'mobile_verified_at',
        'password_changed_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'active' => 'boolean',
        'last_login_at' => 'datetime',
        'email_verified_at' => 'datetime',
        'mobile_verified_at' => 'datetime',
        'to_be_logged_out' => 'boolean',
        'commission_rate' => 'float',
    ];

    /**
     * @var array
     */
    protected $appends = [
        'avatar',
    ];

    /**
     * @var string[]
     */
    protected $with = [
        'permissions',
        'roles',
    ];

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token): void
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    /**
     * Send the registration verification email.
     */
    public function sendEmailVerificationNotification(): void
    {
        $this->notify(new VerifyEmail);
    }

    /**
     * Return true or false if the user can impersonate an other user.
     *
     * @param void
     * @return  bool
     */
    public function canImpersonate(): bool
    {
        return $this->can('admin.access.user.impersonate');
    }

    /**
     * Return true or false if the user can be impersonate.
     *
     * @param void
     * @return  bool
     */
    public function canBeImpersonated(): bool
    {
        return ! $this->isMasterAdmin();
    }

    protected static function newFactory()
    {
        return UserFactory::new();
    }

    public function hub()
    {
        return $this->belongsTo(Hub::class);
    }

    public function cashIns()
    {
        return $this->hasMany(CashIn::class, 'user_id', 'id');
    }

    public function approvedWithdrawalRequest()
    {
        return $this->hasMany(ApprovedWithdrawalRequest::class);
    }

}
