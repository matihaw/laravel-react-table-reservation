<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reservation\Store;
use App\Http\Requests\Reservation\Update;
use App\Models\Reservation;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class ReservationController extends Controller
{

    public function index(): InertiaResponse
    {
        $reservations = Reservation::all();

        return Inertia::render('Reservations/Index/index', compact('reservations'));
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('Reservations/Create/index');
    }

    public function store(Store $request): RedirectResponse
    {
        Reservation::create($request->validated());

        return back();
    }

    public function update(Update $request, Reservation $reservation): Response
    {
        $reservation->update($request->validated());

        return \response(status: 204);
    }

    public function destroy(Reservation $reservation): Response
    {
        $reservation->delete();

        return \response(status: 204);
    }
}
