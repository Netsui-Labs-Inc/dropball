<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bets', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->unsignedBigInteger('betting_round_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedInteger('bet');
            $table->float('bet_amount');
            $table->enum('status', ['win', 'lose'])->nullable();
            $table->float('gain_loss')->nullable()->default(0);
            $table->text('note')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('betting_round_id')->references('id')->on('betting_rounds');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('bet')->references('id')->on('bet_options');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bets');
    }
}
