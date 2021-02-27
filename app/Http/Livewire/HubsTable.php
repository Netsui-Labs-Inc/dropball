<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

class HubsTable extends TableComponent
{
    use HtmlComponents;
    /**
     * @var string
     */
    public $sortField = 'id';

    public $sortDirection = 'desc';

    public $perPage = 10;

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
            Column::make(__('ID'), 'id')
                ->searchable()
                ->sortable()
                ->format(function (Hub $model) {
                    return $this->html('#'.$model->id);
                }),
            Column::make(__('Name'), 'name')
                ->searchable()
                ->sortable()
                ->format(function (Hub $model) {
                    return $this->html($model->name);
                }),
            Column::make(__('Admin'), 'admin')
                ->searchable()
                ->sortable()
                ->format(function (Hub $model) {
                    return $this->html($model->admin->name ?? 'N/A');
                }),
            Column::make(__('Credit Balance'), 'name')
                ->format(function (Hub $model) {
                    return $this->html(number_format($model->balanceFloat));
                }),
            Column::make(__('Income Balance'), 'name')
                ->format(function (Hub $model) {
                    return $this->html(number_format($model->getWallet('income-wallet')->balanceFloat ?? 0));
                }),
            Column::make(__('Actions'))
                ->format(function (Hub $model) {
                    return view("backend.hub.action", ['hub' => $model]);
                }),
        ];
    }
}