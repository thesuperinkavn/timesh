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


class ReportController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        // Get timesheet this month
        $timesheet_this_month = DB::table('timesheets')
            ->whereMonth('release_date', '=', date('m'))
            ->get();

        //get total day this month
        $total_day_this_month = cal_days_in_month(CAL_GREGORIAN,date('m'),date('Y'));

        // total day do not have timesheet this month
        $total_day_not_timesheet = $total_day_this_month - count($timesheet_this_month);

        // Get timesheet late this month
        $timesheet_on_time_this_month = DB::select(
            "SELECT * from `timesheets` 
             WHERE `release_date` = DATE(created_at) 
             AND `release_date` = DATE(updated_at) 
             AND DATE_FORMAT(created_at,'%H:%i:%s') <='18:00:00' 
             AND DATE_FORMAT(updated_at,'%H:%i:%s') <= '19:00:00'");

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
