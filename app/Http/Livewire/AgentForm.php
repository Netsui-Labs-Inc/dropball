<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\CommissionRate\Http\Services\CommissionRatesConversion;
use App\Domains\CommissionRate\Http\Services\CommissionRateService;
use App\Domains\Hub\Models\Hub;
use Livewire\Component;

class AgentForm extends Component
{
    public $commissionRates;
    public $masterAgentCommissionRate;
    public $notAMasterAgent = false;
    public $masterAgents;
    public $masterAgent;
    public $agent;
    public $agentsMasterAgent;
    public $agentCommisionRate;
    public $masterAgentsEdit;
    public $hubs;
    public $hubId;
    public $hubWasSelected = false;
    public $wholeNumberRates;
    public $decimalNumberRates;
    public $selectedWholeNumber;
    public $wholeNumber;
    public $parentCommissionRate;
    public $editMode;
    public $agentHubName;
    public $agentHubId;
    public $agentMasterAgentName;
    public $agentMasterAgentId;
    public $agentCurrentRateWholeNumber;
    public $agentCurrentRateDecimalNumber;
    public function mount($agent = null, $masterAgentsEdit = false, $editMode = false)
    {
        $this->agent = $agent;
        $this->editMode = $editMode;
        if($this->editMode) {
            $agentHub = Hub::where('id', $agent->hub_id)->get()->first();
            $this->hubId = $agentHub->id;
            $this->agentHubName = $agentHub->name;
            $this->hubs = Hub::where('id', '!=', $this->hubId)->get();
            $masterAgent = User::where('id', $agent->referred_by)->get()->first();
            $this->agentMasterAgentId = $masterAgent->id;
            $this->agentMasterAgentName = $masterAgent->name;
            $commissionRateService = new CommissionRateService();
            $currentCommissionRate = $commissionRateService->setCurrentRate($agent);
            $this->agentCurrentRateWholeNumber = $currentCommissionRate['whole_number'];
            $this->agentCurrentRateDecimalNumber = $currentCommissionRate['decimal_number'];

        } else {
            $this->hubs = Hub::all();
        }

        $this->getMasterAgents();
        if (auth()->user()->hasRole('Administrator'))
        {
            $this->notAMasterAgent = true;
            $this->masterAgentsEdit = $masterAgentsEdit;
            $this->agentsMasterAgent = $this->setAgent($agent);

            return;
        }
        $this->notAMasterAgent = false;
        $this->hubId = auth()->user()->hub_id;
        $this->showRate(auth()->user());
    }

    public function selectHub()
    {
        $this->hubs = null;
        $this->setSelectedHub();
    }

    private function setSelectedHub()
    {
        $this->hubWasSelected = true;
        $agentHub = Hub::where('id', $this->hubId)->get()->first();
        $this->agentHubName = $agentHub->name;
        $this->hubs = Hub::where('id', '!=', $this->hubId)->get();
        $this->getMasterAgents();
    }

    public function setFormWhenSelectedMasterAgent()
    {
        $this->showRate();
    }

    public function getMasterAgents()
    {
        if(!$this->hubId) {
            return;
        }

        $hubId = $this->hubId;
        $this->notAMasterAgent = true;

        $this->masterAgents = User::join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')
                ->join('roles', 'roles.id', '=', 'model_has_roles.role_id')
                ->where('roles.name', 'Master Agent')
                ->where('referred_by', null)
                ->where('hub_id', $hubId)
                ->get(['users.id', 'users.name']);
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

    public function showRate($masterAgent = null)
    {
        if(!$masterAgent)
        {
            $masterAgent = User::where('id', $this->masterAgent)->get()->first();
        }

        if(!$masterAgent){
            return;
        }

        $commissionRateConversion = new CommissionRatesConversion($masterAgent);
        $rate = $commissionRateConversion->convertMasterAgent()->masterAgentCommissionRate();

        $this->setRates($rate);
    }

    private function setRates($commissionRate)
    {
        $commissionRateService = new CommissionRateService();
        $this->parentCommissionRate = $commissionRate;
        $this->wholeNumber = floor($commissionRate);
        $commisionRates = $commissionRateService->setRates($commissionRate, $this->wholeNumber, 1);
        $this->decimalNumberRates = $commisionRates['decimal_number_rate'];
        $this->wholeNumberRates = $commisionRates['whole_number_rate'];

    }

    public function checkMaxRateAssignment(CommissionRateService $commissionRateService)
    {
        $this->decimalNumberRates = $commissionRateService
            ->checkMaxRateAssignment($this->selectedWholeNumber, $this->wholeNumber, $this->parentCommissionRate, 1);
    }

    public function render()
    {
        return view('livewire.default.agent-form');
    }

}
