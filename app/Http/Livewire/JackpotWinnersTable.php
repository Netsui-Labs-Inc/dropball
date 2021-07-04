<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingEvent\Models\Jackpot;
use App\Domains\BettingEvent\Models\JackpotWinner;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

class JackpotWinnersTable extends DataTableComponent
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

    public $jackpot;

    public function mount($jackpot): void
    {
        $this->jackpot = $jackpot;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        return JackpotWinner::where('jackpot_id', $this->jackpot->id);
    }


    /**
     * @return array
     */
    public function columns(): array
    {
        return [
            Column::make(__('Player'), 'user_id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, JackpotWinner $row) {
                    return $row->player->name;
                })->asHtml(),
             Column::make(__('Prize'), 'prize')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, JackpotWinner $row) {
                    return number_format($row->prize);
                })->asHtml()
        ];
    }
}
