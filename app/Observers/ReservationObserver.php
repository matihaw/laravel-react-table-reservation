<?php

namespace App\Observers;

use App\Mail\TableReservation;
use App\Models\Reservation;
use Illuminate\Support\Facades\Mail;

class ReservationObserver
{

    public function created(Reservation $reservation): void
    {
        Mail::to($reservation->email)
            ->send(new TableReservation($reservation));
    }
}
