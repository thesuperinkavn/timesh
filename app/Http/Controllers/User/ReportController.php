<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use DB;
use App\Model\Task;
use App\Model\Timesheet;
use App\Model\Task_timesheet;
use Auth;
use Carbon\Carbon;
use App\Model\Setting;


class ReportController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $user_id = Auth::id();
        if(Setting::where('id','=',1)->exists()){
            $setting = Setting::find(1);
            $start = $setting->timesheet_start;
            $end = $setting->timesheet_end;
        }
        else {
            $start = '17:00:00';
            $end = '19:00:00';
        }

        $now = Carbon::now();

        $start = date('H:i:s', strtotime($start));
        $end = date('H:i:s', strtotime($end));

        // Get timesheet this month
        $timesheet_this_month = DB::table('timesheets')
            ->whereMonth('release_date', '=', date('m'))
            ->where('created_by','=',$user_id)
            ->get();

        //get total day this month
        $total_day_this_month = cal_days_in_month(CAL_GREGORIAN,date('m'),date('Y'));

        // total day do not have timesheet this month
        $total_day_not_timesheet = $total_day_this_month - count($timesheet_this_month);


        // Get timesheet late this month
        $timesheet_on_time_this_month = DB::select(
            "SELECT * FROM timesheets
             WHERE release_date = DATE(created_at)
             AND release_date = DATE(updated_at) 
             AND MONTH(release_date) = ".$now->month."
             AND DATE_FORMAT(updated_at,'%H:%i:%s') <="."'".$end."'"." 
             AND created_by = ".$user_id);

        $params = [
            'title'          => 'Báo cáo',
            'js'             => 'user.components.report.js',
            'css'            => 'user.components.report.css',
            'timesheet_this_month' => $timesheet_this_month,
            'total_day_not_timesheet'  => $total_day_not_timesheet,
            'timesheet_on_time_this_month' => $timesheet_on_time_this_month
        ];
        return view('user.pages.report')->with($params);
    }
}
