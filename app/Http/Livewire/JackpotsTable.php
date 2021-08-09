<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingEvent\Models\Jackpot;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

class JackpotsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'id';

    public $sortDirection = 'desc';

    protected string $tableName = 'jackpots';

    public int $perPage = 10;

    protected string $pageName = 'jackpots';

    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];

    public $bettingEvent;

    /**
     * @param BettingRound $bettingRound
     */
    public function mount($bettingEvent): void
    {
        $this->bettingEvent = $bettingEvent;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        return Jackpot::where('betting_event_id', $this->bettingEvent->id);
    }


    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('#ID'), 'id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Jackpot $row) {
                    return '#'.$row->id;
                })->asHtml(),
            Column::make(__('Betting Round ID'), 'betting_round_id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Jackpot $row) {
                    return '#'.$row->betting_round_id;
                })->asHtml(),
            Column::make(__('Status'), 'status')
                ->searchable()
                ->sortable(),
             Column::make(__('Prize'), 'prize')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Jackpot $row) {
                    return number_format($row->prize);
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function ($value, $column, Jackpot $row) {
                    return view('backend.betting-event.jackpot.actions', ['jackpot' => $row]);
                })->asHtml(),
        ];
    }
}
