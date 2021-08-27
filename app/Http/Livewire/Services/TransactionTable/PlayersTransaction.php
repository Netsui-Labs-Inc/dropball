<?php

namespace App\Http\Livewire\Services\TransactionTable;

use Bavix\Wallet\Models\Transaction;

class PlayersTransaction
{
    private $user;

    public function __construct()
    {
        $this->user = Auth()->user();
    }

    public function morphToPayable($query, $searchTerm = null)
    {
        return $query->whereHasMorph('payable', 'App\Domains\Auth\Models\User', function ($query) use ($searchTerm) {
            $query->where('name', 'like', '%'. $searchTerm . '%');
            $query->whereHas('roles', function ($query) {
                return $query->where('name', 'Player');
            });
            return $query;
        });
    }

}
