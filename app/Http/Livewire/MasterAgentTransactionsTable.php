<?php

namespace App\Http\Livewire;

use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\Hub\Models\Hub;
use App\Http\Livewire\Action\Filters;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

class MasterAgentTransactionsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'id';
    public $sortDirection = 'desc';
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
        $query->where('confirmed', true);
        $this->morphToPayable($query, $authUser, $user);
        if ($this->wallet) {
            $query->whereHas('wallet', fn ($query) => $query->where('slug', $this->wallet));
        }

        if (! $this->confirmed) {
            $query->where('confirmed', false);
        }
        $query->when($this->getFilter('type'),
            fn ($query, $term) => $query->where('type', $term)
        );
        $query->latest('created_at');
        return $query;
    }
    public function morphToPayable($query, $authUser, $user, $searchTerm = null)
    {
        return $query->whereHasMorph('payable', 'App\Domains\Auth\Models\User', function ($query) use ($authUser, $user, $searchTerm) {
            $query->where('name', 'like', '%'. $searchTerm . '%');
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
            return $query;
        });
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
        $columns = [
            Column::make(__('Transaction ID'), 'uuid')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    return "#".$row->id;
                })->asHtml(),
            Column::make(__('Player'), 'payable')
                ->searchable(function (Builder $query, $searchTerm) {
                    $authUser = auth()->user();
                    $this->morphToPayable($query, $authUser, $this->user, $searchTerm);
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
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->amountFloat < 0 ? 'text-danger': 'text-success';
                    $sign = $row->amountFloat > 0 ? '+' : null;

                    return "<div class='$class'>$sign".number_format($row->amountFloat)."</div>";
                })->asHtml(),
            Column::make(__('Created at'), 'created_at')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml()
        ];

        if ($this->action) {
            $columns[] = Column::make(__('Action'))
                ->format(function ($value, $column, Transaction $row) {
                    return view('backend.wallet.action', ['transaction' => $row]);
                });
        }
        if ($this->wallet === 'income-wallet') {
            $transactionIdCol = array_shift($columns);
            array_unshift(
                $columns,
                Column::make(__('Betting Round'))
                    ->format(function ($value, $column, Transaction $row) {
                        if (! isset($row->meta['betting_round_id'])) {
                            return "N/A";
                        }
                        $bettingRound = BettingRound::find($row->meta['betting_round_id']);

                        $linkToBettingRound = route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $bettingRound]);

                        return "<a href='$linkToBettingRound'> #".$row->meta['betting_round_id']."</a>";
                    })->asHtml(),
            );
            array_unshift($columns, $transactionIdCol);
        }

        return $columns;
    }

}
