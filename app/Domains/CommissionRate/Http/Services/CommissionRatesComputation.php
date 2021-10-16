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

        $hubRate = Hub::where('id', $masterAgent->hub_id)->get()->first()->commission_rate;
        $parentAgent = User::where('id', $masterAgent->referred_by)->first();
        $parentAgentRate = number_format($hubRate * $parentAgent->commission_rate, 1);
        $this->agentCommissionRate = number_format($parentAgentRate * $masterAgent->commission_rate, 1) / 100;

    }

    private function computeMasterAgentCommission($masterAgent)
    {
        $hubRate = Hub::where('id', $masterAgent->hub_id)->first()->commission_rate;
        $this->masterAgentCommissionRate = number_format($hubRate * $masterAgent->commission_rate, 1) / 100;

    }

    private function computeHubCommission($hub, $agent)
    {
        $query = CommissionRate::where('hub_id', $hub->id);

        if ($agent->referred_by) {
            $query->where('master_agent_id', $agent->referred_by);
        } else {
            $query->where('master_agent_id', $agent->id);
        }

        $hubCommissionRate = $query->get()->first()->commission_rate;
        $this->hubCommissionRate =  number_format($hubCommissionRate * $hub->commission_rate, 1) / 100;

    }

    private function computeOperatorCommission($hub)
    {
        $this->operatorCommissionRate = abs(OverallCommissionRate::query()->first()->rate - $hub->commission_rate)  / 100;
    }

    private function computeMasterAgentReferralCommission($masterAgent)
    {
        $parentAgent = $masterAgent->masterAgent;
        if (! $parentAgent) {
            return true;
        }
        $hubRate = Hub::where('id', $masterAgent->hub_id)->get()->first()->commission_rate;
        $parentAgentRate = $hubRate * $parentAgent->commission_rate;
        $agentCommission = number_format($parentAgentRate * $masterAgent->commission_rate, 1);
        $this->masterAgentReferralCommissionRate = ( $parentAgentRate - $agentCommission ) / 100;
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
