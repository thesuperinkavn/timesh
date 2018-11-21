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

   
    public function show(Request $request)
    {
        //
        $timesheet_id = $request->input('id');
        $info_timesheet = Timesheet::find($timesheet_id);

        $list_tasks_added = Timesheet::find($timesheet_id)->tasks;

        $params = [
            'title'            => 'Hiển thị thông tin timesheet',
            'info_timesheet'   => $info_timesheet,
            'list_tasks_added' => $list_tasks_added
        ];
        return view('user.components.timesheet.show_timesheet_modal')->with($params);
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
            'issue'     => $request->get('issue'),
            'plan'     => $request->get('plan'),
            'created_by'=> Auth::id()
        ]);
        $timesheet->save();
        return redirect('/timesheet')->with('success', 'Thêm mới thành công');
    }

    public function edit(Request $request)
    {
        $timesheet_id = $request->input('id');
        $info_timesheet = Timesheet::find($timesheet_id);

        $params = [
            'title'          => 'Sửa thông tin timesheet',
            'js'             => 'user.components.timesheet.create-js',
            'css'            => 'user.components.timesheet.create-css',
            'info_timesheet' => $info_timesheet
        ];
        return view('user.pages.timesheet-edit')->with($params);
    }

    public function update(Request $request)
    {
        $timesheet_id = $request->input('id');
        $timesheet = Timesheet::find($timesheet_id);

        $time = strtotime($request->get('release_date'));
        $newformat = date('Y-m-d',$time);

        if(strtotime($newformat) != strtotime($timesheet->release_date)){
            $request->validate([
                'release_date' => ['required', new Dateunique],
            ]);
        }
        
        $request->validate([
            'release_date' => ['required']
        ]);

        $timesheet->name = $request->get('name');
        $timesheet->description = $request->get('description');
        $timesheet->release_date = $newformat;
        $timesheet->issue = $request->get('issue');
        $timesheet->plan = $request->get('plan');
        $timesheet->approve = '0';
        $timesheet->updated_at = Carbon::now();

        $timesheet->save();
        return redirect('/timesheet')->with('success', 'Sửa thông tin thành công');
    }

    public function addtask(Request $request)
    {
        if($request->input('id')){
            $timesheet_id = $request->input('id');
            $info_timesheet = Timesheet::find($timesheet_id);
           
            $list_tasks_added = Timesheet::find($timesheet_id)->tasks;

            $params = [
                'title'            => 'Thêm task cho timesheet',
                'js'               => 'user.components.timesheet.js',
                'css'              => 'user.components.timesheet.css',
                'info_timesheet'   => $info_timesheet,
                'list_tasks_added' => $list_tasks_added
            ];
            return view('user.pages.addtask')->with($params);
        }

    }

    public function addtask_action(Request $request)
    {
        $action = $request->input('action');
        $timesheet_id = $request->input('id');
        $user_id = Auth::id();
        $list_tasks_assign = DB::table('tasks')->where('assign_to',$user_id)->get();

        switch ($action) {
            case 'add':
                $params = [
                    'title'     => 'Thêm task vào timesheet',
                    'list_tasks_assign' => $list_tasks_assign,
                    'timesheet_id'     => $timesheet_id
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

    public function addTaskToTimeSheet(Request $request)
    {
        $errors  = array('error' => 0);

        $task_id = $request->input('task');
        $content = $request->input('content');
        $duration = $request->input('duration');
        $timesheet_id = $request->input('timesheet_id');

        $info= DB::table('task_timesheet')
            ->where('timesheet_id',$timesheet_id)
            ->where('task_id',$task_id)
            ->get();

        if(count($info)){
            $errors['error'] = 1;
            $errors['err'] = 'Task này đã được tạo trong timesheet';
            return response()->json($errors);
        }
        else {
            $timesheet = Timesheet::find($timesheet_id);
            $timesheet->tasks()->attach($task_id, ['content'=> $content, 'duration'=> $duration]); //this executes the insert-query
            
            //$timesheet = Timesheet::find($timesheet_id);
            $timesheet->approve = '0';
            $timesheet->updated_at = Carbon::now();
            $timesheet->save();
    
            return response()->json($errors);
        }
        
    }

    public function removeTaskFromTimeSheet(Request $request)
    {
        $errors  = array('error' => 0);
        $id = $request->input('id');
        $timesheet_id = $request->input('timesheet');
        $task_id = $request->input('task_id');

        $timesheet = Timesheet::find($timesheet_id);
        $timesheet->tasks()->detach($task_id); //this executes the insert-query

        //$timesheet = Timesheet::find($timesheet_id);
        $timesheet->approve = '0';
        $timesheet->updated_at = Carbon::now();
        $timesheet->save();

        return response()->json($errors);

    }
}
