<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\Role;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class RolesTable.
 */
class RolesTable extends TableComponent
{
    use HtmlComponents;

    /**
     * @var string
     */
    public $sortField = 'name';

    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @return Builder
     */
    public function query(): Builder
    {
        return Role::with('permissions:id,name,description')
            ->withCount('users');
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('Type'), 'type')
                ->sortable()
                ->format(function (Role $model) {
                    return view('backend.auth.role.includes.type', ['role' => $model]);
                }),
            Column::make(__('Name'), 'name')
                ->searchable()
                ->sortable(),
            Column::make(__('Permissions'), )
                ->format(function (Role $model) {
                    return $this->html($model->permissions_label);
                })
                ->searchable(function ($builder, $term) {
                    return $builder->orWhereHas('permissions', function ($query) use ($term) {
                        return $query->where('name', 'like', '%'.$term.'%');
                    });
                }),
            Column::make(__('Number of Users'), 'users_count')
                ->sortable(),
            Column::make(__('Actions'))
                ->format(function (Role $model) {
                    return view('backend.auth.role.includes.actions', ['model' => $model]);
                }),
        ];
    }
}
