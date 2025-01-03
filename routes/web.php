<?php

use App\Http\Controllers\ReservationAvailabilityController;
use App\Http\Controllers\ReservationConfirmationController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;


Route::resource('reservation', ReservationController::class)->only(['store', 'create']);

Route::resource('reservation', ReservationController::class)->only(['index', 'update', 'destroy'])->middleware(['auth', 'verified']);

Route::get('reservation/{reservation}/confirm', ReservationConfirmationController::class)->name('reservation.confirmation')->middleware('signed');

Route::post('reservation/availability', ReservationAvailabilityController::class)->name('reservation.availability');

Route::redirect('/', '/reservation/create');

require __DIR__ . '/auth.php';
