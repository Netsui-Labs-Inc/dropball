<?php
namespace Database\Factories;

use \App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\Auth\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class BettingEventFactory extends Factory
{
    protected $model = BettingEvent::class;

    public function definition()
    {
        return [
            'name' => $this->faker->dayOfWeek. " Event",
            'description' => $this->faker->text,
            'schedule' => $this->faker->date('Y-m-d'),
            'bet_admin_id' => function () {
                return factory(User::class)->state('bet_admin')->create()->id;
            },
        ];
    }

    public function today()
    {
        return $this->state(function () {
            return [
                 'schedule' => Carbon::now()->format('Y-m-d'),
             ];
        });
    }
}
