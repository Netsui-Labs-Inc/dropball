<?php

namespace App\Http\Livewire\Services\TransactionTable;

use App\Domains\Hub\Models\Hub;
use App\Domains\MasterAgent\Http\Service\AgentFilter;

class MasterAgentsTransaction
{
    private $user;
    private $isAgent;
    private $agentFilter;
    public function __construct($isAgent)
    {
        $this->user = Auth()->user();
        $this->isAgent = $isAgent;
        $this->agentFilter = new AgentFilter();

    }

    public function morphToPayable($query, $searchTerm = null)
    {
        $self = $this;
        return $query->whereHasMorph('payable', 'App\Domains\Auth\Models\User', function ($query) use ($self, $searchTerm) {
            $query->where('name', 'like', '%'. $searchTerm . '%');
            $hub = Hub::where('admin_id',$self->user->id)->first();
            $query->where('hub_id', $hub->id);
            $query->whereHas('roles', function ($query) {
                return $query->where('name', 'Master Agent');
            });
             $query = $self->agentFilter->setAgent($query, $self->isAgent)->getQuery();;

            return $query;
        });
    }

}
