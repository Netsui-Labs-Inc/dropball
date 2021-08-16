<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Actions\Commission\Agent;
use App\Domains\BettingRound\Actions\Commission\Developer;
use App\Domains\BettingRound\Actions\Commission\Hub;
use App\Domains\BettingRound\Actions\Commission\Operator;
use App\Domains\BettingRound\Actions\Commission\SubAgent;
use App\Events\BetCommissionsProcessingFailed;
use App\Events\BetCommissionsProcessingFinished;
use App\Events\BetCommissionsProcessingStarted;
use App\Jobs\ProcessAllCommissionsJob;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class CommissionsStatusRow extends Component
{
    public $bet;
    public $masterAgent;
    public $hub;
    public $developer;
    public $operator;
    public $betProcessing = false;

    public $status;
    public $errorMessage;

    public function mount($bet)
    {
        $this->bet = $bet;
        $this->getCommissionsStatuses();
        $this->status = !$bet->commission_processed ? 'pending' : 'completed';

    }

    public function getCommissionsStatuses()
    {
        $bet = $this->bet;
        $this->masterAgent = $bet->commissions()->where('type', 'master_agent')->first();
        $this->hub = $bet->commissions()->where('type', 'hub')->first();
        $this->developer = $bet->commissions()->where('type', 'system')->first();
        $this->operator = $bet->commissions()->where('type', 'operator')->first();
    }

    public function getListeners()
    {
        return [
            "echo-private:bet.{$this->bet->id}.status,BetCommissionsProcessingStarted" => 'started',
            "echo-private:bet.{$this->bet->id}.status,BetCommissionsProcessingFinished" => 'finished',
            "echo-private:bet.{$this->bet->id}.status,BetCommissionsProcessingFailed" => 'failed'
        ];
    }

    public function processCommissions($betId)
    {
        try {
            $bet = Bet::find($betId);
            event(new BetCommissionsProcessingStarted($bet));
            $this->started();
            DB::beginTransaction();
            $agent = (new Agent)($bet);
            $operator = (new Operator)($bet);
            $hub = (new Hub)($bet);
            $developer = (new Developer)($bet);
            $subAgent = (new SubAgent)($bet);

            $bet->commission_processed = true;
            $bet->save();

            DB::commit();
            event(new BetCommissionsProcessingFinished($bet));
        } catch (\Exception $exception) {
            DB::rollBack();
            logger("ProcessAllCommissionsJob ERROR: ".$exception->getMessage());
            event(new BetCommissionsProcessingFailed($bet, $exception->getMessage()));
        }
    }

    public function started()
    {
        $this->status = 'in-progress';
    }

    public function finished($data)
    {
        $this->bet->refresh();
        $this->getCommissionsStatuses();
        $this->status = 'completed';
    }

    public function failed($data)
    {
        $this->bet->refresh();
        $this->getCommissionsStatuses();
        $this->status = 'failed';
        $this->errorMessage = $data['errorMessage'];
    }

    public function render()
    {
        return view('backend.betting-round.includes.commissions-status-row');
    }
}
