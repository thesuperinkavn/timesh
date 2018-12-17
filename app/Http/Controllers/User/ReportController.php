<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\User\UserController;
use App\Services\Interfaces\TimesheetInterface;
use App\Services\Interfaces\SettingInterface;
use App\Services\Interfaces\ReportInterface;

class ReportController extends UserController
{
    //
    protected $timesheet, $setting, $report;
    public function __construct(TimesheetInterface $timesheet, SettingInterface $setting, ReportInterface $report)
    {
        $this->middleware('auth');
        $this->timesheet = $timesheet;
        $this->setting = $setting;
        $this->report = $report;
    }

    public function index()
    {
        
        $end = $this->setting->getEndTime();
        $end = date('H:i:s', strtotime($end));

        // Get timesheet this month
        $timesheet_this_month = $this->report->getTimesheetThisMonth();

        //get total day this month
        $total_day_this_month = $this->report->getTotalDayThisMonth();

        // total day do not have timesheet this month
        $total_day_not_timesheet = $this->report->getTotalDayNotTimesheet();

        // Get timesheet late this month
        $timesheet_on_time_this_month = $this->report->getTimesheetOntimeThisMonth($end);

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
