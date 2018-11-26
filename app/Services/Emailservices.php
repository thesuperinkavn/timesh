<?php 
namespace App\Services;
use App\Model\Setting;
class Emailservices 
{

    

    
    public function get_starttime()
    {
        try {
            return Setting::first()->timesheet_start;
        } catch (\Throwable $th) {
            //throw $th;
            return '17:00:00';
        }
    }

    public function get_endtime()
    {
        try {
            return Setting::first()->timesheet_end;
        } catch (\Throwable $th) {
            //throw $th;
            return '19:00:00';
        }
    }
}
?>