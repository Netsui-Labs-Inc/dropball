<?php

namespace App\Http\Livewire;

use Bavix\Wallet\Models\Transaction;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

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
        if (! $this->confirmed) {
            $query->where('confirmed', false);
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


        return $query;
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        $user = auth()->user();
        $columns = [
            Column::make(__('Transaction ID'), 'id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    return "#".$row->id;
                })->asHtml(),
            Column::make(__('Wallet'), 'wallet')
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->wallet->slug == 'default' ? 'badge-success' : 'badge-info';

                    return "<span class='badge $class'> {$row->wallet->name}</span>";
                })->asHtml(),
            Column::make(__('Type'), 'type')
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
            Column::make(__('Confirmed'), 'confirmed')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->confirmed ? 'badge-success': 'badge-warning';
                    $confirmed = $row->confirmed ? 'confirmed': 'pending';

                    return "<span class='badge $class'>$confirmed</span>";
                })->asHtml(),
            Column::make(__('Created at'), 'created_at')
                ->sortable(),
        ];

        if ($this->action) {
            $columns[] = Column::make(__('Action'))
                ->format(function ($value, $column, Transaction $row) {
                    return view('backend.wallet.action', ['transaction' => $model]);
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
