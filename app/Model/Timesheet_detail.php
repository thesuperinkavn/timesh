<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Timesheet_detail extends Model
{
    //
    protected $fillable = [
        'content',
        'duration',
        'timesheet_id',
        'task_id'
    ];
}
