<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Models\Withdrawal;
use App\Http\Livewire\Services\Filters;
use App\Http\Livewire\Services\WithdrawalQueryFactory;
use Bavix\Wallet\Interfaces\Mathable;
use Bavix\Wallet\Models\Wallet;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class WithdrawalsTable extends DataTableComponent
{
    public $userType;
    private $withdrawalQuery;
    public int $perPage = 10;
    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */
    public function mount(Request $request): void
    {
        $this->userType = $request->get('userType');
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $tableQueryFactory = new WithdrawalQueryFactory();
        $withdrawalQuery = $tableQueryFactory
        ->createWithdrawalRequestTable($this->userType)
        ->getQuery();
        $this->withdrawalQuery = $withdrawalQuery;
        return $this->withdrawalQuery->when($this->getFilter('channel'), function($query, $channel) use ($withdrawalQuery) {
            return $withdrawalQuery->where('channel', $channel);
        })->when($this->getFilter('type'), fn ($query, $term) => $query->search($term))
            ->where('status', 'pending')
            ->latest('withdrawals.created_at');
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
        $withdrawalQuery = $this->withdrawalQuery;
        $columns = [
            Column::make(__('Account Number'), 'withdrawals.account_number')
                ->searchable(function (Builder $query, $searchTerm) use ($withdrawalQuery)  {
                    return $withdrawalQuery->where('withdrawals.account_number', 'like', '%' . $searchTerm . '%');
                })
                ->sortable(function (Builder $query, $direction)  {
                    return $this->sortable('account_number', $direction);
                })
                ->format(function ($value, $column, User $row) {
                    return $row->account_number;
                })->asHtml(),
            Column::make(__('Account Name'), 'withdrawals.account_name')
                ->searchable(function (Builder $query, $searchTerm) use ($withdrawalQuery)  {
                    $withdrawalQuery->orWhere('withdrawals.account_name', 'like', '%' . $searchTerm . '%');
                })
                ->sortable(function (Builder $query, $direction)  {
                    return $this->sortable('account_name', $direction);
                })
                ->format(function ($value, $column, User $row) {
                    return $row->account_name ?? "N/A";
                })->asHtml(),
            Column::make(__('Channel'), 'withdrawals.channel')
                ->sortable(function (Builder $query, $direction)  {
                    return $this->sortable('channel', $direction);
                })
                ->format(function ($value, $column, User $row) {
                    return $row->channel;
                })->asHtml(),
            Column::make(__('Amount'), 'amount')
                ->sortable(function (Builder $query, $direction)  {
                    return $this->sortable('amount', $direction);
                })
                ->format(function ($value, $column, User $row) {
                    return "<div class='text-danger'>-".number_format($row->amount, 2)."</div>";
                })->asHtml(),
            Column::make(__('Requested at'), 'withdrawals.created_at')
                ->sortable(function (Builder $query, $direction)  {
                    return $this->sortable('withdrawals.created_at', $direction);
                })
                ->format(function ($value, $column, User $row) {
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function ($value, $column, User $row) {
                    $tableQueryFactory = new WithdrawalQueryFactory();
                    $withdrawalRequest = $tableQueryFactory->createWithdrawalRequestTable($this->userType);
                    return $withdrawalRequest->getView($row);
                })->asHtml()
        ];

        return $columns;
    }

    private function sortable($column, $direction)
    {
        $this->withdrawalQuery->getQuery()->orders = null;
        return $this->withdrawalQuery->orderBy($column, $direction);
    }
}
