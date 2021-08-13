<?php

namespace App\Http\Livewire\Action;

use Rappasoft\LaravelLivewireTables\Views\Filter;

class Filters
{
    private $filters = [];

    public function type()
    {
        $this->filters = array_merge($this->filters, [
            'type' => Filter::make('Type')
                ->select([
                    '' => 'All',
                    'withdraw' => 'WITHDRAW',
                    'deposit' => 'DEPOSIT',
                ])
        ]);

        return $this;
    }

    public function status()
    {
        $this->filters = array_merge($this->filters, [
            'status' => Filter::make('Status')
                ->select([
                    '' => 'All',
                    'pending' => 'PENDING',
                    'complete' => 'COMPLETE',
                ]),
        ]);
        return $this;
    }

    public function channel()
    {
        $this->filters = array_merge($this->filters, [
            'channel' => Filter::make('Channel')
                ->select([
                    '' => 'All',
                    'gcash' => 'GCASH',
                    'paymaya' => 'PAYMAYA',
                    'bank' => 'BANK',
                ])
        ]);
        return $this;
    }

    public function getFilters()
    {
        return $this->filters;
    }


}
