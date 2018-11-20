<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use DB;
use App\Model\Task;
use App\Model\Timesheet;
use App\Model\Timesheet_detail;
use Auth;
use Carbon\Carbon;
use App\Rules\Dateunique;

class TimesheetController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {
        $timesheets = Timesheet::all();

        $params = [
            'title'          => 'Quản lý timesheet',
            'js'             => 'user.components.timesheet.js',
            'css'            => 'user.components.timesheet.css',
            'timesheets'     => $timesheets
        ];
        return view('user.pages.timesheet')->with($params);
    }

   
    public function show($id)
    {
        //
    }
    public function create()
    {
        $params = [
            'title'          => 'Thêm mới timesheet',
            'js'             => 'user.components.timesheet.create-js',
            'css'            => 'user.components.timesheet.create-css'
        ];
        return view('user.pages.timesheet-create')->with($params);
    }


    public function store(Request $request)
    {

        $request->validate([
            'release_date' => ['required', new Dateunique],
        ]);

        $time = strtotime($request->get('release_date'));
        $newformat = date('Y-m-d',$time);

        $timesheet = new Timesheet([
            'name' => $request->get('name'),
            'description'=> $request->get('description'),
            'release_date' => $newformat,
            'created_by'=> Auth::id()
        ]);
        $timesheet->save();
        return redirect('/timesheet')->with('success', 'Thêm mới thành công');
    }

    public function addtask(Request $request)
    {
        if($request->input('id')){
            $time_sheet_id = $request->input('id');
            $info_timesheet = Timesheet::find($time_sheet_id);
        

            $params = [
                'title'          => 'Thêm task cho timesheet',
                'js'             => 'user.components.timesheet.js',
                'css'            => 'user.components.timesheet.css',
                'info_timesheet' => $info_timesheet
            ];
            return view('user.pages.addtask')->with($params);
        }

    }

    public function addtask_action(Request $request)
    {
        $action = $request->input('action');
        $tasks = Task::all();
        $users = User::all();

        $id_user = Auth::user()->id;
        $info_user = User::find($id_user);

        $list_tasks_assign = DB::table('tasks')->where('assign_to',$id_user)->get();

        $assignees = $info_user->assignee;
        switch ($action) {
            case 'add':
                $params = [
                    'title'     => 'Thêm task vào timesheet',
                    'users'     => $users,
                    'info_user' => $info_user,
                    'assignees' => $assignees,
                    'id_user'   => $id_user,
                    'list_tasks_assign' => $list_tasks_assign
                ];
                return view('user.components.timesheet.add_task_to_timesheet_modal')->with($params);
                break;
            case 'edit':
                $id_task = $request->input('id');
                $info_task = Task::find($id_task);
                $params = [
                    'title'     => 'Sửa thông tin task',
                    'users'     => $users,
                    'assignees' => $assignees,
                    'info_user' => $info_user,
                    'info_task' => $info_task,
                    'id_task'   => $id_task
                ];
                return view('user.components.task.edit_task_modal')->with($params);
                break;         
            default:
                # code...
                break;
        }
    }
}
