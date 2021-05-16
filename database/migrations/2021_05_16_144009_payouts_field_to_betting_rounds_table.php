<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PayoutsFieldToBettingRoundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('betting_rounds', function (Blueprint $table) {
            $table->json('payouts')->nullable()->after('meta');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('betting_rounds', function (Blueprint $table) {
            $table->dropColumn('payouts');
        });
    }
}
