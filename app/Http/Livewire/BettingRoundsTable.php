<?php

namespace App\Http\Livewire;

use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class BettingRoundsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'queue';

    public $sortDirection = 'asc';

    public int $perPage = 10;

    protected string $pageName = 'betting-rounds';


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
                ->format(function ($value, $column, BettingRound $row) {
                    return '#'.$row->id;
                })->asHtml(),
            Column::make(__('Queue'), 'queue')
                ->searchable()
                ->sortable(),
            Column::make(__('Status'), 'status')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, BettingRound $row) {
                    return $row->statusLabel();
                })->asHtml(),
            Column::make(__('Result'), 'result')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, BettingRound $row) {
                    return $row->resultLabel();
                })->asHtml(),
            Column::make(__('Betting Open'), 'is_betting_open')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, BettingRound $row) {
                    return $row->bettingOpenLabel();
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function ($value, $column, BettingRound $row) {
                    return view('backend.betting-round.includes.action', ['bettingRound' => $row]);
                }),
        ];
    }
}
