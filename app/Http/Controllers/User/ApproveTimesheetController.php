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
}
