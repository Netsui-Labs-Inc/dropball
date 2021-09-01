<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Models\ApprovedWithdrawalRequest;
use App\Domains\Wallet\Models\WalletTransaction;
use App\Http\Livewire\Services\Filters;
use App\Http\Livewire\Services\TransactionRoleQueryFactory;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class ReviewersTransactionTable extends DataTableComponent
{
    public $action;
    private $transactionsByRole;
    private $userType;
    protected $options = [
        'bootstrap.classes.table' => 'table',
    ];

    public function mount(Request $request)
    {
        $this->userType = $request->get('userType');
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $transactionFactory = new TransactionRoleQueryFactory();
        $this->transactionsByRole = $transactionFactory->createTransactionTable($this->userType);
        $query = Transaction::query();
        $query = $this->transactionsByRole->morphToPayable($query);
        return $query->where('confirmed', true)
            ->when($this->getFilter('type'),
            fn ($query, $term) => $query->where('type', $term)
        )->latest('created_at');

    }
    public function filters(): array
    {
        $filter = new Filters();
        return $filter->type()->getFilters();
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
                    $class = $row->type == 'deposit' ? 'badge-success' : 'badge-warning';

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
                ->sortable()
                ->format(function ($value, $column, Transaction $row) {
                    if($row->type === 'deposit') {
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

    private function getCreditor($meta)
    {
        if (!$meta) {
            return 'N/A';
        }
        if(array_key_exists('credited_by', $meta)) {
            return User::find($meta['credited_by'])->name;
        }
    }

    private function getApprover($transactionId)
    {
        $approvedWithdrawalRequest = ApprovedWithdrawalRequest::query();
        $approvedRequest = $approvedWithdrawalRequest->where('transaction_id', $transactionId)->get()->first();
        return ($approvedRequest) ? $approvedRequest->approver->name : 'N/A';
    }
}
