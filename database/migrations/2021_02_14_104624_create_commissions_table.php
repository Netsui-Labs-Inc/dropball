<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bet_commissions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bet_id');
            $table->morphs('commission');
            $table->enum('type', ['operator', 'master_agent', 'system', 'hub']);
            $table->float('rate');
            $table->unsignedInteger('amount');
            $table->json('meta')->nullable();
            $table->timestamps();

            $table->foreign('bet_id')->references('id')->on('bets');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bet_commissions');
    }
}
