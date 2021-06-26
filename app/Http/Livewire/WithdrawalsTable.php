<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Models\Withdrawal;
use Bavix\Wallet\Interfaces\Mathable;
use Bavix\Wallet\Models\Wallet;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class WithdrawalsTable extends DataTableComponent
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
    /**
     * @var
     */
    public $user;
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
    public function mount($status = 'PENDING', $user = null, $action = false): void
    {
        $this->status = $status;
        $this->user = $user;
        $this->action = $action;
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        /** @var User $user */
        $user = auth()->user();
        $query = $user::withdrawals();
        $query->where('status', $this->status);
        return $query;
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        $columns = [
            Column::make(__('Transaction ID'), 'id')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    return "#".$row->id;
                })->asHtml(),
            Column::make(__('Channel'), 'channel')
                ->sortable(),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function ($value, $column, Withdrawal $row) {
                    $amount = app(Mathable::class)->div($row->amount, 2);
                    return "<div class='text-dasnger'>+".number_format($amount, 2)."</div>";
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
                ->format(function ($value, $column, Wallet $row) {
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml()
        ];

        if ($this->action) {
            $columns[] = Column::make(__('Action'))
                ->format(function ($value, $column, Wallet $row) {
                    return view('backend.wallet.action', ['transaction' => $row]);
                })->asHtml();
        }


        return $columns;
    }
}
