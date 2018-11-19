<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use DB;
use App\Model\Task;

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

        $params = [
            'title'          => 'Quản lý task',
            'js'             => 'user.components.task.js',
            'css'            => 'user.components.task.css',
            'tasks'          => $tasks
        ];
        return view('user.pages.task')->with($params);
    }
}
