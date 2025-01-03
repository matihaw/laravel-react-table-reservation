<?php

namespace Database\Factories;

use App\Enums\Reservation\ReservationStatus;
use App\Models\Reservation;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Reservation>
 */
class ReservationFactory extends Factory
{

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'number_of_people' => fake()->numberBetween(1, 10),
            'message' => fake()->sentence(),
            'phone' => fake()->randomNumber(9, true),
            'reservation_date_time' => Carbon::now()
                ->addDays(fake()->numberBetween(1, 300))
                ->setTime(fake()->numberBetween(11, 18), 0),
            'status' => fake()->randomElement([
                ReservationStatus::Pending->value,
                ReservationStatus::Confirmed->value,
            ]),
        ];
    }

}
