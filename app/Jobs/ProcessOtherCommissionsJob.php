<?php

namespace App\Jobs;

use App\Domains\BettingRound\Models\BettingRound;
use App\Models\Company;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessOtherCommissionsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $bettingRound;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(BettingRound $bettingRound)
    {
        $this->bettingRound = $bettingRound;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // Developer
        $developer = $this->getDevelopers();
        $bettingRound = $this->bettingRound;
        $commission = $bettingRound->balanceFloat * .01;
        logger("BettingRound#{$bettingRound->id} Transferring the 1% money to Developer from pool money ({$bettingRound->balanceFloat}) : $commission");
        $bettingRound->forceTransferFloat($developer, $commission,  ['betting_round_id' => $bettingRound->id]);

        // Operator
        $remainingMoney = $bettingRound->balanceFloat;

        logger("BettingRound#{$bettingRound->id} Transferring the remaining money to Operator : $remainingMoney");

        $operator = $this->getOperator();

        $bettingRound->forceTransferFloat($operator, $remainingMoney,  ['betting_round_id' => $bettingRound->id]);
    }

    public function getDevelopers()
    {
        return Company::firstOrCreate(['name' => 'Developers']);
    }


    public function getOperator()
    {
        return Company::firstOrCreate(['name' => 'Operator']);
    }

}
