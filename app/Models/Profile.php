<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $guarded = ['id'];

    protected $casts = [
        'values' => 'array',
        'missions' => 'array',
        'corporate_values' => 'array',
        'hero_features' => 'array',
        'why_stif_cards' => 'array',
    ];
}
