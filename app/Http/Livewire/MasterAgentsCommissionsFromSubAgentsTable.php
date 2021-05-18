<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\BetCommission;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class MasterAgentsCommissionsFromSubAgentsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'id';

    public $sortDirection = 'desc';

    public int $perPage = 10;

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
                ->format(function ($value, $column, BetCommission $row) {
                    return '#'.$row->bet_id;
                })->asHtml(),
            Column::make(__('Bet Status'), 'id')
                ->searchable()
                ->format(function ($value, $column, BetCommission $row) {
                    return $row->bet->statusLabel() ?? 'N/A';
                })->asHtml(),
            Column::make(__('From Sub-Agent'), 'id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, BetCommission $row) {
                    $name = $row->bet->user->masterAgent->name;

                    return $name;
                })->asHtml(),
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
