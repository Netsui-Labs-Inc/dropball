<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
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
        return $this->bettingRound->activityLogs()->getQuery();
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
