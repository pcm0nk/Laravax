<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Passport\HasApiTokens;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>|bool
     */
    protected $guarded = [];
    protected $appends = ['first_name', 'is_trial'];
    protected $hidden = ['password','email','remember_token'];
    protected $casts = ['is_sub' => 'boolean'];

    public array $interfaces = [
        'location' => [
            'name' => 'api.SessionLocation',
        ],
        'session' => [
            'name' => 'api.Session',
        ],
        'sessions' => [
            'name' => 'api.Sessions',
        ],
    ];
    public $company = null;

 /**
  * > If the difference between the current date and the date the user was created is less than 8 days,
  * then the user is on a trial
  *
  * @return bool A boolean value.
  */
    public function getIsTrialAttribute(): bool
    {
        return Carbon::now()->diffInDays($this->created_at) < 8;
    }

  /**
   * > This function returns the first name of the user
   *
   * @return string The first name of the user.
   */
    public function getFirstNameAttribute(): string
    {
        return explode(' ', $this->name ?? '')[0];
    }

    /**
     * Get the providers for the user model.
     *
     * @return HasMany<Provider>
     */
    public function providers(): HasMany
    {
        return $this->hasMany(Provider::class);
    }
}
