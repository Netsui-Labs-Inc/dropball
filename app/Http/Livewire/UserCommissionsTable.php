<?php

namespace App\Http\Livewire;

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
    public $type;

    /**
     * @param BettingRound $bettingRound
     */
    public function mount($user, $type)
    {
        $this->user = $user;
        $this->type = $type;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = $this->user->commissions()->getQuery();
        if ($this->type == 'master agent') {
            return $query->where('type', 'referred_master_agent');
        }

        return $query->where('type', 'master_agent');
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
            Column::make(__('From '.ucwords($this->type)), 'id')
                ->searchable()
                ->sortable()
                ->format(function (BetCommission $model) {
                    $name = $model->bet->user->name ?? 'N/A';

                    if ($this->type = 'master agent') {
                        $name = $model->bet->user->masterAgent->name;
                    }

                    return $this->html($name);
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
