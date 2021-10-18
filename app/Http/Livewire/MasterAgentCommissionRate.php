<?php

namespace App\Http\Livewire;

use App\Domains\CommissionRate\Http\Services\CommissionRatesConversion;
use App\Domains\CommissionRate\Http\Services\CommissionRateService;
use App\Domains\Hub\Models\Hub;
use Livewire\Component;

class MasterAgentCommissionRate extends Component
{
    public $wholeNumberRates;
    public $decimalNumberRates;
    public $hubs;
    public $hub;
    public $showRates = true;
    public $selectedWholeNumber;
    public $wholeNumber;
    public $entityRate;
    public $editMode;
    public $masterAgentHubName;
    public $masterAgentHubId;
    public $masterAgentCurrentRateWholeNumber;
    public $masterAgentCurrentRateDecimalNumber;
    public $showButtonCancelHub = false;

    public function mount($editMode = false, $masterAgent = null)
    {
        $this->hubs = Hub::all();
        $this->editMode = $editMode;
    
        if($this->editMode) {
            $masterAgentHub = Hub::where('id', $masterAgent->hub_id)->get()->first();
            $this->masterAgentHubId = $masterAgentHub->id;
            $this->masterAgentHubName = $masterAgentHub->name;
            $commissionRateService = new CommissionRateService();
            $currentCommissionRate = $commissionRateService->setCurrentRate($masterAgent);
            $this->masterAgentCurrentRateWholeNumber = $currentCommissionRate['whole_number'];
            $this->masterAgentCurrentRateDecimalNumber = $currentCommissionRate['decimal_number'];
            return;
        }

        if(auth()->user()->hasRole('Virtual Hub'))
        {
            $this->hub = auth()->user()->hub_id;
            $this->showRates(new CommissionRateService());
        }
    }

    public function showHub()
    {
        if(auth()->user()->hasRole('Virtual Hub')){
            $this->hub = auth()->user()->hub_id;
            $this->showRates(new CommissionRateService());
        }

        $this->editMode = false;
        $this->showButtonCancelHub = true;
    }

    public function cancelEditHub()
    {
        if(auth()->user()->hasRole('Virtual Hub')){
           $this->showRates = true;
        }
        $this->editMode = true;
        $this->showButtonCancelHub = false;
    }

    public function showRates(CommissionRateService $commissionRateService)
    {
        $this->showRates = false;
        $entity = Hub::where('id', $this->hub)->get()->first();
        $commissionRateConversion = new CommissionRatesConversion($entity, true);
        $this->entityRate = $commissionRateConversion->convertHub()->hubCommissionRate();
        $this->setRates($this->entityRate, $commissionRateService);
    }

    private function setRates($commissionRate, $commissionRateService)
    {
        $this->wholeNumber = floor($commissionRate);
        $commisionRates = $commissionRateService->setRates($commissionRate, $this->wholeNumber, 2);
        $this->decimalNumberRates = $commisionRates['decimal_number_rate'];
        $this->wholeNumberRates = $commisionRates['whole_number_rate'];

    }

    public function checkMaxRateAssignment(CommissionRateService $commissionRateService)
    {
        $this->decimalNumberRates = $commissionRateService
            ->checkMaxRateAssignment($this->selectedWholeNumber, $this->wholeNumber, $this->entityRate, 2);
    
    }

    public function render()
    {
        return view('livewire.master-agent-commission-rate');
    }
}
