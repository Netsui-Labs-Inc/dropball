<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use Livewire\Component;

class AgentForm extends Component
{
    public $commissionRates;
    public $masterAgentCommissionRate;
    public $notAMasterAgent = false;
    public $masterAgents;
    public function mount()
    {
        $masterAgentRoleId = 4;
        $masterAgentCommissionRate = auth()->user()->commission_rate;
        if ($masterAgentCommissionRate === null) {
            $this->notAMasterAgent = true;
            $masterAgents = User::join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')
                                        ->where('role_id', $masterAgentRoleId)
                                        ->where('referred_by', null)
                                        ->get([
                                            'users.id',
                                            'users.name'
                                        ]);

            $masterAgentList = [];
            foreach($masterAgents as $masterAgent)
            {
                $masterAgentList += ["$masterAgent->id" => " $masterAgent->name"];
            }

            $this->masterAgents = $masterAgentList;
        }

        $this->commissionRates = $this->createCommissionRates($masterAgentCommissionRate);
    }

    private function getCommissionRate()
    {
        if (auth()->user()->hasRole('Master Agent'))
        {
            return auth()->user()->commission_rate;
        }

        return null;
    }

    private function createCommissionRates($masterAgentCommissionRate)
    {
        $masterAgentCommissionRate -= 0.1;
        $rates = [];
        for ($rate = $masterAgentCommissionRate; $rate > 0  ; $rate -= 0.1) {
            $formatedRate = number_format($rate, 1);
            $rates += ["$formatedRate" => "$formatedRate%"];
        }
        return $rates;
    }

    public function test()
    {
        dd('test');
    }

    public function render()
    {
        return view('livewire.default.agent-form');
    }

}
