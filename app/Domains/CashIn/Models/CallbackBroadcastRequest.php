<?php

namespace App\Domains\CashIn\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CallbackBroadcastRequest extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'cash_in_id',
        'status',
        'created_at',
        'updated_at'
    ];
}
