<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\BetCommission;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

class UserCommissionsTable extends TableComponent
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

    public $user;

    /**
     * @param BettingRound $bettingRound
     */
    public function mount($user)
    {
        $this->user = $user;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        return $this->user->commissions()->getQuery();
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
            Column::make(__('Bet Status'), 'id')
                ->searchable()
                ->format(function (BetCommission $model) {
                    return $this->html($model->bet->statusLabel() ?? 'N/A');
                }),
            Column::make(__('Player'), 'id')
                ->searchable()
                ->sortable()
                ->format(function (BetCommission $model) {
                    return $this->html($model->bet->user->name ?? 'N/A');
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
