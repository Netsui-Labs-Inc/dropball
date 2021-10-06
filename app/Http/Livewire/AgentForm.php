<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use Livewire\Component;

class AgentForm extends Component
{
    public $commissionRates;
    public $masterAgentCommissionRate;
    public $notAMasterAgent = false;
    public $masterAgents;
    public $masterAgent;
    public $isEdit = false;
    public $agent;
    public $agentsMasterAgent;
    public $agentCommisionRate;
    public $masterAgentsEdit;
    public function mount($agent = null, $edit = false, $masterAgentsEdit = false)
    {
        $this->agent = $agent;
        $this->edit = $edit;
        $this->masterAgentsEdit = $masterAgentsEdit;
        $this->agentsMasterAgent = $this->setAgent($agent);
        $masterAgentRoleId = 4;
        $masterAgentCommissionRate = auth()->user()->commission_rate;
        if ($masterAgentCommissionRate === null) {
            $hub = Hub::where('admin_id', auth()->user()->id)->get()->first();
            $this->notAMasterAgent = true;
            $this->masterAgents = User::join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')
                                        ->where('role_id', $masterAgentRoleId)
                                        ->where('referred_by', null)
                                        ->where('hub_id', $hub->id)
                                        ->get();

            return;
        }

        $this->commissionRates = $this->createCommissionRates($masterAgentCommissionRate);

    }

    private function setAgent($agent)
    {

        if($agent)
        {
            $masterAgent = User::where('id', $agent->referred_by)->get()->first();
            $this->masterAgent = $masterAgent->id;
            $commissionRatePercentage = number_format($agent->commission_rate, 1);
            $this->agentCommisionRate = [
                'value'      => number_format($agent->commission_rate, 1),
                'percentage' => "$commissionRatePercentage%"
            ];
            $this->showRate();
            return [
                'id' => $masterAgent->id,
                'name' => $masterAgent->name
            ];
        }
        return [
            'id' =>'',
            'name' => ''
        ];
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
