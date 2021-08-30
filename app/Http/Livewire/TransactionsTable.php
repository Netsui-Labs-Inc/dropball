<?php

namespace App\Http\Livewire;

use App\Http\Livewire\Services\Filters;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

class TransactionsTable extends DataTableComponent
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
    /**
     * @var
     */
    public $user;
    public $confirmed;
    public $action;
    public $withUser;
    public $wallet;
    public $model;
    public $excludeBetTransactions;
    private $transactionStatus = [
            'pending'  => 0,
            'complete' => 1
        ];

    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */
    public function mount($status = 'active', $confirmed = true, $user = null, $action = false, $withUser = false, $model = false, $wallet = null, $excludeBetTransactions = false): void
    {
        $this->status = $status;
        $this->user = $user;
        $this->confirmed = $confirmed;
        $this->action = $action;
        $this->withUser = $withUser;
        $this->model = $model;
        $this->wallet = $wallet;
        $this->excludeBetTransactions = $excludeBetTransactions;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $user = auth()->user();
        $query = Transaction::query();

        if ($this->user) {
            $query = $this->user->transactions()->getQuery();
        }
        if ($this->model) {
            $query = $this->model->transactions()->getQuery();
        }
        if ($this->wallet) {
            $query->whereHas('wallet',  fn ($query) => $query->where('slug', $this->wallet));
        }

        if ($this->excludeBetTransactions) {
            $query->whereNull('meta->bettingRound');
        }

        $query->when($this->getFilter('status'),
            fn ($query, $term) => $query->where('confirmed', $this->transactionStatus[$term])
        );

        $query->when($this->getFilter('type'),
            fn ($query, $term) => $query->where('type', $term)
        );
        $query->latest('created_at');
        return $query;
    }
    /**
     * @return array
     */
    public function filters(): array
    {
        $filters = new Filters();
        return $filters->type()->status()->getFilters();
    }
    /**
     * @return array
     */
    public function columns(): array
    {
        $user = auth()->user();
        $columns = [
            Column::make(__('Transaction ID'), 'id')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    return "#".$row->id;
                })->asHtml(),
            Column::make(__('Type'), 'type')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->type == 'deposit' ? 'badge-success' : 'badge-warning';
                    return "<span class='badge $class'> {$row->type}</span>";
                })->asHtml(),
            Column::make(__('Amount'), 'amount')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->amountFloat < 0 ? 'text-danger': 'text-success';
                    $sign = $row->amountFloat > 0 ? '+' : null;

                    return "<div class='$class'>$sign".number_format($row->amountFloat)."</div>";
                })->asHtml(),
            Column::make(__('STATUS'), 'confirmed')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->confirmed ? 'badge-success': 'badge-warning';
                    $confirmed = $row->confirmed ? 'confirmed': 'pending';

                    return "<span class='badge $class'>$confirmed</span>";
                })->asHtml(),
            Column::make(__('Requested at'), 'created_at')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
             Column::make(__('Approved at'), 'updated_at')
                 ->sortable()
                 ->format(function ($value, $column, Transaction $row) {
                     if ($row->created_at->format('Y-m-d H:i:s') === $row->updated_at->format('Y-m-d H:i:s')) {
                         return 'N/A';
                     }
                     return (new Carbon($row->updated_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                 })->asHtml()
        ];

        if ($this->action) {
            $columns[] = Column::make(__('Action'))
                ->format(function ($value, $column, Transaction $row) {
                    return view('backend.wallet.action', ['transaction' => $row]);
                })->asHtml();
        }
        if ($this->withUser) {
            array_shift($columns);
            array_unshift(
                $columns,
                Column::make(__('User'))
                    ->format(function ($value, $column, Transaction $row) {
                        return $row->payable->name;
                    })->asHtml()
            );
            array_unshift(
                $columns,
                Column::make(__('Transaction ID'), 'uuid')
                    ->searchable()
                    ->sortable()
                    ->format(function ($value, $column, Transaction $row) {
                        return "#".$row->id;
                    })->asHtml(),
            );
        }

        return $columns;
    }
}
