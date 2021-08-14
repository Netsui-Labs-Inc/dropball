<?php

namespace App\Http\Livewire;

use App\Domains\Hub\Models\Hub;
use App\Http\Livewire\Action\Filters;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Database\Eloquent\Builder;
use PHPUnit\Util\Filter;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class HubsTransactionsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'id';
    public $sortDirection = 'desc';
    public int $perPage = 10;
    /**
     * @var string
     */
    public $status;
    /**
     * @var
     */
    public $user;
    public $confirmed;
    public $action;
    public $withUser;
    public $wallet;

    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */
    public function mount($status = 'active', $confirmed = true, $user = null, $action = false, $withUser = false, $wallet = 'default'): void
    {
        $this->status = $status;
        $this->user = $user;
        $this->confirmed = $confirmed;
        $this->action = $action;
        $this->withUser = $withUser;
        $this->wallet = $wallet;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = Transaction::query();
        return $query->latest('created_at')
            ->where('payable_type', Hub::class)
            ->where('confirmed', $this->confirmed)
            ->when($this->getFilter('type'),
                fn ($query, $term) => $query->where('type', $term));
    }

    public function Filters(): array
    {
        $filters = new Filters();
        return $filters->type()
            ->getFilters();
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        $columns = [
            Column::make(__('Transaction ID'), 'uuid')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    return "#".$row->id;
                })->asHtml(),
            Column::make(__('Hub'), 'hub')
                ->searchable(function (Builder $query, $searchTerm) {
                    $query->whereHasMorph('payable', Hub::class, function ($query) use($searchTerm) {
                        return $query->where('name', 'like', '%'. $searchTerm . '%');
                    });
                })
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    return $row->payable->name;
                })->asHtml(),
            Column::make(__('Type'), 'type')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->type == 'deposit' ? 'badge-success' : 'badge-warning';

                    return "<span class='badge $class'> {$row->type}</span>";
                })->asHtml(),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->amountFloat < 0 ? 'text-danger': 'text-success';
                    $sign = $row->amountFloat > 0 ? '+' : null;

                    return "<div class='$class'>$sign".number_format($row->amountFloat)."</div>";
                })->asHtml(),
            Column::make(__('Confirmed'), 'confirmed')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->confirmed ? 'badge-success': 'badge-warning';
                    $confirmed = $row->confirmed ? 'confirmed': 'pending';

                    return "<span class='badge $class'>$confirmed</span>";
                })->asHtml(),
            Column::make(__('Created at'), 'created_at')
                ->sortable(),
        ];

        if ($this->action) {
            $columns[] = Column::make(__('Action'))
                ->format(function ($value, $column, Transaction $row) {
                    return view('backend.wallet.action', ['transaction' => $row]);
                });
        }

        return $columns;
    }
}
