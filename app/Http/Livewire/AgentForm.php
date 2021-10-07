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
    public $hubs;
    public $hubId;
    public $showRate = true;
    public $selectedAgent = false;
    public $firstLoad = true;
    public $masterAgentChange = false;

    public function mount($agent = null, $edit = false, $masterAgentsEdit = false)
    {
        $this->agent = $agent;
        $this->edit = $edit;
        $this->masterAgentsEdit = $masterAgentsEdit;

        $this->agentsMasterAgent = $this->setAgent($agent);
        $masterAgentCommissionRate = auth()->user()->commission_rate;
        $this->hubs = Hub::all()->pluck('name', 'id');
        $this->hubId = auth()->user()->hub_id;

        if ($masterAgentCommissionRate === null)
        {
            $this->getMasterAgents();
            return;
        }
        $this->commissionRates = $this->createCommissionRates($masterAgentCommissionRate);
    }

    public function selectHub()
    {
        $this->setFormWhenSelectedHub();
        $this->getMasterAgents();
    }

    private function setFormWhenSelectedHub()
    {
        $this->agentsMasterAgent = null;
        $this->selectedAgent = false;
        $this->showRate = false;
        $this->firstLoad = false;
    }

    public function setFormWhenSelectedMasterAgent()
    {
        $this->showRate = true;
        $this->masterAgentChange = true;
        $this->firstLoad = false;
        $this->showRate();
    }

    public function selectRate()
    {
        $this->firstLoad = false;
    }

    public function getMasterAgents()
    {

        $hubId = $this->getHub();
        $this->notAMasterAgent = true;

        $this->masterAgents = User::join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')
                ->join('roles', 'roles.id', '=', 'model_has_roles.role_id')
                ->where('roles.name', 'Master Agent')
                ->where('referred_by', null)
                ->where('hub_id', $hubId)
                ->get(['users.id','users.name']);

    }

    private function getHub()
    {

        if(!$this->hubId) {
            return Hub::all()->first()->id;
        }

        return $this->hubId;

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
