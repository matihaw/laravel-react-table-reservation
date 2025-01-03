<?php

namespace App\Http\Controllers;

use App\Enums\Reservation\ReservationStatus;
use App\Models\Reservation;
use Inertia\Inertia;

class ReservationConfirmationController extends Controller
{
    public function __invoke(Reservation $reservation)
    {
        if ($reservation->status === ReservationStatus::Confirmed->value) {
            return Inertia::render('Reservations/Confirmation/index', [
                'header' => 'Your reservation is already confirmed',
                'date' => $reservation->reservation_date_time,
            ]);
        }

        $reservation->update(['status' => ReservationStatus::Confirmed]);

        return Inertia::render('Reservations/Confirmation/index', [
            'header' => 'Reservation Confirmed!',
            'date' => $reservation->reservation_date_time,
        ]);

    }
}
