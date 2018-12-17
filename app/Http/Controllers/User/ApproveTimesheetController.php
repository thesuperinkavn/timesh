<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\User\UserController;
use App\Services\Interfaces\TimesheetInterface;
use App\Services\Interfaces\UserInterface;
use Auth;
use Carbon\Carbon;

class ApproveTimesheetController extends UserController
{
    //
    protected $timesheet, $user;

    public function __construct(TimesheetInterface $timesheet, UserInterface $user)
    {
        $this->timesheet = $timesheet;
        $this->user = $user;
        $this->middleware('auth');
    }
    public function review(Request $request)
    {
        
        $user = $this->user->find(Auth::id());    
        if($user->role < 3){
            return redirect('/timesheet')->with('success', 'Bạn không có quyền vào trang này');
        }
        
        $timesheets = $this->timesheet->reviewTimesheet();
        //pre($timesheets);
        $params = [
            'title'            => 'Duyệt timesheet',
            'js'               => 'user.components.timesheet.js',
            'css'              => 'user.components.timesheet.css',
            'timesheets'       => $timesheets
        ];
        return view('user.pages.timesheet-review')->with($params);
    }

    public function approve(Request $request)
    {
        $errors  = array('error' => 0);
        if($this->timesheet->approve($request->input('id')) === 1){
            $errors['error'] = 1;
            $errors['err'] = 'Có lỗi xảy ra, vui lòng thử lại';
            return response()->json($errors);
        }
        return response()->json($errors);
    }

    public function unapprove(Request $request)
    {
        $errors  = array('error' => 0);
        if($this->timesheet->unapprove($request->input('id')) === 1){
            $errors['error'] = 1;
            $errors['err'] = 'Có lỗi xảy ra, vui lòng thử lại';
            return response()->json($errors);
        }
        return response()->json($errors);
    }


    // public function sendEmailReminder($id,$type, $release_date)
    // {
    //     //$id = $request->input('id');
    //     $user = User::findOrFail($id);
    //     $leader = $user->leader;
    //     if($leader->name != 'Không có quản lý') {
    //         $to_name = $leader->name;
    //         $to_email = $leader->email;
    
    //         $title ='';
    
    //         switch ($type) {
    //             case '1':
    //                 $title = $user->name.' vừa tạo timesheet mới cho ngày '.$release_date;
    //                 break;
                
    //             case '2':
    //                 $title = $user->name.' vừa sửa timesheet ngày '.$release_date;
    //                 break;
    //         }
    
    //         $data = array('name'=>$leader->name, "body" => "Đây là thông báo tự động");
    
    //         Mail::send('user.components.email.index', $data, function($message) use ($to_name, $to_email, $title, $user) {
    //             $message->to($to_email, $to_name)
    //                     ->subject($title);
    //             $message->from('timesheetdms@gmail.com',$user->name);
    //         });
    
    //     }

    //     $notilist = $user->notify_accounts;
    //     if($notilist != NULL) {
    //         $list = explode(',', $notilist);
    //         foreach ($list as $key => $value) {
    //             $u = User::findOrFail($value);
    //             $to_name = $u->name;
    //             $to_email = $u->email;

    //             $title ='';

    //             switch ($type) {
    //                 case '1':
    //                     $title = $user->name.' vừa tạo timesheet mới cho ngày '.$release_date;
    //                     break;
                    
    //                 case '2':
    //                     $title = $user->name.' vừa sửa timesheet ngày '.$release_date;
    //                     break;
    //             }

    //             $data = array('name'=>$u->name, "body" => "Đây là thông báo tự động");

    //             Mail::send('user.components.email.index', $data, function($message) use ($to_name, $to_email, $title, $user) {
    //                 $message->to($to_email, $to_name)
    //                         ->subject($title);
    //                 $message->from('timesheetdms@gmail.com',$user->name);
    //             });
    //         }
    //     }

        
    // }
}
