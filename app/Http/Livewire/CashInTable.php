<?php

namespace App\Http\Livewire;

use App\Domains\Cashin\Models\CashIn;
use Livewire\Component;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;
use Illuminate\Database\Eloquent\Builder;

class CashInTable extends DataTableComponent
{
    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];

    public function query()
    {
        $query = CashIn::where('user_id', auth()->user()->id);
        return $query->latest();
    }

    public function columns(): array
    {
        return [
            Column::make(__('Channel'), 'channel')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, CashIn $row) {
                    return $row->channel;
                })->asHtml(),
            Column::make(__('Amount'), 'amount')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, CashIn $row) {
                    return $row->amount;
                })->asHtml(),
            Column::make(__('Currency'), 'currency')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, CashIn $row) {
                    return $row->currency;
                })->asHtml(),
            Column::make(__('Status'), 'status')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, CashIn $row) {
                    return $this->getStatus($row->status, $row->id);
                })->asHtml(),
            Column::make(__('Created At'), 'created_at')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, CashIn $row) {
                    return $row->created_at;
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function ($value, $column, CashIn $row) {
                    $disable = '';
                    if ($row->status) {
                        $disable = 'disabled="disabled"';
                    }
                   return '<button
                        class="btn btn-sm btn-outline-warning btn-refresh fas fa-sync btn-cash-in-id-'.$row->id.'"
                        data-cash_in_id="'.$row->id.'" '
                         .$disable.'></button></td>';
                })->asHtml(),
        ];
    }

    public function getStatus($status, $cashInId)
    {
        if ($status === 2)
        {
            return "<div class='text-danger cashIn-$cashInId'>Failed</div>";
        }

        if ($status === 1)
        {
            return "<div class='text-success cashIn-$cashInId'>Success</div>";
        }

        return "<div class='text-warning cashIn-$cashInId'>Pending</div>";
    }
}
