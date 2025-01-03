<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reservation\Availability\Update;
use App\Models\Reservation;
use Illuminate\Http\JsonResponse;

class ReservationAvailabilityController
{
    public function __invoke(Update $request): JsonResponse
    {
        $date = $request->validated('reservation_date_time');

        $alreadyReserved = Reservation::whereDate('reservation_date_time', $date)->get(['reservation_date_time', 'number_of_people']);

        return response()->json($alreadyReserved);
    }
}
