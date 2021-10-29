<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BetsTablePreviousBalanceField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bets', function (Blueprint $table) {
            $table->decimal('previous_balance', 64, 0)->default(0)->after('gain_loss')->nullable();
            $table->decimal('new_balance', 64, 0)->default(0)->after('previous_balance')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bets', function(Blueprint $table) {
            $table->dropColumn(['previous_balance', 'new_balance']);
        });
    }
}
