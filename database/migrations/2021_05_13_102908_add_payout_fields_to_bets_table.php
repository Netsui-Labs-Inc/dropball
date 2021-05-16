<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPayoutFieldsToBetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bets', function (Blueprint $table) {
            $table->unsignedBigInteger('agent_id')->nullable()->after('user_id')->nullable();
            $table->float('payout')->nullable()->after('gain_loss');
            $table->bigInteger('other_commissions')->nullable()->after('payout');
            $table->boolean('commission_processed')->nullable()->after('payout');
            $table->foreign('agent_id')->references('id')->on('users');
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
            $table->dropColumn(['payout', 'commission_processed', 'other_commissions']);
        });
    }
}
