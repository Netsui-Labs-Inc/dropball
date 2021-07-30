<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class BettingRoundsTable.
 */
class PendingSubAgentsTable extends DataTableComponent
{

    public int $perPage = 10;

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
    public function mount(User $row, $status = 'active'): void
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
                ->format(function ($value, $column, User $row) {
                    return "<a href='".route('admin.master-agents.info', $row)."'>{$row->masterAgent->name}</a>";
                })->asHtml(),
            Column::make(__('Hub'), 'hub_id')
                ->format(function ($value, $column, User $row) {
                    return $row->hub->name;
                })->asHtml(),
            Column::make(__('Created at'), 'created_at')
                ->sortable()
                ->format(function ($value, $column, User $row) {
                    return $row->created_at->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Actions'))
                ->format(function ($value, $column, User $row) {
                    return view("backend.master-agent.sub-agent.action", ['user' => $row]);
                }),
        ];
    }
}
