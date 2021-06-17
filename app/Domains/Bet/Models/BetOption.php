<?php

namespace App\Domains\Bet\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Domains\Bet\Models\BetOption
 *
 * @property int $id
 * @property string $name
 * @property string $color
 * @property bool $hidden
 * @method static \Illuminate\Database\Eloquent\Builder|BetOption newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BetOption newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BetOption query()
 * @method static \Illuminate\Database\Eloquent\Builder|BetOption whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetOption whereHidden($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetOption whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BetOption whereName($value)
 * @mixin \Eloquent
 */
class BetOption extends Model
{
    public $timestamps = false;
    protected $fillable = ['name', 'color', 'hidden'];
    protected $casts = [
        'hidden' => 'boolean'
    ];

}
