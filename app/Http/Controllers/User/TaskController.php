<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use DB;
use App\Model\Task;
use Auth;
use Carbon\Carbon;

class TaskController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $tasks = Task::all();

        $id = Auth::user()->id;
        $user = User::find($id);

        $params = [
            'title'          => 'Quản lý task',
            'js'             => 'user.components.task.js',
            'css'            => 'user.components.task.css',
            'tasks'          => $tasks
        ];
        return view('user.pages.task')->with($params);
    }

    public function action(Request $request)
    {
        $action = $request->input('action');
        $tasks = Task::all();
        $users = User::all();

        $id = Auth::user()->id;
        $info_user = User::find($id);

        $assignees = $info_user->assignee;
        switch ($action) {
            case 'add':
                $params = [
                    'title'     => 'Thêm mới task',
                    'users'     => $users,
                    'info_user' => $info_user,
                    'assignees' => $assignees,
                    'id'        => $id
                ];
                return view('user.components.task.add_task_modal')->with($params);
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

    public function add(Request $request)
    {
        $errors  = array('error' => 0);
        $name = $request->input('name');
        $description = $request->input('description');
        $assignee = $request->input('assignee');
        $priority = $request->input('priority');
        $status = $request->input('status');
        $active = $request->input('active');
        $created_by = $request->input('creator');

        if (empty($name)){ $errors['err'] = 'Không được để trống tên và mô tả';}

        if (count($errors) > 1){
            $errors['error'] = 1;
            return response()->json($errors);
        }

        $task = Task::create([
            'name' => $name,
            'description' => $description,
            'assign_to' => $assignee,
            'priority' => $priority,
            'status' => $status,
            'active' => $active,
            'created_by' => $created_by
        ]);

        return response()->json($errors);
    }

    public function edit(Request $request)
    {
        $errors  = array('error' => 0);
        $id = $request->input('id_task');
        $task = Task::find($id);

        $name = $request->input('name');
        $description = $request->input('description');
        $assignee = $request->input('assignee');
        $priority = $request->input('priority');
        $status = $request->input('status');
        $active = $request->input('active');

        if (empty($name)){ $errors['err'] = 'Không được để trống tên và mô tả';}

        if (count($errors) > 1){
            $errors['error'] = 1;
            return response()->json($errors);
        }

        $task->name = $name;
        $task->description = $description;
        $task->assign_to = $assignee;
        $task->priority = $priority;
        $task->status = $status;
        $task->active = $active;
        $task->updated_at = Carbon::now();

        $task->save();

        return response()->json($errors);
    }

    public function destroy(Request $request)
    {
        $errors  = array('error' => 0);
        $id = $request->input('id');
        if ($id) {
            
            $task = Task::find($id);
            if($task){
                $task->delete();
            }
            else {
                $errors['errors'] = 1;
            }
            return response()->json($errors);
        }
    }
}
