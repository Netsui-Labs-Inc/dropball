<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class BettingRoundsTable.
 */
class MasterAgentsTable extends TableComponent
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

        $query = User::whereHas('roles', function ($query) {
            return $query->where('name', 'Master Agent');
        });

        if ($user->hasRole('Virtual Hub')) {
            $hub = Hub::where('admin_id', $user->id)->first();
            if ($hub) {
                $query->where('hub_id', $hub->id);
            }
        }


        if ($this->status === 'unverified') {
            return $query->where('email_verified_at', null);
        }

        if ($this->status === 'deleted') {
            return $query->onlyTrashed();
        }

        if ($this->status === 'deactivated') {
            return $query->onlyDeactivated();
        }

        return $query->onlyActive();
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
            Column::make(__('Commission rate'), 'commission_rate')
                ->searchable()
                ->sortable(),
            Column::make(__('Verified'))
                ->format(function (User $model) {
                    return view('backend.auth.user.includes.verified', ['user' => $model]);
                })
                ->sortable(function ($builder, $direction) {
                    return $builder->orderBy('email_verified_at', $direction);
                }),
            Column::make(__('Balance'))
                ->format(function (User $model) {
                    return $this->html(number_format($model->balanceFloat));
                }),
            Column::make(__('Actions'))
                ->format(function (User $model) {
                    return view("backend.master-agent.action", ['user' => $model]);
                }),
        ];
    }
}
