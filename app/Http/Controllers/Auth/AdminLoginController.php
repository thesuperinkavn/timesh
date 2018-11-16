<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class AdminLoginController extends Controller
{
    //
    use AuthenticatesUsers;
    protected $redirectTo = '/admin/dashboard';

    public function __construct()
    {
        $this->middleware('guest:admin')->except('logout');
    }
    

    public function showLoginForm()
    {
        $params = [
            'title'         => 'Trang đăng nhập dành cho quản trị viên',
            'js'            => 'admin.components.login.js',
            'class'         => 'login-container'
        ];
        return view('admin.pages.login')->with($params);
    }

    protected function guard(){
        return Auth::guard('admin');
    }
}
