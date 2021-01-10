<?php

namespace App\Http\Livewire;

use App\Domains\BettingEvent\Models\BettingEvent;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

class BettingEventsTable extends TableComponent
{
    use HtmlComponents;
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
                ->format(function (BettingEvent $model) {
                    return $this->html('#'.$model->id);
                }),
            Column::make(__('Name'), 'name')
                ->searchable()
                ->sortable(),
            Column::make(__('Schedule'), 'schedule')
                ->sortable(),
            Column::make(__('Actions'))
                ->format(function (BettingEvent $model) {
                    return view('backend.betting-event.includes.actions', ['bettingEvent' => $model]);
                }),
        ];
    }
}
