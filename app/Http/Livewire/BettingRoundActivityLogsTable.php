<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;
use Spatie\Activitylog\Models\Activity;

class BettingRoundActivityLogsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'id';
    protected string $pageName = 'activity_logs';


    /** @var BettingRound */
    public $bettingRound;
    public $bet;
    public $user;

    /**
     * @var array|string[]
     */
    public array $filterNames = [
        'type' => 'Type',
    ];

    /**
     * @param BettingRound $bettingRound
     */
    public function mount($bettingRound = null, $bet = null, $user = null): void
    {
        $this->bettingRound = $bettingRound;
        $this->bet = $bet;
        $this->user = $user;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        return $this->bettingRound->activityLogs()->getQuery()
            ->when($this->getFilter('type'), fn ($query, $type) => $query->where('log_name', $type));
    }

    /**
     * @return array
     */
    public function filters(): array
    {
        return [
            'type' => Filter::make('Type')
                ->select([
                    '' => 'All',
                    'player winnings' => 'Player Winnings',
                    'agent commissions' => 'Agent Commissions',
                    'hub commissions' => 'Hub Commissions',
                    'operator commissions' => 'Operator Commissions',
                    'developer commissions' => 'Developer Commissions',
                    'other commissions' => 'Other Commissions',
                ]),
        ];
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('Type'), 'log_name')
                ->searchable()
                ->sortable(),
            Column::make(__('Subject'), 'subject_id')
                ->sortable()
                ->format(function ($value, $column, Activity $row) {
                    return $row->subject->name;
                })->asHtml(),
            Column::make(__('Activity'), 'description')
                ->searchable()
                ->sortable(),
            Column::make(__('Previous Balance'), 'properties')
                ->format(function ($value, $column, Activity $row) {
                    return number_format($row->properties['previous_balance'] ?? 0, 2);
                })->asHtml(),
            Column::make(__('New Balance'), 'properties')
                ->format(function ($value, $column, Activity $row) {
                    return number_format($row->properties['new_balance'] ?? 0, 2);
                })->asHtml(),
            Column::make(__('Datetime'), 'created_at')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Activity $row) {
                    return $row->created_at->setTimezone(auth()->user()->timezone)->toDateTimeString();
                })->asHtml(),
        ];
    }
}
