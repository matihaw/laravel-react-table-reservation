<?php

namespace App\Http\Requests\Reservation;

use App\Enums\Reservation\ReservationStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class Update extends FormRequest
{

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'status' => [Rule::Enum(ReservationStatus::class)]
        ];
    }
}
