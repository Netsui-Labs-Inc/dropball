<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Models\AmendedTransaction;
use App\Domains\Wallet\Models\ApprovedWithdrawalRequest;
use App\Domains\Wallet\Models\WalletTransaction;
use App\Http\Livewire\Services\Filters;
use App\Http\Livewire\Services\TransactionRoleQueryFactory;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class AmendmentsTable extends DataTableComponent
{
    public $action;
    private $transactionsByRole;
    public int $perPage = 10;
    /**
     * @var string
     */
    public $sortField = 'id';
    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];

    /**
     * @return Builder
     */

    public function query(): Builder
    {
        $query = AmendedTransaction::query();
    }

    /**
     * @return array
     */
    public function columns(): array
    {
        $transactionByRole = $this->transactionsByRole;
        $columns = [
            Column::make(__('Name'), 'name')
                ->searchable(function (Builder $query, $searchTerm) use ($transactionByRole) {
                    $transactionByRole->morphToPayable($query, $searchTerm);
                })
                ->format(function ($value, $column, Transaction $row) {
                    return $row->payable->name;
                })->asHtml(),
            Column::make(__('Type'), 'type')
                ->searchable()
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = 'badge-success';
                    if ($row->type == 'withdrawal')
                    {
                        $class = 'badge-warning';
                    } elseif ($row->type == 'amendment')
                    {
                        $class = 'badge-primary';
                    }

                    return "<span class='badge $class'> {$row->type}</span>";
                })->asHtml(),
            Column::make(__('Amount'), 'amount')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    $class = $row->amountFloat < 0 ? 'text-danger': 'text-success';
                    $sign = $row->amountFloat > 0 ? '+' : null;

                    return "<div class='$class'>$sign".number_format($row->amountFloat, 2)."</div>";
                })->asHtml(),
            Column::make(__('Requested at'), 'created_at')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    if($row->type === 'deposit') {
                        return 'N/A';
                    }
                    return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Approved at'), 'updated_at')
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    if($row->type === 'deposit') {
                        return (new Carbon($row->created_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                    }
                    if ($row->created_at->format('Y-m-d H:i:s') === $row->updated_at->format('Y-m-d H:i:s')) {
                        return 'N/A';
                    }
                    return (new Carbon($row->updated_at))->setTimezone(auth()->user()->timezone ?? 'Asia/Manila');
                })->asHtml(),
            Column::make(__('Approved by'), 'approved_by')
                ->format(function ($value, $column, Transaction $row) {
                    if($row->type === 'deposit' || $row->type === 'amendment') {
                        return $this->getCreditor($row->meta);
                    }
                    return $this->getApprover($row->id);
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function ($value, $column, Transaction $row) {
                    return view('backend.wallet.action', ['transaction' => $row]);
                }),

        ];

        return $columns;
    }
}
