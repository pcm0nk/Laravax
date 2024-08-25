<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Provider extends Model
{
    public static array $allowed = ['email', 'google', 'facebook'];

    protected $guarded = [];

    protected $casts = ['payload' => 'array'];

    protected $hidden = ['payload.token'];
}
