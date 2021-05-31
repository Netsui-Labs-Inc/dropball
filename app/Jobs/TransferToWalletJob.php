<?php

namespace App\Jobs;

use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Interfaces\WalletFloat;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use DB;

class TransferToWalletJob implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public WalletFloat $transferFrom;
    public Wallet $transferTo;
    public int $amount;
    public ?array $meta;


    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return $this->transferFrom->id;
    }

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(WalletFloat $transferFrom, Wallet $transferTo, $amount, ?array $meta)
    {
        $this->transferFrom = $transferFrom;
        $this->transferTo = $transferTo;
        $this->amount = $amount;
        $this->meta = $meta;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            logger("TransferToWalletJob.handle :: Transferring {$this->amount} from #{$this->transferFrom->id} to #{$this->transferTo->id}", $this->meta);
            DB::beginTransaction();
            $transaction = $this->transferFrom->forceTransferFloat(
                $this->transferTo,
                $this->amount,
                $this->meta
            );
            logger("TransferToWalletJob.handle :: Transaction id = $transaction->uuid");
            DB::commit();
        } catch (\Exception $exception) {
            logger("TransferToWalletJob.error :: From :".$exception->getMessage());
            \Sentry::captureException($exception);
            DB::rollback();
        }

    }
}
