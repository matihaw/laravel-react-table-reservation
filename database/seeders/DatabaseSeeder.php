<?php

namespace Database\Seeders;

use App\Models\Reservation;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    use WithoutModelEvents;

    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
        ]);

        Reservation::factory()->count(200)->create();
    }
}
