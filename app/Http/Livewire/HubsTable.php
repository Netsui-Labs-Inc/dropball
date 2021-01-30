<?php

namespace App\Http\Livewire;

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
            Column::make(__('Hub ID'), 'id')
                ->searchable()
                ->sortable()
                ->format(function (Hub $model) {
                    return $this->html('#'.$model->id);
                }),
        ];
    }
}
