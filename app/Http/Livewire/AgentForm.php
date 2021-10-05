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
    public $masterAgent;
    public $display = 'd-none';
    public $try;

    public function mount()
    {
        $masterAgentRoleId = 4;
        $masterAgentCommissionRate = auth()->user()->commission_rate;

        if ($masterAgentCommissionRate === null) {
            $this->notAMasterAgent = true;
            $this->masterAgents = User::join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')
                                        ->where('role_id', $masterAgentRoleId)
                                        ->where('referred_by', null)
                                        ->get();
            return;
        }
        $this->commissionRates = $this->createCommissionRates($masterAgentCommissionRate);

    }

    private function createCommissionRates($masterAgentCommissionRate)
    {
        $masterAgentCommissionRate -= 0.1;
        $rates = collect();
        for ($rate = $masterAgentCommissionRate; $rate > 0  ; $rate -= 0.1) {
            $formatedRate = number_format($rate, 1);
            $rates->push(['value' => $formatedRate, 'percentage' => "$formatedRate%"]);
        }
        return $rates;
    }

    public function showRate()
    {
        $this->try = $this->masterAgent;
        $masterAgent = User::where('id', $this->masterAgent)->get()->first();
        if(!$masterAgent)
        {
            $this->commissionRates = null;
            return;
        }
        $this->commissionRates = $this->createCommissionRates($masterAgent->commission_rate);
    }

    public function render()
    {
        return view('livewire.default.agent-form');
    }

}
