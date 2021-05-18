<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\BetCommission;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class BetCommissionsTable extends DataTableComponent
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

    public $bettingRound;

    /**
     * @param BettingRound $bettingRound
     */
    public function mount(BettingRound $bettingRound = null): void
    {
        $this->bettingRound = $bettingRound;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $bettingRound = $this->bettingRound;
        $query = BetCommission::whereHas('bet', function ($query) use ($bettingRound) {
            return $query->where('betting_round_id', $bettingRound->id);
        });

        return $query;
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('Bet ID'), 'id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, BetCommission $row) {
                    return '#'.$row->bet_id;
                })->asHtml(),
            Column::make(__('Type'), 'type')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, BetCommission $row) {
                    return str_replace("_", " ", ucfirst($row->type));
                })->asHtml(),
            Column::make(__('Commission'), 'type')
                ->format(function ($value, $column, BetCommission $row) {
                    return $row->commission->name;
                }),
            Column::make(__('Player'), 'id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, BetCommission $row) {
                    return $row->bet->user->name ?? 'N/A';
                }),
            Column::make(__('Rate'), 'rate')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, BetCommission $row) {
                    return number_format($row->rate, 2)."%". "({$row->bet->bet_amount})";
                })->asHtml(),
            Column::make(__('Commission Amount'), 'amount')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, BetCommission $row) {
                    return 'PHP '.number_format($row->amount, 2);
                })->asHtml(),
        ];
    }
}
