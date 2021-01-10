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
            $bettingEvent = $this->createbettingEvent($data);
        } catch (\Exception $e) {
            DB::rollBack();

            throw new GeneralException(__('There was a problem creating this stag event. Please try again.'));
        }

        DB::commit();

        return $bettingEvent;
    }

    public function createbettingEvent(array $data = []) : BettingEvent
    {
        return $this->model->create([
            'name' => $data['name'],
            'description' => $data['description'],
            'bet_admin_id' => $data['bet_admin_id'],
            'schedule' => $data['schedule'],
        ]);
    }
}
