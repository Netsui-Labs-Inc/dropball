<?php

namespace App\Http\Livewire;

use App\Domains\BettingEvent\Models\BettingEvent;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class BettingEventsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'created_at';

    /**
     * @var string
     */
    public $status;

    /**
     * @param  string  $status
     */
    public function mount($status = 'active'): void
    {
        $this->status = $status;
    }

    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = BettingEvent::query();
        if (auth()->user()->hasRole('Bet Admin')) {
            $query->where('bet_admin_id', auth()->user()->id);
        }

        return $query;
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('Event ID'), 'id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, BettingEvent $row) {
                    return '#'.$row->id;
                }),
            Column::make(__('Name'), 'name')
                ->searchable()
                ->sortable(),
            Column::make(__('Schedule'), 'schedule')
                ->sortable(),
            Column::make(__('Actions'))
                ->format(function ($value, $column, BettingEvent $row) {
                    return view('backend.betting-event.includes.actions', ['bettingEvent' => $row]);
                })->asHtml(),
        ];
    }
}
