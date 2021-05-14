<?php

namespace App\Http\Livewire;

use App\Domains\BettingRound\Models\BettingRound;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

class CommissionsTable extends TableComponent
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
                ->format(function (Transaction $model) {
                    return $this->html("#".$model->id);
                }),
            Column::make(__('Betting Round ID'), )
                ->format(function (Transaction $model) {
                    if (! isset($model->meta['betting_round_id'])) {
                        return "N/A";
                    }
                    $bettingRound = BettingRound::find($model->meta['betting_round_id']);

                    $linkToBettingRound = route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $bettingRound]);

                    return $this->html("<a href='$linkToBettingRound'> #".$model->meta['betting_round_id']."</a>");
                }),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function (Transaction $model) {
                    $class = $model->amountFloat < 0 ? 'text-danger': 'text-success';
                    $sign = $model->amountFloat > 0 ? '+' : null;

                    return $this->html("<div class='$class'>$sign".number_format($model->amountFloat, 2)."</div>");
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

        return $columns;
    }
}
