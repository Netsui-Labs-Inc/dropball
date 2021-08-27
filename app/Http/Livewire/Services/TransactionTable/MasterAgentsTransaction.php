<?php

namespace App\Http\Livewire\Services\TransactionTable;

use App\Domains\Hub\Models\Hub;

class MasterAgentsTransaction
{
    private $user;

    public function __construct()
    {
        $this->user = Auth()->user();
    }

    public function morphToPayable($query, $searchTerm = null)
    {
        $user = $this->user;
        return $query->whereHasMorph('payable', 'App\Domains\Auth\Models\User', function ($query) use ($user, $searchTerm) {
            $query->where('name', 'like', '%'. $searchTerm . '%');
            $hub = Hub::where('admin_id', $user->id)->first();
            $query->where('hub_id', $hub->id);
            $query->whereHas('roles', function ($query) {
                return $query->where('name', 'Master Agent');
            });
            return $query;
        });
    }

}
