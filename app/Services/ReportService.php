<?php 

namespace App\Services;
use App\Services\Interfaces\ReportInterface;
use App\Model\Timesheet;
use App\Model\Setting;
use Auth, DB, Carbon\Carbon;

class ReportService implements ReportInterface
{

    public function getTimesheetThisMonth()
    {
        $user_id = Auth::id();
        return Timesheet::whereMonth('release_date', '=', date('m'))->where('created_by','=',$user_id)->get();
    }

    public function getTotalDayThisMonth()
    {
        return cal_days_in_month(CAL_GREGORIAN,date('m'),date('Y'));
    }

    public function getTotalDayNotTimesheet()

    {
        return $this->getTotalDayThisMonth() - count($this->getTimesheetThisMonth());
    }

    public function getTimesheetOntimeThisMonth($endtime)
    {
        $now = Carbon::now();
        $user_id = Auth::id();
        return DB::select(
            "SELECT * FROM timesheets
             WHERE release_date = DATE(created_at)
             AND release_date = DATE(updated_at) 
             AND MONTH(release_date) = ".$now->month."
             AND DATE_FORMAT(updated_at,'%H:%i:%s') <="."'".$endtime."'"." 
             AND created_by = ".$user_id);
    }
}