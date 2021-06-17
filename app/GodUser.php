<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * App\GodUser
 *
 * @property int $id
 * @property string $username
 * @property string $password
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|GodUser newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GodUser newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GodUser query()
 * @method static \Illuminate\Database\Eloquent\Builder|GodUser whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GodUser whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GodUser wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GodUser whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GodUser whereUsername($value)
 * @mixin \Eloquent
 */
class GodUser extends Authenticatable
{
    protected $fillable = [
        'username',
        'password',
    ];
}
