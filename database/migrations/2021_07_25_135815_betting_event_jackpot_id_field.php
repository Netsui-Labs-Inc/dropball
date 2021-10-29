<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BettingEventJackpotIdField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('betting_events', function(Blueprint $table) {
            $table->foreignId('jackpot_id')->nullable()->after('stream_url')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('betting_events', function(Blueprint $table) {
            $table->dropConstrainedForeignId('jackpot_id');
        });
    }
}
