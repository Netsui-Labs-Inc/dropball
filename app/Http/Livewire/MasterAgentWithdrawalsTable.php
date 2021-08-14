<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Domains\Wallet\Models\Withdrawal;
use App\Http\Livewire\Action\Filters;
use Bavix\Wallet\Interfaces\Mathable;
use Bavix\Wallet\Models\Wallet;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

class MasterAgentWithdrawalsTable extends DataTableComponent
{
    public $action;
    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];

    public function mount($action = false): void
    {
        $this->action = $action;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = Withdrawal::query();

        if(auth()->user()->hasRole('Virtual Hub')) {
            $query->where('reviewer_id', auth()->user()->hub->admin_id);
        }

        return $query->when($this->getFilter('channel'), fn ($query, $term) => $query->search($term))
            ->where('status', 'pending')
            ->latest('created_at');
    }

    /**
     * @return array
     */
    public function filters(): array
    {
        $filter = new Filters();
        return $filter->channel()->getFilters();
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        $columns = [
            Column::make(__('Withdrawal ID'), 'id')
                ->sortable()
                ->format(function (Withdrawal $row) {
                    return "#".$row->id;
                })->asHtml(),
            Column::make(__('Account Number'), 'account_number')
                ->searchable()
                ->sortable()
                ->format(function (Withdrawal $row) {
                    return $row->account_number;
                })->asHtml(),
            Column::make(__('Account Name'), 'account_name')
                ->searchable()
                ->sortable()
                ->format(function (Withdrawal $row) {
                    return $row->account_name ?? "N/A";
                })->asHtml(),
            Column::make(__('Channel'), 'channel')
                ->sortable(),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function (Withdrawal $row) {
                    return "<div class='text-danger'>-".number_format($row->amountFloat, 2)."</div>";
                })->asHtml(),
            Column::make(__('Created at'), 'created_at')
                ->sortable()
                ->format(function (Withdrawal $row) {
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function (Withdrawal $row) {
                    return view('backend.wallet.withdrawal.action', [
                        'withdrawal' => $row,
                        'route'      => 'admin.master-agents.withdrawals.show'
                    ]);
                })->asHtml()
        ];

        return $columns;
    }
}
