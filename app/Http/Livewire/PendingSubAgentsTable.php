<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class BettingRoundsTable.
 */
class PendingSubAgentsTable extends TableComponent
{
    use HtmlComponents;

    public $perPage = 10;

    /**
     * @var string
     */
    public $sortField = 'id';

    /**
     * @var string
     */
    public $status;
    public $admin;

    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */
    public function mount($status = 'active'): void
    {
        $this->status = $status;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $user = auth()->user();

        $query = User::role('Master Agent')->whereNotNull('referred_by');


        return $query->whereNull('email_verified_at');
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('ID'), 'id')
                ->searchable()
                ->sortable(),
            Column::make(__('Name'))
                ->searchable()
                ->sortable(),
            Column::make(__('E-mail'), 'email')
                ->searchable()
                ->sortable(),
            Column::make(__('Referred by'), 'referred_by')
                ->format(function (User $model) {
                    return $this->html("<a href='".route('admin.master-agents.info', $model)."'>{$model->masterAgent->name}</a>");
                }),
            Column::make(__('Hub'), 'hub_id')
                ->format(function (User $model) {
                    return $this->html($model->hub->name);
                }),
            Column::make(__('Created at'), 'created_at')
                ->searchable()
                ->sortable(),
            Column::make(__('Actions'))
                ->format(function (User $model) {
                    return view("backend.master-agent.sub-agent.action", ['user' => $model]);
                }),
        ];
    }
}
