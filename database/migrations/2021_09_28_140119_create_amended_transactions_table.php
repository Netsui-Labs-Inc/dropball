<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAmendedTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('amended_transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('original_transaction_id');
            $table->bigInteger('amendment_transaction_id');
            $table->string('notes')->nullable();
            $table->bigInteger('amended_by');
            $table->bigInteger('user');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('amended_transaction');
    }
}
