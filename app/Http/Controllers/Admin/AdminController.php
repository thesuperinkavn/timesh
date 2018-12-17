<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class AdminController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function index()
    {
        $params = [
            'title'         => 'Dashboard',
            'js'            => 'admin.components.dashboard.js'
        ];
        return view('admin.dashboard.index')->with($params);
    }
}
