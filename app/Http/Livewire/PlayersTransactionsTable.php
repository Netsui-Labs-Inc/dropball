<?php

namespace App\Http\Livewire;

use App\Domains\BettingRound\Models\BettingRound;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class PlayersTransactionsTable extends DataTableComponent
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
    public function mount($status = 'active', $confirmed = false, $user = null, $action = false, $withUser = false, $wallet = 'default'): void
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
        if ($this->confirmed) {
            $query->where('confirmed', true);
        }
        $query->orderBy('created_at', 'desc');
        $query->whereHas('wallet', fn ($query) => $query->where('slug', $this->wallet));
        $query->whereHasMorph('payable', 'App\Domains\Auth\Models\User', function ($query) {
            $query->whereHas('roles', function ($query) {
                return $query->where('name', 'Player');
            });
            if (auth()->user()->hasRole('Master Agent')) {
                $query->where('referred_by', auth()->user()->id);
            }
            return $query;
        });
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
                ->format(function ($value, $column, Transaction $row) {
                    return "#".$row->id;
                })->asHtml(),
            Column::make(__('Player'), 'payable')
                ->format(function ($value, $column, Transaction $row) {
                    return $row->payable->name;
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
