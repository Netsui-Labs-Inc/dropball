<?php

namespace App\Http\Livewire;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Domains\Wallet\Models\AmendedTransaction;
use CreateAmendedTransactionsTable;
use Illuminate\Support\Facades\DB;

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

    public function mount(Request $request)
    {
        Session::put('userType', $request->get('userType'));
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        $query = AmendedTransaction::query();
        $query->join('model_has_roles AS model_role', 'model_role.model_id', '=', 'amended_transactions.user')
            ->join('roles', 'roles.id', '=', 'model_role.role_id')
            ->where('roles.name', Session::get('userType'));


        return $query;
    }

    /**
     * @return array
     */
    public function columns(): array
    {

        $columns = [
            Column::make(__('ID'), 'uuid')
                ->format(function ($value, $column, AmendedTransaction $row) {
                    $amendedTransactions = AmendedTransaction::join('transactions', 'amended_transactions.amendment_transaction_id', '=' , 'transactions.id')
                        ->join('users', 'amended_transactions.amended_by', '=', 'users.id')
                        ->where('amendment_transaction_id', $row->amendment_transaction_id)->get()->first();
                    return $amendedTransactions->uuid;
                })->asHtml(),
            Column::make(__('Amount'), 'amount')
                ->format(function ($value, $column, AmendedTransaction $row) {
                    $amendedTransactions = AmendedTransaction::join('transactions', 'amended_transactions.amendment_transaction_id', '=' , 'transactions.id')
                    ->join('users', 'amended_transactions.amended_by', '=', 'users.id')
                    ->where('amendment_transaction_id', $row->amendment_transaction_id)->get()->first();
                    return number_format($amendedTransactions->amount / 100, 2);
                })->asHtml(),
            Column::make(__('Approve At'), 'amended_transactions.created_at')
                ->sortable()
                ->format(function ($value, $column, AmendedTransaction $row) {
                   $transaction = AmendedTransaction::where('amendment_transaction_id', $row->amendment_transaction_id)->get()->first();
                    return $transaction->created_at;
                })->asHtml(),
            Column::make(__('Approve by'), 'approved_by')
                ->format(function ($value, $column, AmendedTransaction $row) {
                    $amendedTransactions = AmendedTransaction::join('transactions', 'amended_transactions.amendment_transaction_id', '=' , 'transactions.id')
                    ->join('users', 'amended_transactions.amended_by', '=', 'users.id')
                    ->where('amendment_transaction_id', $row->amendment_transaction_id)->get()->first();
                    return $amendedTransactions->name;
                })->asHtml(),
            Column::make(__('Action'))
                ->format(function ($value, $column, AmendedTransaction $row) {
                    return view('backend.wallet.action', ['transaction' => $row->amendment_transaction_id]);
                }),

        ];

        return $columns;
    }
}
