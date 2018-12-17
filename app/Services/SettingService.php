<?php 

namespace App\Services;
use App\Services\Interfaces\SettingInterface;
use App\Model\Setting;

class SettingService implements SettingInterface
{
    
    public function getStartTime()
    {
        if(Setting::where('id','=',1)->exists()){
            $setting = Setting::find(1);
            return $setting->timesheet_start;
        }
        else {
            return  '17:00:00';
        }
    }

    public function getEndTime()
    {
        if(Setting::where('id','=',1)->exists()){
            $setting = Setting::find(1);
            return $setting->timesheet_end;
        }
        else {
            return  '19:00:00';
        }
    }
}