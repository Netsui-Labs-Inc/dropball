<?php

namespace App\Domains\CommissionRate\Http\Services;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Models\CommissionRate;
use App\Models\OverallCommissionRate;

class CommissionRatesComputation
{
    private $bet;
    private $agentCommissionRate;
    private $masterAgentCommissionRate;
    private $masterAgentReferralCommissionRate;
    private $hubCommissionRate;
    private $operatorCommissionRate;
    private $overallCommissionRate;

    public function __construct($bet)
    {
        $this->bet = $bet;
    }

    public function commission()
    {

        $player = $this->bet->user;
        $this->computeAgentCommission($player->masterAgent);
        $this->computeMasterAgentCommission($player->masterAgent);
        $this->computeMasterAgentReferralCommission($player->masterAgent);
        $this->computeHubCommission($player->hub, $player->masterAgent);
        $this->computeOperatorCommission($player->hub);
        return $this;

    }

    private function computeAgentCommission($masterAgent)
    {
        if (! $masterAgent->referred_by) {
            return true;
        }
        $parentAgent = User::where('id', $masterAgent->referred_by)->first();
        $commissionRateConversion = new CommissionRatesConversion($parentAgent);
        $parentCommissionRate = $commissionRateConversion->convertMasterAgent()->masterAgentCommissionRate();
        $this->agentCommissionRate = number_format($parentCommissionRate * $masterAgent->commission_rate, 2) / 100;

    }

    private function computeMasterAgentCommission($masterAgent)
    {
        $hub = Hub::where('id', $masterAgent->hub_id)->first();
        $commissionRateConversion = new CommissionRatesConversion($hub, true);
        $hubCommissionRate = $commissionRateConversion->convertHub()->hubCommissionRate();
        $this->masterAgentCommissionRate = number_format($hubCommissionRate * $masterAgent->commission_rate, 2) / 100;

    }

    private function computeHubCommission($hub, $agent)
    {
        $commissionRateConversion = new CommissionRatesConversion($hub, true);
        $hubCommissionRate = number_format($commissionRateConversion->convertHub()->hubCommissionRate(), 2);

        if ($agent->referred_by) {
            $agent = User::where('id', $agent->referred_by)->first();
        }

        $commissionRateConversion = new CommissionRatesConversion($agent);
        $agentCommissionRate = number_format($commissionRateConversion->convertMasterAgent()->masterAgentCommissionRate(), 2);
        $this->hubCommissionRate =  abs($hubCommissionRate - $agentCommissionRate) / 100;

    }

    private function computeOperatorCommission($hub)
    {
        $overAllcommissionRate = OverallCommissionRate::query()->first()->rate;
        $hubCommissionRate =  $overAllcommissionRate * $hub->commission_rate;

        $this->operatorCommissionRate = abs($overAllcommissionRate - $hubCommissionRate)  / 100;
    }

    private function computeMasterAgentReferralCommission($masterAgent)
    {
        $parentAgent = $masterAgent->masterAgent;
        if (! $parentAgent) {
            return true;
        }

        $commissionRateConversion = new CommissionRatesConversion($parentAgent);
        $parentCommissionRate = $commissionRateConversion->convertMasterAgent()->masterAgentCommissionRate();
        $agentCommission = number_format($parentCommissionRate * $masterAgent->commission_rate, 2);
        $this->masterAgentReferralCommissionRate = ( number_format($parentCommissionRate, 1) - $agentCommission ) / 100;
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
