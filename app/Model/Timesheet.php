<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Timesheet extends Model
{
    //
    protected $fillable = [
        'name',
        'description',
        'created_by',
        'approve',
        'release_date'
    ];
    
    public function creator()
    {
        return $this->belongsTo('App\User', 'created_by');
    }

    public function tasks()
    {
        return $this->belongsToMany('App\Model\Task')->withPivot('id','duration','content')->withTimestamps();
    }

}
