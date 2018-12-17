<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\User\UserController;
use App\Services\Interfaces\TimesheetInterface;
use App\Services\Interfaces\EmailInterface;
use App\Http\Requests\StoreTimesheet;
use App\Http\Requests\UpdateTimesheet;
use Auth;
use App\Rules\Dateunique;
use App\Rules\Righttime;
use Carbon\Carbon;

class TimesheetController extends UserController
{
    //
    protected $timesheet;

    public function __construct(TimesheetInterface $timesheet, EmailInterface $email)
    {
        $this->timesheet = $timesheet;
        $this->email = $email;
        $this->middleware('auth');
    }


    public function index()
    {
        $timesheets = $this->timesheet->getAll();

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
        $info_timesheet = $this->timesheet->find($request->input('id'));

        $list_tasks_added = $info_timesheet->tasks;

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

    public function store(StoreTimesheet $request)
    {
        $newformat = date('Y-m-d',strtotime($request->get('release_date')));

        $attributes = array(
            'name'          => $request->input('name'),
            'description'   => $request->input('description'),
            'release_date'  => $newformat,
            'issue'         => $request->input('issue'),
            'plan'          => $request->input('plan'),
            'created_by'    => Auth::id()
        );
        $timesheet = $this->timesheet->store($attributes);

        //$this->sendEmailReminder(Auth::id(),'1',$newformat);
        if($this->email->sendEmailReminderToLeader(Auth::id(),'1',$newformat) === 0)
        {
            return redirect('/timesheet')->with('success', 'Thêm mới thành công');
        }
        else {
            return redirect('/timesheet')->with('error', 'Có lỗi xảy ra');
        }
        
    }

    public function edit($id)
    {
        $info_timesheet = $this->timesheet->find($id);

        $params = [
            'title'          => 'Sửa thông tin timesheet',
            'js'             => 'user.components.timesheet.create-js',
            'css'            => 'user.components.timesheet.create-css',
            'info_timesheet' => $info_timesheet
        ];
        return view('user.pages.timesheet-edit')->with($params);
    }

    public function update($id, Request $request)
    {
        $time = strtotime($request->get('release_date'));
        $newformat = date('Y-m-d',$time);
        $timesheet = $this->timesheet->find($id);

        if(strtotime($newformat) != strtotime($timesheet->release_date)){
            $request->validate([
                'release_date' => ['required', new Dateunique, new Righttime],
            ]);
        }
        
        $request->validate([
            'release_date' => ['required'],
            'name'         => 'required'
        ]);

        $attributes = array(
            'name'          => $request->input('name'),
            'description'   => $request->input('description'),
            'release_date'  => $newformat,
            'issue'         => $request->input('issue'),
            'plan'          => $request->input('plan'),
            'approve'       => 0,
            'updated_at'    => Carbon::now()
        );
        $this->timesheet->update($id, $attributes);
        //$this->sendEmailReminder(Auth::id(),'2',$timesheet->release_date);
        echo ($this->email->sendEmailReminderToLeader(Auth::id(),'2',$newformat));
        if($this->email->sendEmailReminderToLeader(Auth::id(),'2',$newformat) === 0)
        {
           
            return redirect('/timesheet')->with('success', 'Cập nhật thành công');
        }
        else {
            return redirect('/timesheet')->with('error', 'Có lỗi xảy ra');
        }
        
    }

    public function addtask($id)
    {

        $timesheet = $this->timesheet->find($id); 
        $list_tasks_added = $timesheet->tasks;

        $params = [
            'title'            => 'Thêm task cho timesheet :'.$id,
            'js'               => 'user.components.timesheet.js',
            'css'              => 'user.components.timesheet.css',
            'info_timesheet'   => $timesheet,
            'list_tasks_added' => $list_tasks_added
        ];
        return view('user.pages.addtask')->with($params);
        
    }

    public function addtask_action(Request $request)
    {
        $action = $request->input('action');
        $timesheet_id = $request->input('id');
        $list_tasks_assign = $this->timesheet->getAllTask();

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
        $timesheet_id = $request->input('timesheet_id');

        $attributes = array(
            'content'          => $request->input('content'),
            'duration'         => $request->input('duration')
        );

        if($this->timesheet->checkTaskInTimesheet($timesheet_id, $task_id)){
            $errors['error'] = 1;
            $errors['err'] = 'Task này đã được tạo trong timesheet';
            return response()->json($errors);
        }
        else {
            if($this->timesheet->addTaskToTimesheet($timesheet_id, $task_id, $attributes) === 0){
                $errors['error'] = 1;
                $errors['err'] = 'Có lỗi xảy ra, vui lòng thử lại';
                return response()->json($errors);
            }
            $attributes = array(
                'approve'       => 0,
                'updated_at'    => Carbon::now()
            );
            $this->timesheet->update($timesheet_id, $attributes);
            return response()->json($errors);
        }
        
    }

    public function removeTaskFromTimeSheet(Request $request)
    {
        $errors  = array('error' => 0);

        $timesheet_id = $request->input('timesheet');
        $task_id = $request->input('task_id');
        $timesheet = $this->timesheet->find($timesheet_id); 

        if($this->timesheet->removeTaskFromTimeSheet($timesheet_id, $task_id) === 0){
            $errors['error'] = 1;
            $errors['err'] = 'Có lỗi xảy ra, vui lòng thử lại';
            return response()->json($errors);
        }

        $attributes = array(
            'approve'       => 0,
            'updated_at'    => Carbon::now()
        );
        $this->timesheet->update($timesheet_id, $attributes);
        return response()->json($errors);

    }

    public function filter(Request $request)
    {
        $dataRange = $request->input('dateranger');
        $timesheets = $this->timesheet->filterTimesheet($dataRange);

        $params = [
            'title'          => 'Quản lý timesheet',
            'js'             => 'user.components.timesheet.js',
            'css'            => 'user.components.timesheet.css',
            'timesheets'     => $timesheets
        ];
        return view('user.pages.timesheet')->with($params);

    }
}
