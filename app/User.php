<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Model\Admin;
use App\Model\Timehsheet;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'leader_id', 'description', 'active', 'avatar', 'role', 'approve', 'notify_accounts'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function leader()
    {
        
        return $this->belongsTo('App\User', 'leader_id')->withDefault([
            'name' => 'Không có quản lý',
        ]);
    }

    public function assignee()
    {
        return $this->hasMany('App\User', 'leader_id');
    }


}
