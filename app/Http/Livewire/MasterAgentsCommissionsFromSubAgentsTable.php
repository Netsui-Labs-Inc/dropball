<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\BetCommission;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Traits\HtmlComponents;
use Rappasoft\LaravelLivewireTables\Views\Column;

class MasterAgentsCommissionsFromSubAgentsTable extends TableComponent
{
    use HtmlComponents;
    /**
     * @var string
     */
    public $sortField = 'id';

    public $sortDirection = 'desc';

    public $perPage = 10;

    protected string $tableName = 'master-agents-commissions-from-master-agent';
    protected string $pageName = 'master-agents-commissions-from-master-agent';

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
        $query = $this->user->commissions()->getQuery();

        return $query->where('type', 'referred_master_agent');
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
            Column::make(__('From Sub-Agent'), 'id')
                ->searchable()
                ->sortable()
                ->format(function (BetCommission $model) {
                    $name = $model->bet->user->masterAgent->name;

                    return $this->html($name);
                }),
            Column::make(__('Rate'), 'rate')
                ->searchable()
                ->sortable()
                ->format(function (BetCommission $model) {
                    return $this->html(number_format($model->rate, 2)."%". "({$model->bet->bet_amount})");
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
