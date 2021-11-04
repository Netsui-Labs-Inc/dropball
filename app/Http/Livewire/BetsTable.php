<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

class BetsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'id';

    public $sortDirection = 'desc';

    public int $perPage = 10;

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

        return $query->when($this->getFilter('bet'), fn ($query, $bet) => $query->where('bet', $bet));
    }

    /**
     * @return array
     */
    public function filters(): array
    {
        return [
            'bet' => Filter::make('Bet')
                ->select([
                    '' => 'All',
                    Bet::PUTI => 'WALA',
                    Bet::PULA => 'MERON',
                    Bet::JACKPOT => 'JACKPOT',
                ]),
        ];
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
                ->format(function ($value, $column, Bet $row) {
                    return '#'.$row->bettingRound->bettingEvent->id."/".$row->bettingRound->queue;
                })->asHtml(),
            Column::make(__('Player'), 'user_id')
                ->searchable()
                ->sortable()
                ->hideIf(! is_null($this->user->id ?? null))
                ->format(function ($value, $column, Bet $row) {
                    return "<a href=".route('admin.auth.user.show', $row->user).">".$row->user->name."</a>";
                })->asHtml(),
            Column::make(__('Bet'), 'bet')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Bet $row) {
                    return $row->betLabel();
                })->asHtml(),
            Column::make(__('Amount'), 'bet_amount')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Bet $row) {
                    return number_format($row->bet_amount, 0);
                })->asHtml(),
            Column::make(__('Status'), 'status')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Bet $row) {
                    return $row->statusLabel();
                })->asHtml(),
            Column::make(__('Gain/Loss'), 'gain_loss')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Bet $row) {
                    return $row->gainLossLabel();
                })->asHtml(),
            Column::make(__('Previous Balance'), 'previous_balance')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Bet $row) {
                    return number_format($row->previous_balance, 0);
                })->asHtml(),
            Column::make(__('New Balance'), 'new_balance')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Bet $row) {
                    return number_format($row->new_balance , 0);
                })->asHtml(),
            Column::make(__('Datetime'), 'created_at')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Bet $row) {
                    return $row->created_at->setTimezone($row->user->timezone)->toDateTimeString();
                })->asHtml(),

        ];
    }
}
