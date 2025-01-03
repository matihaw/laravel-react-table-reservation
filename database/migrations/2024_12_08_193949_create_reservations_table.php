<?php

use App\Enums\Reservation\ReservationStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->unsignedInteger('number_of_people');
            $table->text('message');
            $table->unsignedInteger('phone');
            $table->dateTime('reservation_date_time');
            $table->enum('status', array_column(ReservationStatus::cases(), 'value'))->default(ReservationStatus::Pending->value);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
