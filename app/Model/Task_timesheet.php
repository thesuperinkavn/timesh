<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Task_timesheet extends Model
{
    //
    protected $fillable = [
        'content',
        'duration',
        'timesheet_id',
        'task_id'
    ];
}
