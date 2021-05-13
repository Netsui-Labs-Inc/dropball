<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStreamFieldToBettingEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('betting_events', function (Blueprint $table) {
            $table->string('stream_url')->nullable()->after('bet_admin_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('betting_events', function (Blueprint $table) {
            $table->dropColumn('bet_admin_id');
        });
    }
}
