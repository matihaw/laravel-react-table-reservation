<?php

namespace App\Http\Requests\Reservation\Availability;

use Illuminate\Foundation\Http\FormRequest;

class Update extends FormRequest
{
    /**
     * @return array<string, string>
     */
    public function rules(): array
    {
        return [
            'reservation_date_time' => 'date|required',
        ];
    }
}
