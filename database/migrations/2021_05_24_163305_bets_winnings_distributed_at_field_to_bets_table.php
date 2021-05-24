<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BetsWinningsDistributedAtFieldToBetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bets', function (Blueprint $table) {
            $table->dateTime('winnings_processed_at')->nullable()->after('commission_processed');
            $table->dateTime('refund_processed_at')->nullable()->after('winnings_processed_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bets', function (Blueprint $table) {
            $table->dropColumn(['winnings_processed_at', 'refund_processed_at']);
        });
    }
}
