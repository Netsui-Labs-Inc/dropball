<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\CommissionRate\Http\Services\CommissionRatesConversion;
use App\Domains\Hub\Models\Hub;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class BettingRoundsTable.
 */
class SubAgentsTable extends DataTableComponent
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
    public $user;
    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */
    public function mount($status = 'active'): void
    {
        $this->status = $status;
        $this->user = auth()->user();
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = User::role('Master Agent')->whereNotNull('referred_by');

        if ($this->user->hasRole('Master Agent')) {
            $query->where('referred_by', $this->user->id);
        }

        if ($this->user->hasRole('Virtual Hub')) {
            $hub = Hub::where('admin_id', $this->user->id)->get()->first();
            $query->where('hub_id',$hub->id);
        }

        if ($this->status === 'unverified') {
            return $query->whereNull('email_verified_at');
        }

        $query->whereNotNull('email_verified_at');

        return $query->onlyActive()->latest();
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        return $this->setColumns();
    }

    private function setColumns()
    {

        $firstSetOfColumn = [
            Column::make(__('Name'))
                ->searchable()
                ->sortable(),
            Column::make(__('E-mail'), 'email')
                ->searchable()
                ->sortable(),
            Column::make(__('rate'), 'commission_rate')
                ->sortable()
                ->format(function ($value, $column, User $row) {
                    $commissionRateConversion = new CommissionRatesConversion($row);
                    $agentCommissionRate = $commissionRateConversion->convertAgent()->agentCommissionRate();
                    return number_format($agentCommissionRate, 4) . '%';
                })->asHtml(),
            Column::make(__('Players'))
                ->format(function ($value, $column, User $row) {
                    return User::where('referred_by', $row->id)->get()->count();
                })->asHtml(),
            Column::make(__('Balance'))
                ->format(function ($value, $column, User $row) {
                    return number_format($row->balanceFloat, 2);
                })->asHtml(),
        ];

        if ($this->user->hasRole('Virtual Hub'))
        {
            array_push($firstSetOfColumn,
                            Column::make(__('Master Agent'))
                                ->format(function ($value, $column, User $row) {
                                    return User::where('id', $row->referred_by)->get()->first()->name;
                                    })->asHtml()
                    );
        }

        $secondSetOfColumn = [
            Column::make(__('Created at'), 'created_at')
                ->sortable()
                ->format(function ($value, $column, User $row) {
                    return $row->created_at->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Actions'))
                ->format(function ($value, $column, User $row) {
                    return view("backend.master-agent.sub-agent.action-list", ['user' => $row]);
                }),
            ];

        return array_merge($firstSetOfColumn, $secondSetOfColumn);
    }
}
