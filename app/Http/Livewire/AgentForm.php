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
    public $isEdit = false;
    public $agent;
    public $agentsMasterAgent;
    public $agentCommisionRate;
    public $masterAgentsEdit;
    public $hubs;
    public $hubId;
    public $showRate = false;
    public $selectedAgent = false;
    public $firstLoad = true;
    public $masterAgentChange = false;
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
    public $showButtonCancelRate;
    public $test = [];
    public $showMasterAgentList;
    public function mount($agent = null, $edit = false, $masterAgentsEdit = false, $editMode = false)
    {
        $this->agent = $agent;
        $this->edit = $edit;
        $this->editMode = $editMode;
        if($this->editMode) {
            $agentHub = Hub::where('id', $agent->hub_id)->get()->first();
            $this->agentHubId = $agentHub->id;
            $this->agentHubName = $agentHub->name;
            $masterAgent = User::where('id', $agent->referred_by)->get()->first();
            $this->agentMasterAgentId = $masterAgent->id;
            $this->agentMasterAgentName = $masterAgent->name;
            $commissionRateService = new CommissionRateService();
            $currentCommissionRate = $commissionRateService->setCurrentRate($agent);
            $this->agentCurrentRateWholeNumber = $currentCommissionRate['whole_number'];
            $this->agentCurrentRateDecimalNumber = $currentCommissionRate['decimal_number'];
        }
        
        if (auth()->user()->hasRole('Administrator')) 
        {
            $this->notAMasterAgent = true;
            $this->masterAgentsEdit = $masterAgentsEdit;
            $this->agentsMasterAgent = $this->setAgent($agent);
            $this->hubs = Hub::all();
            $this->hubId = auth()->user()->hub_id;
            return;
        }
      
        $this->showRate(auth()->user());
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
        $this->showMasterAgentList = true;
        $this->showRate = false;
        $this->firstLoad = false;
    }

    public function setFormWhenSelectedMasterAgent()
    {
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
                ->get(['users.id', 'users.name']);
        // $masterAgent = $this->masterAgents->last();
        // if($masterAgent)
        // {
        //     $this->showRate(User::where('id', $masterAgent->id)->get()->first());
        // }
        
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

    public function showRate($masterAgent = null)
    {
        $this->showRate = true;
        if(!$masterAgent)
        {
            $masterAgent = User::where('id', $this->masterAgent)->get()->first();
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

    public function showUpdateRate()
    {
        $this->editMode = false;
        $this->showRate = false;
        $this->showButtonCancelRate = true;
    }

    public function cancelEditRate()
    {
        $this->editMode = true;
        $this->showButtonCancelRate = false;
        $this->showMasterAgentList = false;
    }

    public function render()
    {
        return view('livewire.default.agent-form');
    }

}
