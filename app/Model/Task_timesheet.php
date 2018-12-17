<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Task_timesheet extends Model
{
    //
    protected $table = 'task_timesheet';
    protected $fillable = [
        'content',
        'duration',
        'timesheet_id',
        'task_id'
    ];
}
