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
class SubAgentsTable extends TableComponent
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

        if ($user->hasRole('Master Agent')) {
            $query->where('referred_by', $user->id);
        }

        if ($this->status === 'unverified') {
            return $query->whereNull('email_verified_at');
        }

        $query->whereNotNull('email_verified_at');

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
        ];
    }
}
