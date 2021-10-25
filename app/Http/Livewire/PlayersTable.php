<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use Auth;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Illuminate\Support\Facades\DB;
use Rappasoft\LaravelLivewireTables\Views\Filter;

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
        $query = User::role('Player');

        if(Auth::user()->hasRole('Master Agent'))
        {
            return $this->getPlayersWithFilters($user);

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

    private function getPlayersWithFilters($user)
    {
        if($user->referred_by === null)
        {
            $query = User::where('referred_by', $user->id);

            if($this->getFilter('type'))
            {
               return $this->getPlayersFromFilter($user, $query);
            }

            $query->whereHas('roles', function ($query) {
                return $query->where('name', 'Player');
            });


            if ($this->status === 'unverified') {
                return $query->where('email_verified_at', null);
            }

            return $query;
        }

        $query =  $user->referrals()->getQuery();

        if ($this->status === 'unverified') {
            return $query->where('email_verified_at', null);
        }

        return $query->onlyActive();

    }

    private function getPlayersFromFilter($user, $query)
    {
        return $query->when($this->getFilter('type'), function($query, $type) use ($user) {
            if($type === 'agent_players')
            {
                $query = User::role('Master Agent')
                    ->where('users.referred_by', $user->id);

                return $query->join('users as players', 'players.referred_by', '=', 'users.id')
                    ->whereNotNull('players.email_verified_at');
            }
            return $query->whereHas('roles', function ($query) {
                return $query->where('name', 'Player');
            });
        });
    }

      /**
     * @return array
     */
    public function filters(): array
    {

        if(Auth::user()->hasRole('Master Agent'))
        {
            return [
                'type' => Filter::make('Player Type')
                    ->select([
                        'master_agent_players'  => 'My Players',
                        'agent_players'         => 'Agents Players',
                    ]),
            ];
        }
        return [
            '' => Filter::make('Player Type')
                    ->select([
                        ''  => 'Any',
                ]),
            ];
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('Name'))
                ->searchable()
                ->sortable(),
            Column::make(__('E-mail'), 'email')
                ->searchable()
                ->sortable(),
            Column::make(__('Balance'))
                ->format(function ($value, $column, User $row) {
                    return number_format($row->balanceFloat, 2);
                })->asHtml(),
            Column::make(__('Referred By'))
                ->format(function ($value, $column, User $row) {
                    $referredBy = User::where('id', $row->referred_by)->first();
                    return $referredBy->name;
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
