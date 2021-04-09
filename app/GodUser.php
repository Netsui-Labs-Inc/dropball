<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class GodUser extends Authenticatable
{
    protected $fillable = [
        'username',
        'password',
    ];
}
