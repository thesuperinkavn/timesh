<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Admin\AdminBaseController;
use App\Services\Interfaces\SettingInterface;

class SettingController extends AdminBaseController
{
    //
    public function __construct(SettingInterface $setting)
    {
        $this->middleware('auth:admin');
        $this->setting = $setting;
    }

    public function index()
    {
        $config = $this->setting->find(1);
        
        $params = [
            'title'         => 'Setting',
            'js'            => 'admin.components.setting.js',
            'config'        => $config
        ];
        return view('admin.setting.particials.main')->with($params);
    }

    public function timeupdate(Request $request)
    {

        $request->validate([
            'start' => ['required'],
            'end' => ['required'],
        ]);

        $start = strtotime($request->get('start'));
        $start = date('H:i:s',$start);

        $end = strtotime($request->get('end'));
        $end = date('H:i:s',$end);
        $attributes = array(
            'timesheet_start' => $start,
            'timesheet_end'   => $end
        );

        $config = $this->setting->find(1);

        if(empty($config)){
            $this->setting->store($attributes);
        }
        else {
            $this->setting->update($config->id,$attributes);
        }

        return redirect('/admin/setting')->with('success', 'Cập nhật thành công');
    }
}
