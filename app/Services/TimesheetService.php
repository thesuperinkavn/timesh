<?php 

namespace App\Services;
use App\Model\Timesheet;
use App\Services\Interfaces\TimesheetInterface;
use Auth;

class TimesheetService implements TimesheetInterface
{
    public function getAll()
    {
        $user_id = Auth::id();
        return Timesheet::where('created_by',$user_id)->get();
    }

    public function find($id)
    {
        return Timesheet::find($id);
    }

    public function store($attributes = array())
    {
        return Timesheet::create($attributes);
    }
}