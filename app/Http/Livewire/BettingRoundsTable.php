<?php

namespace App\Http\Livewire;

use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

class BettingRoundsTable extends TableComponent
{
    use HtmlComponents;
    /**
     * @var string
     */
    public $sortField = 'queue';

    public $sortDirection = 'asc';

    public $perPage = 10;

    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];

    /** @var BettingEvent */
    public $bettingEvent;

    /**
     * @param  BettingEvent  $bettingEvent
     */
    public function mount($bettingEvent = null): void
    {
        $this->bettingEvent = $bettingEvent;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = BettingRound::query();
        if ($this->bettingEvent) {
            $query->where('betting_event_id', $this->bettingEvent->id);
        }

        return $query;
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('Betting Round ID'), 'id')
                ->searchable()
                ->sortable()
                ->format(function (BettingRound $model) {
                    return $this->html('#'.$model->id);
                }),
            Column::make(__('Queue'), 'queue')
                ->searchable()
                ->sortable(),
            Column::make(__('Status'), 'status')
                ->searchable()
                ->sortable()
                ->format(function (BettingRound $model) {
                    return $this->html($model->statusLabel());
                }),
            Column::make(__('Result'), 'result')
                ->searchable()
                ->sortable()
                ->format(function (BettingRound $model) {
                    return $this->html($model->resultLabel());
                }),
            Column::make(__('Betting Open'), 'is_betting_open')
                ->searchable()
                ->sortable()
                ->format(function (BettingRound $model) {
                    return $this->html($model->bettingOpenLabel());
                }),
            Column::make(__('Action'))
                ->format(function (BettingRound $model) {
                    return view('backend.betting-round.includes.action', ['bettingRound' => $model]);
                }),
        ];
    }
}
