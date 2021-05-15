<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

class BetsTable extends TableComponent
{
    use HtmlComponents;
    /**
     * @var string
     */
    public $sortField = 'id';

    public $sortDirection = 'desc';

    public $perPage = 10;

    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];

    /** @var BettingRound */
    public $bettingRound;
    public $bet;
    public $user;

    /**
     * @param BettingRound $bettingRound
     */
    public function mount($bettingRound = null, $bet = null, $user = null): void
    {
        $this->bettingRound = $bettingRound;
        $this->bet = $bet;
        $this->user = $user;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = Bet::query();
        if ($this->bettingRound) {
            $query->where('betting_round_id', $this->bettingRound->id);
        }
        if ($this->bet) {
            $query->where('bet', $this->bet);
        }
        if ($this->user) {
            $query->where('user_id', $this->user->id);
        }

        return $query;
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('#Event/Round'), 'id')
                ->searchable()
                ->sortable()
                ->format(function (Bet $model) {
                    return $this->html('#'.$model->bettingRound->bettingEvent->id."/".$model->bettingRound->queue);
                }),
            Column::make(__('Player'), 'user_id')
                ->searchable()
                ->sortable()
                ->hideIf(! is_null($this->user->id ?? null))
                ->format(function (Bet $model) {
                    return $this->html("<a href=".route('admin.auth.user.show', $model->user).">".$model->user->name."</a>");
                }),
            Column::make(__('Bet'), 'bet')
                ->searchable()
                ->sortable()
                ->format(function (Bet $model) {
                    return $this->html($model->betLabel());
                }),
            Column::make(__('Amount'), 'bet_amount')
                ->searchable()
                ->sortable()
                ->format(function (Bet $model) {
                    return $this->html(number_format($model->bet_amount, 0));
                }),
            Column::make(__('Status'), 'status')
                ->searchable()
                ->sortable()
                ->format(function (Bet $model) {
                    return $this->html($model->statusLabel());
                }),
            Column::make(__('Gain/Loss'), 'gain_loss')
                ->searchable()
                ->sortable()
                ->format(function (Bet $model) {
                    return $this->html($model->gainLossLabel());
                }),
            Column::make(__('Datetime'), 'created_at')
                ->searchable()
                ->sortable()
                ->format(function (Bet $model) {
                    return $this->html($model->created_at->setTimezone($model->user->timezone)->toDateTimeString());
                }),

        ];
    }
}
