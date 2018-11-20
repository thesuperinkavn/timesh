<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //

    protected $fillable = [
        'name',
        'description',
        'active',
        'created_by',
        'assign_to',
        'priority',
        'status'
    ];

    public function assignee()
    {
        
        return $this->belongsTo('App\User', 'assign_to','id')->withDefault([
            'name' => 'Không chọn',
        ]);
    }

    public function creator()
    {
        return $this->belongsTo('App\User', 'created_by', 'id');
    }
}
