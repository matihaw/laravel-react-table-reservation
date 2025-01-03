<?php

namespace App\Enums\Reservation;

enum ReservationStatus: string
{
    case Pending = 'pending';
    case Confirmed = 'confirmed';
}
