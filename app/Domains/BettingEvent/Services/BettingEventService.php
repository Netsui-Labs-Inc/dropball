<?php

namespace App\Domains\BettingEvent\Services;

use App\Domains\BettingEvent\Models\BettingEvent;
use App\Exceptions\GeneralException;
use App\Services\BaseService;
use DB;

class BettingEventService extends BaseService
{
    public function __construct(BettingEvent $bettingEvent)
    {
        $this->model = $bettingEvent;
    }

    public function store(array $data = [])
    {
        DB::beginTransaction();

        try {
            $bettingEvent = $this->createBettingEvent($data);
        } catch (\Exception $e) {
            DB::rollBack();

            throw new GeneralException(__('There was a problem creating this stag event. Please try again.'));
        }

        DB::commit();

        return $bettingEvent;
    }

    public function update(BettingEvent $bettingEvent, array $data = [])
    {
        DB::beginTransaction();

        try {
            $bettingEvent = $bettingEvent->update([
                'name' => $data['name'],
                'description' => $data['description'],
                'bet_admin_id' => $data['bet_admin_id'],
                'stream_url' => $data['stream_url'] ?? null,
                'schedule' => $data['schedule'],
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
//            throw new GeneralException(__('There was a problem updating this event. Please try again.'));
        }

        DB::commit();

        return $bettingEvent;
    }

    public function createBettingEvent(array $data = []) : BettingEvent
    {
        return $this->model->create([
            'name' => $data['name'],
            'description' => $data['description'],
            'bet_admin_id' => $data['bet_admin_id'],
            'stream_url' => $data['stream_url'] ?? null,
            'schedule' => $data['schedule'],
        ]);
    }
}
