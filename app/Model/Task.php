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
        'assign_to'
    ];
}
