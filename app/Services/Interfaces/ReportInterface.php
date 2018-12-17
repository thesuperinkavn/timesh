<?php
namespace App\Services\Interfaces;

interface ReportInterface
{
    public function getTimesheetThisMonth();
    public function getTotalDayThisMonth();
    public function getTotalDayNotTimesheet();
    public function getTimesheetOntimeThisMonth($endtime);
   
}