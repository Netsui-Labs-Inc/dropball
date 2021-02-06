<?php

namespace App\Http\Livewire;

use Bavix\Wallet\Models\Transaction;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

class TransactionsTable extends TableComponent
{
    use HtmlComponents;
    /**
     * @var string
     */
    public $sortField = 'id';
    public $sortDirection = 'desc';
    public $perPage = 10;
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
            Column::make(__('Transaction ID'), 'uuid')
                ->searchable()
                ->sortable()
                ->format(function (Transaction $model) {
                    return $this->html("#".$model->id);
                }),
            Column::make(__('Wallet'), 'wallet')
                ->format(function (Transaction $model) {
                    $class = $model->wallet->slug == 'default' ? 'badge-success' : 'badge-info';

                    return $this->html("<span class='badge $class'> {$model->wallet->name}</span>");
                }),
            Column::make(__('Type'), 'type')
                ->sortable()
                ->format(function (Transaction $model) {
                    $class = $model->type == 'deposit' ? 'badge-success' : 'badge-warning';

                    return $this->html("<span class='badge $class'> {$model->type}</span>");
                }),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function (Transaction $model) {
                    $class = $model->amountFloat < 0 ? 'text-danger': 'text-success';
                    $sign = $model->amountFloat > 0 ? '+' : null;

                    return $this->html("<div class='$class'>$sign".number_format($model->amountFloat)."</div>");
                }),
            Column::make(__('Confirmed'), 'confirmed')
                ->sortable()
                ->format(function (Transaction $model) {
                    $class = $model->confirmed ? 'badge-success': 'badge-warning';
                    $confirmed = $model->confirmed ? 'confirmed': 'pending';

                    return $this->html("<span class='badge $class'>$confirmed</span>");
                }),
            Column::make(__('Created at'), 'created_at')
                ->sortable(),
        ];

        if ($this->action) {
            $columns[] = Column::make(__('Action'))
                ->format(function (Transaction $model) {
                    return view('backend.wallet.action', ['transaction' => $model]);
                });
        }
        if ($this->withUser) {
            array_shift($columns);
            array_unshift(
                $columns,
                Column::make(__('User'))
                    ->format(function (Transaction $model) {
                        return $this->html($model->payable->name);
                    })
            );
            array_unshift(
                $columns,
                Column::make(__('Transaction ID'), 'uuid')
                    ->searchable()
                    ->sortable()
                    ->format(function (Transaction $model) {
                        return $this->html("#".$model->id);
                    })
            );
        }

        return $columns;
    }
}
