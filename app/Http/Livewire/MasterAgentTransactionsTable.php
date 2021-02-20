<?php

namespace App\Http\Livewire;

use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\Hub\Models\Hub;
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
    public function mount($status = 'active', $confirmed = true, $user = null, $action = false, $withUser = false, $wallet = null): void
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
        $authUser = auth()->user();
        $user = $this->user;
        $query = $query->whereHasMorph('payable', 'App\Domains\Auth\Models\User', function ($query) use ($authUser, $user) {
            if ($authUser->hasRole('Virtual Hub')) {
                $hub = Hub::where('admin_id', $authUser->id)->first();
                $query->where('hub_id', $hub->id);
            }
            if ($user) {
                $query->where('id', $user->id);
            }
            $query->whereHas('roles', function ($query) {
                return $query->where('name', 'Master Agent');
            });
        });

        if ($this->wallet) {
            $query->whereHas('wallet', fn ($query) => $query->where('slug', $this->wallet));
        }

        if (! $this->confirmed) {
            $query->where('confirmed', false);
        }

        return $query;
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        $authUser = auth()->user();
        if ($authUser->hasRole('Admins')) {
            $columns = $this->defaultColumns();
        }

        if ($this->user) {
            $columns = $this->userWalletColumns();
        }

        if ($this->wallet === 'income-wallet' && $this->confirmed) {
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

        if ($this->action) {
            $columns[] = Column::make(__('Action'))
                ->format(function (Transaction $model) {
                    return view('backend.wallet.action', ['transaction' => $model]);
                });
        }

        return $columns;
    }

    public function userWalletColumns()
    {
        return [
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
    }


    public function defaultColumns()
    {
        return [
            Column::make(__('Transaction ID'), 'uuid')
                ->searchable()
                ->sortable()
                ->format(function (Transaction $model) {
                    return $this->html("#".$model->id);
                }),
            Column::make(__('Agent'), 'payable')
                ->format(function (Transaction $model) {
                    return $this->html($model->payable->name);
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
    }
}
