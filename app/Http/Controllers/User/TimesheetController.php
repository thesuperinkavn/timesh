<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use DB;
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

    public function addtask()
    {
        $params = [
            'title'          => 'Thêm task cho timesheet',
            'js'             => 'user.components.timesheet.js',
            'css'            => 'user.components.timesheet.css'
        ];
        return view('user.pages.addtask')->with($params);
    }
}
