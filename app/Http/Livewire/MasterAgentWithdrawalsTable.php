<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Models\Withdrawal;
use Bavix\Wallet\Interfaces\Mathable;
use Bavix\Wallet\Models\Wallet;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

class MasterAgentWithdrawalsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'created_at';
    public int $perPage = 10;
    /**
     * @var string
     */
    public $status;
    public $user;
    public $reviewer;
    public $confirmed;
    public $action;
    public $withUser;
    public $wallet;
    public $model;
    public $excludeBetTransactions;


    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */
    public function mount($status = null, $user = null, $reviewer = null, $action = false): void
    {
        $this->status = $status;
        $this->user = $user;
        $this->reviewer = $reviewer;
        $this->action = $action;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = Withdrawal::query();
        $authUser = auth()->user();
        if($this->status) {
            $query->where('status', $this->status);
        }
        $query->where('status', 'pending');

        if($authUser->hasRole('Virtual Hub')) {
            $hub = $authUser->hub;
            $query->where('reviewer_id', $hub->admin_id);
        }

        $query->when($this->getFilter('status'), fn ($query, $status) => $query->where('status', $status));

        return $query;
    }

    /**
     * @return array
     */
    public function filters(): array
    {
        return [
            'status' => Filter::make('Type')
                ->select([
                    '' => 'All',
                    'pending' => 'Pending',
                    'completed' => 'Completed',
                    'cancelled' => 'Cancelled',

                ]),
        ];
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        $columns = [
            Column::make(__('Withdrawal ID'), 'id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    return "#".$row->id;
                })->asHtml(),
            Column::make(__('Channel'), 'channel')
                ->sortable(),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    return "<div class='text-danger'>-".number_format($row->amountFloat, 2)."</div>";
                })->asHtml(),
            Column::make(__('Status'), 'status')
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    if($row->status == Withdrawal::COMPLETED) {
                        $class = 'badge-success';
                    }elseif ($row->status == Withdrawal::CANCELLED) {
                        $class = 'badge-danger';
                    } else {
                        $class = 'badge-warning';
                    }
                    return "<span class='badge $class'>$row->status</span>";
                })->asHtml(),
            Column::make(__('Created at'), 'created_at')
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function ($value, $column, Withdrawal $row) {
                    return view('backend.wallet.withdrawal.action', [
                        'withdrawal' => $row,
                        'route'      => 'admin.master-agents.withdrawals.show'
                    ]);
                })->asHtml()
        ];

        return $columns;
    }
}
