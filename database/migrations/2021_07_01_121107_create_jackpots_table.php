<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJackpotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jackpots', function (Blueprint $table) {
            $table->id();
            $table->foreignId('betting_event_id')->constrained();
            $table->foreignId('betting_round_id')->constrained();
            $table->decimal('prize', 64, 0)->default(0);
            $table->enum('status', ['upcoming', 'ended']);
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
        Schema::dropIfExists('jackpots');
    }
}
