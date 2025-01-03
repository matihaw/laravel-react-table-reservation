<?php

namespace App\Models;

use App\Observers\ReservationObserver;
use Database\Factories\ReservationFactory;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

#[ObservedBy([ReservationObserver::class])]
class Reservation extends Model
{

    /** @use HasFactory<ReservationFactory> */
    use HasFactory;

    protected $guarded = [];

    public function getConfirmationUrl(): string
    {
        return URL::signedRoute('reservation.confirmation', ['reservation' => $this]);
    }

}
