<?php

namespace App\Http\Livewire;

use App\Domains\Wallet\Models\WalletTransaction;
use App\Http\Livewire\Services\Filters;
use App\Http\Livewire\Services\TransactionRoleQueryFactory;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class ReviewersTransactionTable extends DataTableComponent
{
    public $action;
    private $transactionsByRole;
    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $transactionFactory = new TransactionRoleQueryFactory();
        $this->transactionsByRole = $transactionFactory->createTransactionTable();
        $query = Transaction::query();
        $query = $this->transactionsByRole->morphToPayable($query);
        return $query->where('confirmed', true)
            ->when($this->getFilter('type'),
            fn ($query, $term) => $query->where('type', $term)
        )->latest('created_at');

    }
    public function filters(): array
    {
        $filter = new Filters();
        return $filter->type()->getFilters();
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        $transactionByRole = $this->transactionsByRole;
        $columns = [
            Column::make(__('Transaction ID'), 'uuid')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    return "#".$row->id;
                })->asHtml(),
            Column::make(__('Name'), 'name')
                ->searchable(function (Builder $query, $searchTerm) use ($transactionByRole) {
                    $transactionByRole->morphToPayable($query, $searchTerm);
                })
                ->format(function ($value, $column, Transaction $row) {
                    return $row->payable->name;
                })->asHtml(),
            Column::make(__('Type'), 'type')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->type == 'deposit' ? 'badge-success' : 'badge-warning';

                    return "<span class='badge $class'> {$row->type}</span>";
                })->asHtml(),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->amountFloat < 0 ? 'text-danger': 'text-success';
                    $sign = $row->amountFloat > 0 ? '+' : null;

                    return "<div class='$class'>$sign".number_format($row->amountFloat)."</div>";
                })->asHtml(),
            Column::make(__('Requested Date'), 'created_at')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Approved Date'), 'updated_at')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function ($value, $column, Transaction $row) {
                    return view('backend.wallet.action', ['transaction' => $row]);
                })
        ];

        return $columns;
    }
}
