<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Setting;

class SettingController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function index()
    {
        $config = Setting::find(1);
        
        $params = [
            'title'         => 'Setting',
            'js'            => 'admin.components.setting.js',
            'config'        => $config
        ];
        return view('admin.pages.setting')->with($params);
    }

    public function timeupdate(Request $request)
    {

        $request->validate([
            'start' => ['required'],
            'end' => ['required'],
        ]);

        $start = strtotime($request->get('start'));
        $start = date('H:i:s',$start);
        //print_r($start);

        $end = strtotime($request->get('end'));
        $end = date('H:i:s',$end);

        if(Setting::where('id','=',1)->exists()){
            $setting = Setting::find(1);
            $setting->timesheet_start = $start;
            $setting->timesheet_end = $end;
        }
        else {
            $setting = new Setting([
                'timesheet_start' => $start,
                'timesheet_end'   => $end
            ]);
        }
        
        $setting->save();
        return redirect('/admin/setting')->with('success', 'Cập nhật thành công');
    }
}
