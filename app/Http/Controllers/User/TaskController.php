<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\User\UserController;
use App\Services\Interfaces\TaskInterface;
use App\Services\Interfaces\UserInterface;

use Auth;

class TaskController extends UserController
{
    //
    protected $task, $users;
    public function __construct(TaskInterface $task, UserInterface $user)
    {
        //$this->middleware('auth');
        $this->task = $task;
        $this->user = $user;
    }

    public function index()
    {
        $tasks = $this->task->getAll();

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
        $tasks = $this->task->getAll();
        $users = $this->user->getAll();

        $info_user = $this->user->find(Auth::user()->id);

        switch ($action) {
            case 'add':
                $params = [
                    'title'     => 'Thêm mới task',
                    'users'     => $users,
                    'info_user' => $info_user,
                    'id'        => Auth::user()->id
                ];
                return view('user.components.task.add_task_modal')->with($params);
                break;
            case 'edit':
                $id_task = $request->input('id');
                $info_task = $this->task->find($id_task);
                $params = [
                    'title'     => 'Sửa thông tin task',
                    'users'     => $users,
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

    public function store(Request $request)
    {
        $errors  = array('error' => 0);
        $attributes = array(
            'name'          => $request->input('name'),
            'description'   => $request->input('description'),
            'assign_to'     => $request->input('assignee'),
            'active'        => $request->input('active'),
            'created_by'    => $request->input('creator'),
            'priority'      => $request->input('priority'),
            'status'        => $request->input('status')
        );

        if (empty($request->input('name'))){ $errors['err'] = 'Không được để trống tên và mô tả';}

        if (count($errors) > 1){
            $errors['error'] = 1;
            return response()->json($errors);
        }

        $task = $this->task->store($attributes);
        return response()->json($errors);
    }

    public function update(Request $request)
    {
        $errors  = array('error' => 0);
        $id = $request->input('id_task');
        
        $attributes = array(
            'name'          => $request->input('name'),
            'description'   => $request->input('description'),
            'assign_to'     => $request->input('assignee'),
            'active'        => $request->input('active'),
            'priority'      => $request->input('priority'),
            'status'        => $request->input('status')
        );

        if (empty($request->input('name'))){ $errors['err'] = 'Không được để trống tên và mô tả';}

        if (count($errors) > 1)
        {
            $errors['error'] = 1;
            return response()->json($errors);
        }

        if ($this->task->update($id, $attributes) == FALSE)
        {
            $errors['error'] = 1;
            return response()->json($errors);
        }

        return response()->json($errors);
    }

    public function destroy(Request $request)
    {
        $errors  = array('error' => 0);
        $id = $request->input('id');
        if ($this->task->destroy($id) == FALSE)
        {
            $errors['error'] = 1;
            return response()->json($errors);
        }
        return response()->json($errors);
    }
}
