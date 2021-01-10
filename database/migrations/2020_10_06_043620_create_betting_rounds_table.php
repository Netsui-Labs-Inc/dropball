<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBettingRoundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('betting_rounds', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->integer('queue')->nullable();
            $table->unsignedBigInteger('betting_event_id');
            $table->unsignedInteger('result')->nullable();
            $table->enum('status', ['upcoming','placing_bets', 'ongoing', 'ended', 'cancelled'])->default('upcoming');
            $table->boolean('is_betting_open')->default(false);
            $table->float('pool_money')->nullable();
            $table->text('note')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('betting_event_id')->references('id')->on('betting_events');
            $table->foreign('result')->references('id')->on('bet_options');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plays');
    }
}
