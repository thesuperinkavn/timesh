<?php 

namespace App\Services;
use App\Model\Timesheet;
use App\Model\Task;
use App\Model\Task_timesheet;
use App\Services\Interfaces\TimesheetInterface;
use Auth;
use DB;

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

    public function update($id, $attributes = array())
    {
        $info = $this->find($id);
        if ($info) {
            $info->update($attributes);
            return $info;
        }
        return false;
    }

    public function destroy($id)
    {
        $info = $this->find($id);
        if ($info) {
            $info->delete();
            return true;
        }
        return false;
    }

    public function getAllTask()
    {
        return Task::where('assign_to',Auth::id())->get();
    }

    public function checkTaskInTimesheet($timesheet_id, $task_id)
    {
        return (Task_timesheet::where('timesheet_id',$timesheet_id)->where('task_id', $task_id)->exists());
    }
    
    public function addTaskToTimesheet($timesheet_id, $task_id, $attributes)
    {
        $timesheet = $this->find($timesheet_id);
        try {
            $timesheet->tasks()->attach($task_id, $attributes);
            return 1;
        } catch (\Throwable $th) {
            return 0;
        }
    }

    public function removeTaskFromTimeSheet($timesheet_id, $task_id)
    {
        $timesheet = $this->find($timesheet_id);
        try {
            $timesheet->tasks()->detach($task_id);
            return 1;
        } catch (\Throwable $th) {
            return 0;
        }
    }

    public function filterTimesheet($dateRange)
    {
        $arr = explode('-',$dateRange);
        $start = trim($arr[0]);
        $end = trim($arr[1]);  
        $start = date('Y-m-d',strtotime($start));
        $end = date('Y-m-d',strtotime($end));

        $timesheets = Timesheet::where('created_by', Auth::id())
            ->where('release_date','>=',$start)
            ->where('release_date','<=',$end)
            ->get();
        return $timesheets;
    }

    public function reviewTimesheet()
    {
        $user_id = Auth::id();
        // $timesheets = DB::table('timesheets')
        //     ->select('timesheets.*, users.id as user_id, users.name as user_name, users.avatar as user_avatar')
        //     ->join(DB::raw("('SELECT * FROM users WHERE leader_id = '.$user_id) AS users"),
        //     function($join)
        //     {
        //        $join->on('timesheets.created_by', '=', 'user_id');
        //     })
        //     //->where('created_by','<>',$user_id)
        //     ->get();
            //->toSql();
        $timesheets = DB::select(
                        "SELECT timesheets.*, users.id as user_id, users.name as user_name, users.avatar as user_avatar
                        FROM timesheets
                        JOIN (SELECT * FROM users WHERE leader_id = $user_id) AS users
                        ON timesheets.created_by = users.id
                        WHERE created_by <> $user_id");
        return $timesheets;
    }

    public function approve($id)
    {
        try {
            $timesheet = $this->find($id);
            $timesheet->approve = 1;
            $timesheet->save();
            return 0;
        } catch (\Throwable $th) {
            return 1;
        }

    }

    public function unapprove($id)
    {
        try {
            $timesheet = $this->find($id);
            $timesheet->approve = 0;
            $timesheet->save();
            return 0;
        } catch (\Throwable $th) {
            return 1;
        }

    }
}