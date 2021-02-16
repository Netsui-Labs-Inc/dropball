<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\BetCommission;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

class BetCommissionsTable extends TableComponent
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
                ->format(function (BetCommission $model) {
                    return $this->html('#'.$model->bet_id);
                }),
            Column::make(__('Type'), 'type')
                ->searchable()
                ->sortable()
                ->format(function (BetCommission $model) {
                    return $this->html(str_replace("_", " ", ucfirst($model->type)));
                }),
            Column::make(__('Commission'), 'type')
                ->format(function (BetCommission $model) {
                    return $this->html($model->commission->name);
                }),
            Column::make(__('Rate'), 'rate')
                ->searchable()
                ->sortable()
                ->format(function (BetCommission $model) {
                    return $this->html(number_format($model->rate, 0)."%". "({$model->bet->bet_amount})");
                }),
            Column::make(__('Commission Amount'), 'amount')
                ->searchable()
                ->sortable()
                ->format(function (BetCommission $model) {
                    return $this->html('PHP '.number_format($model->amount, 2));
                }),
        ];
    }
}
