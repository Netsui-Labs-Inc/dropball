<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\CommissionRate\Http\Services\CommissionRatesConversion;
use App\Domains\Hub\Models\Hub;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
/**
 * Class BettingRoundsTable.
 */
class MasterAgentsTable extends DataTableComponent
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
    public $agentlabel = 'Master Agents';
    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */

    public function mount(Request $request, $status = 'active'): void
    {
        Session::put('agent', $request->get('agent'));
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
        $query = $this->filterAgent($query);

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

    private function filterAgent($query)
    {
        if (Session::get('agent')  === '1')
        {
            $this->agentlabel = 'Agents';
           return $query->where('referred_by','!=', null);
        }
        return $query->where('referred_by', null);
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
            Column::make(__('Commission rate'), 'commission_rate')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, User $row) {
                    $commissionRateConversion = new CommissionRatesConversion($row);
                    return number_format($commissionRateConversion
                        ->convertMasterAgent()
                        ->masterAgentCommissionRate(), 2) . '%'; 
                })->asHtml(),
            Column::make(__('Balance'))
                ->format(function ($value, $column, User $row) {
                    return number_format($row->balanceFloat, 2);
                })->asHtml(),
            Column::make(__('Players'))
                ->format(function ($value, $column, User $row) {
                    return User::role('Player')
                        ->where('referred_by', $row->id)
                        ->onlyActive()->count();
                })->asHtml(),
            Column::make(__('Created at'), 'created_at')
                ->sortable()
                ->format(function ($value, $column, User $row) {
                    return $row->created_at->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Actions'))
                ->format(function ($value, $column, User $row) {
                    return view("backend.master-agent.action", ['user' => $row]);
                }),
        ];
    }
}
