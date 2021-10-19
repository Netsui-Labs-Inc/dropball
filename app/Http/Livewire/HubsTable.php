<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class HubsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'id';

    public $sortDirection = 'desc';

    public int $perPage = 10;

    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = Hub::query();

        return $query;
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('Name'), 'name')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Hub $row) {
                    return $row->name;
                })->asHtml(),
            Column::make(__('Admin'), 'admin_id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Hub $row) {
                    return $row->admin->name ?? 'N/A';
                })->asHtml(),
            Column::make(__('Commission Rate'), 'commission_rate')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Hub $row) {
                    $hubRate = number_format($row->commission_rate, 1);
                    return "$hubRate%";
                })->asHtml(),
            Column::make(__('Credit Balance'), 'name')
                ->format(function ($value, $column, Hub $row) {
                    return number_format($row->balanceFloat, 2);
                })->asHtml(),
            Column::make(__('Income Balance'), 'name')
                ->format(function ($value, $column, Hub $row) {
                    return number_format($row->getWallet('income-wallet')->balanceFloat ?? 0, 2);
                })->asHtml(),
            Column::make(__('Agents'), 'agents')
                ->format(function ($value, $column,Hub $row) {
                    return $row->user()->whereHas('roles', function($query) {
                        $query->where('name', 'Master Agent');
                    })->get()->count();
                })->asHtml(),
            Column::make(__('Players'), 'players')
                ->format(function ($value, $column, Hub $row) {
                    return $row->user()->whereHas('roles', function($query) {
                        $query->where('name', 'Player');
                    })->get()->count();
                })->asHtml(),
            Column::make(__('Actions'))
                ->format(function ($value, $column, Hub $row) {
                    return view("backend.hub.action", ['hub' => $row]);
                }),
        ];
    }
}
