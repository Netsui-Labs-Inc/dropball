<?php

namespace App\Http\Livewire;

use App\Domains\Wallet\Models\CashIn;
use Livewire\Component;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;
use Illuminate\Database\Eloquent\Builder;

class CashInTable extends DataTableComponent
{

    public function query()
    {
        $query = CashIn::query();
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
                    return $this->getStatus($row->status);
                })->asHtml(),
            Column::make(__('Created At'), 'created_at')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, CashIn $row) {
                    return $row->created_at;
                })->asHtml(),
        ];
    }

    public function getStatus($status)
    {
        if ($status === 2)
        {
            return "<div class='text-danger'>Failed</div>";
        }

        if ($status === 1)
        {
            return "<div class='text-success'>Success</div>";
        }

        return "<div class='text-warning'>Pending</div>";
    }
}
