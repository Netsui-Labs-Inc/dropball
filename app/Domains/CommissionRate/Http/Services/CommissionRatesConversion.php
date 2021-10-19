<?php

namespace App\Domains\CommissionRate\Http\Services;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Models\CommissionRate;
use App\Models\OverallCommissionRate;

class CommissionRatesConversion
{
 
    private $agentCommissionRate;
    private $masterAgentCommissionRate;
    private $masterAgentReferralCommissionRate;
    private $hubCommissionRate;
    private $operatorCommissionRate;
    private $overallCommission;
    private $hub;
    private $entity;
    public function __construct($entity, $isHub = false)
    {
        $this->overallCommission = OverallCommissionRate::query()->first()->rate;
        $this->entity = $entity;
        if($isHub)
        {
            $this->hub = $entity;
            return;
        }
        $this->getHub($entity->hub_id);
    }

    private function getHub($hubId)
    {
        $this->hub = Hub::where('id', $hubId)->first();
    }

    public function convertHub()
    {
        $this->hubCommissionRate = $this->overallCommission * $this->hub->commission_rate;
        return $this;
    }

    public function converHubToPercentage($commissionRate, $isUpdate = false)
    {
        if ($isUpdate)
        {
           if($this->validateCommissionRate($commissionRate, $this->overallCommission, 0.3))
           {
               return false;
           }
        }
        return $commissionRate / $this->overallCommission;
    }

    public function convertMasterAgent($masterAgent = null)
    {
        $commissionRate = $this->entity->commission_rate;
        if($masterAgent)
        {
            $commissionRate = $masterAgent->commission_rate;
        }
        $this->convertHub();
        $this->masterAgentCommissionRate = $this->hubCommissionRate * $commissionRate;
        return $this;
    }

    public function converMasterAgentRateToPercentage($commissionRate, $hubId, $isUpdate = false)
    {
        $this->getHub($hubId);
        $this->convertHub();
        if ($isUpdate)
        {
           if($this->validateCommissionRate($commissionRate, $this->hubCommissionRate, 0.2))
           {
               return false;
           }
        }

        return $commissionRate / $this->hubCommissionRate;
    }

    public function convertAgent()
    {
        $this->convertMasterAgent(User::where('id', $this->entity->referred_by)->first());
        $this->agentCommissionRate = $this->masterAgentCommissionRate * $this->entity->commission_rate;
       
        return $this;
    }

    public function convertAgentRateToPercentage($commissionRate, $hubId, $masterAgentId, $isUpdate = false)
    {
        $this->getHub($hubId);
        $this->convertMasterAgent(User::where('id',  $masterAgentId)->first());
        if ($isUpdate)
        {
            if($this->validateCommissionRate($commissionRate, $this->masterAgentCommissionRate, 0.1))
            {
                return false;
            }
        }
        return $commissionRate / $this->masterAgentCommissionRate;
    }

    public function validateCommissionRate($commissionRate, $parentCommissionRate, $minimumCommissionRate)
    {
        return ($parentCommissionRate < $commissionRate
        || $commissionRate <= 0 || $commissionRate <= $minimumCommissionRate
        ) ? true : false;
    }
    
    public function agentCommissionRate()
    {
        return $this->agentCommissionRate;

    }

    public function masterAgentCommissionRate()
    {
        return $this->masterAgentCommissionRate;

    }

    public function masterAgentReferralCommissionRate()
    {
        return $this->masterAgentReferralCommissionRate;

    }

    public function hubCommissionRate()
    {
        return $this->hubCommissionRate;

    }

    public function operatorCOmmissionRate()
    {
        return $this->operatorCommissionRate;

    }

}
