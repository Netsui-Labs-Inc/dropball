<?php

namespace App\Domains\Bet\Models;

use Illuminate\Database\Eloquent\Model;

class BetOption extends Model
{
    public $timestamps = false;
    protected $fillable = ['name', 'color', 'hidden'];
    protected $casts = [
        'hidden' => 'boolean'
    ];

}
