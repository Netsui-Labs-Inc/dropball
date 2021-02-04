<?php

namespace App\Http\Livewire;

use App\Domains\BettingRound\Models\BettingRound;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

class MasterAgentTransactionsTable extends TableComponent
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

    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */
    public function mount($status = 'active', $confirmed = true, $user = null, $action = false, $withUser = false, $wallet = 'default'): void
    {
        $this->status = $status;
        $this->user = $user;
        $this->confirmed = $confirmed;
        $this->action = $action;
        $this->withUser = $withUser;
        $this->wallet = $wallet;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = Transaction::query();

        if ($this->user) {
            $query = $this->user->transactions()->getQuery();
        }
        if (! $this->confirmed) {
            $query->where('confirmed', false);
        }
        $query->whereHas('wallet', fn ($query) => $query->where('slug', $this->wallet));

        return $query;
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        $columns = [
            Column::make(__('Transaction ID'), 'uuid')
                ->searchable()
                ->sortable()
                ->format(function (Transaction $model) {
                    return $this->html("#".$model->id);
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
                Column::make(__('BettingRound'))
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
        if ($this->wallet === 'income-wallet') {
            $transactionIdCol = array_shift($columns);
            array_unshift(
                $columns,
                Column::make(__('Betting Round'))
                    ->format(function (Transaction $model) {
                        if (! isset($model->meta['betting_round_id'])) {
                            return "N/A";
                        }
                        $bettingRound = BettingRound::find($model->meta['betting_round_id']);

                        $linkToBettingRound = route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $bettingRound]);

                        return $this->html("<a href='$linkToBettingRound'> #".$model->meta['betting_round_id']."</a>");
                    }),
            );
            array_unshift($columns, $transactionIdCol);

        }

        return $columns;
    }
}
