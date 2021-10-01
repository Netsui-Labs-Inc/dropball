<?php

namespace App\Domains\Wallet\Models;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AmendedTransaction extends Model
{
    use HasFactory;
    protected $fillable = [
        'original_transaction_id',
        'amendment_transaction_id',
        'user',
        'notes',
        'amended_by',
    ];

    public function amendedBy()
    {
        return $this->belongsTo(User::class, 'amended_by');
    }

}
