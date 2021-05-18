<?php

namespace App\Http\Livewire;

use App\Domains\BettingRound\Models\BettingRound;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class CommissionsTable extends DataTableComponent
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
    public $model;


    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */
    public function mount($status = 'active', $confirmed = true, $model = null, $action = false, $withUser = false): void
    {
        $this->status = $status;
        $this->model = $model;
        $this->confirmed = $confirmed;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = Transaction::query();

        if (auth()->user()->hasRole('Master Agent') && $this->model) {
            return $this->model->transactions()->whereHas('wallet', fn ($query) => $query->where('slug', 'income-wallet'))->getQuery();
        }

        if ($this->model) {
            return $this->model->transactions()->getQuery();
        }

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
            Column::make(__('Betting Round ID'), )
                ->format(function ($value, $column, Transaction $row) {
                    if (! isset($row->meta['betting_round_id'])) {
                        return "N/A";
                    }
                    $bettingRound = BettingRound::find($row->meta['betting_round_id']);

                    $linkToBettingRound = route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $bettingRound]);

                    return "<a href='$linkToBettingRound'> #".$row->meta['betting_round_id']."</a>";
                })->asHtml(),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->amountFloat < 0 ? 'text-danger': 'text-success';
                    $sign = $row->amountFloat > 0 ? '+' : null;

                    return "<div class='$class'>$sign".number_format($row->amountFloat, 2)."</div>";
                    return "testphp artisan view:clear";
                })->asHtml(),
            Column::make(__('Created at'), 'created_at')
                ->sortable(),
        ];

        if ($this->action) {
            $columns[] = Column::make(__('Action'))
                ->format(function (Transaction $model) {
                    return view('backend.wallet.action', ['transaction' => $model]);
                })->asHtml();
        }

        return $columns;
    }
}
