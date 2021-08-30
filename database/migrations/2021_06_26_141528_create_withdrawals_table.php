<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWithdrawalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('withdrawals', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('reviewer_id')->constrained('users');
            $table->decimal('amount', 64, 0);
            $table->string('channel');
            $table->string('account_name')->nullable();
            $table->string('account_number');
            $table->string('notes')->nullable();
            $table->decimal('fee', 64, 0)->default(0);
            $table->json('meta')->nullable();
            $table->enum('status', ['pending', 'cancelled', 'completed'])->default('PENDING');

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
        Schema::dropIfExists('withdrawals');
    }
}
