<?php

namespace App\Http\Livewire;

use App\Domains\Wallet\Models\Withdrawal;
use App\Http\Livewire\Action\Filters;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

class PlayerWithdrawalsTable extends DataTableComponent
{
    /**
     * @var string
     */
    public $sortField = 'created_at';
    public int $perPage = 10;
    /**
     * @var string
     */
    public $status;
    public $user;
    public $reviewer;
    public $confirmed;
    public $action;
    public $withUser;
    public $wallet;
    public $model;
    public $excludeBetTransactions;


    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];
    /**
     * @param  string  $status
     */
    public function mount($status = null, $user = null, $reviewer = null, $action = false): void
    {
        $this->status = $status;
        $this->user = $user;
        $this->reviewer = $reviewer;
        $this->action = $action;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = Withdrawal::query();
        $query->when($this->getFilter('channel'), fn ($query, $term) => $query->search($term));
        $query->when($this->getFilter('type'), fn ($query, $term) => $query->search($term));

        if($this->status) {
            $query->where('status', $this->status);
        }
        $query->where('status', 'pending');
        if($this->reviewer) {
            $query->where('reviewer_id', $this->reviewer);
        }

        $query->latest('created_at');
        return $query;
    }

    /**
     * @return array
     */
    public function filters(): array
    {
        $filter = new Filters();
        return $filter->channel()->getFilters();
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        $columns = [
            Column::make(__('Withdrawal ID'), 'id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    return "#".$row->id;
                })->asHtml(),
            Column::make(__('Account Number'), 'account_number')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    return $row->account_number;
                })->asHtml(),
            Column::make(__('Account Name'), 'account_name')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    return $row->account_name ?? "N/A";
                })->asHtml(),
            Column::make(__('Channel'), 'channel')
                ->sortable(),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    return "<div class='text-danger'>-".number_format($row->amountFloat, 2)."</div>";
                })->asHtml(),
            Column::make(__('Status'), 'status')
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    if($row->status == Withdrawal::COMPLETED) {
                        $class = 'badge-success';
                    }elseif ($row->status == Withdrawal::CANCELLED) {
                        $class = 'badge-danger';
                    } else {
                        $class = 'badge-warning';
                    }
                    return "<span class='badge $class'>$row->status</span>";
                })->asHtml(),
            Column::make(__('Created at'), 'created_at')
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function ($value, $column, Withdrawal $row) {
                    return view('backend.wallet.withdrawal.action', [
                        'withdrawal' => $row,
                        'route' => 'admin.players.withdrawals.show'
                        ]);
                })->asHtml()
        ];

        return $columns;
    }
}
