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
    private $withdrawalRequest;
    public $userType;
    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */
    public function mount(WithdrawalQueryFactory $tableQueryFactory, Request $request): void
    {
        $this->userType = $request->get('userType');
        $this->withdrawalRequest = $tableQueryFactory->createWithdrawalRequestTable($this->userType);
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $tableQueryFactory = new WithdrawalQueryFactory();
        $query = $tableQueryFactory
            ->createWithdrawalRequestTable($this->userType)
            ->getQuery();
        return $query->when($this->getFilter('channel'), fn ($query, $term) => $query->search($term))
            ->when($this->getFilter('type'), fn ($query, $term) => $query->search($term))
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
        $withdrawalRequest = $this->withdrawalRequest;
        $columns = [
            Column::make(__('Account Number'), 'withdrawals.account_number')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, User $row) {
                    return $row->account_number;
                })->asHtml(),
            Column::make(__('Account Name'), 'account_name')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, User $row) {
                    return $row->account_name ?? "N/A";
                })->asHtml(),
            Column::make(__('Channel'), 'channel')
                ->sortable(),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function ($value, $column, User $row) {
                    return "<div class='text-danger'>-".number_format($row->amount, 2)."</div>";
                })->asHtml(),
            Column::make(__('Requested at'), 'withdrawals.created_at')
                ->sortable()
                ->format(function ($value, $column, User $row) {
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function ($value, $column, User $row) use ($withdrawalRequest) {
                    return $withdrawalRequest->getView($row);
                })->asHtml()
        ];

        return $columns;
    }
}
