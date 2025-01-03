<?php

namespace App\Http\Requests\Reservation;

use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{
    /**
     * @return array<string, string>
     */
    public function rules(): array
    {
        return [
            'name' => 'string|required',
            'email' => 'string|required',
            'phone' => 'integer|required',
            'number_of_people' => 'integer|required',
            'reservation_date_time' => 'date|required',
            'message' => 'string|max:65535'
        ];
    }
}
