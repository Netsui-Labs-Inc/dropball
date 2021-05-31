<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class BettingRoundsTable.
 */
class PlayersTable extends DataTableComponent
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
    public function mount($status = 'active', $admin = false): void
    {
        $this->status = $status;
        $this->admin = $admin;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        if ($this->admin && $this->status === 'unverified') {
            return User::role('Player')->whereNull('email_verified_at');
        }
        if ($this->admin) {
            return User::role('Player')->onlyActive();
        }
        $user = auth()->user();
        $query = $user->referrals()->getQuery();


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
            Column::make(__('Verified'))
                ->format(function ($value, $column, User $row) {
                    return view('backend.auth.user.includes.verified', ['user' => $row]);
                })
                ->sortable(function ($builder, $direction) {
                    return $builder->orderBy('email_verified_at', $direction);
                }),
            Column::make(__('Balance'))
                ->format(function ($value, $column, User $row) {
                    return number_format($row->balanceFloat);
                })->asHtml(),
            Column::make(__('Created at'), 'created_at')
                ->sortable()
                ->format(function ($value, $column, User $row) {
                    return $row->created_at->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Actions'))
                ->format(function ($value, $column, User $row) {
                    return view("backend.player.action", ['user' => $row]);
                }),
        ];
    }
}
