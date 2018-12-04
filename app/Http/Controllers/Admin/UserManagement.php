<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use DB;
use App\Model\Admin;
use Illuminate\Support\Facades\Hash;

class UserManagement extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function index()
    {
        $users = User::all();

        $params = [
            'title'         => 'Quản lý nhân viên',
            'js'            => 'admin.components.usermanagement.js',
            'css'            => 'admin.components.usermanagement.css',
            'users'          => $users
        ];
        return view('admin.pages.usermanagement')->with($params);
    }

    function action(Request $request)
    {
        $action = $request->input('action');
        $users = User::all();
        

        switch ($action) {
            case 'add':
                $leaders = DB::table('users')->where('role',3)->get();
                $params = [
                    'title' => 'Thêm mới nhân viên',
                    'users' => $users,
                    'leaders' => $leaders
                ];
                return view('admin.components.usermanagement.add_user_modal')->with($params);
                break;
            case 'edit':
                $id = $request->input('id');
                $info = User::find($id);
                $leaders = DB::table('users')->where('role',3)->where('id','<>',$id)->get();
                $list = ($info->notify_accounts!=null) ? explode(',', $info->notify_accounts) : [];
                $params = [
                    'title' => 'Sửa thông tin nhân viên',
                    'users' => $users,
                    'info'  => $info,
                    'leaders' => $leaders,
                    'users'   => $users,
                    'list'    => $list
                ];
                return view('admin.components.usermanagement.edit_user_modal')->with($params);
                break;         
            default:
                # code...
                break;
        }
        //return response()->json(['success'=>'Got Simple Ajax Request.']);;
    }

    function add(Request $request)
    {
        //print_r($request->all());
        $errors  = array('error' => 0);
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        $description = $request->input('description');
        $leader = $request->input('leader');
        $role = $request->input('role');
        $approve = $request->input('approve');

        if (empty($name) || empty($email) || empty($password) ){ $errors['err'] = 'Không được để trống';}

        if (User::where('email', '=', $email)->exists()) {
            $errors['email'] = 'email đã tồn tại';
        }
        if (count($errors) > 1){
            $errors['error'] = 1;
            return response()->json($errors);
        }

        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
            'description' => $description,
            'leader_id' => $leader,
            'role' => $role,
            'approve' => $approve,
            'avatar'  => 'noavatar.png'
        ]);

        return response()->json($errors);
        
    }

    function edit(Request $request)
    {
        //print_r($request->all());
        $errors  = array('error' => 0);
        $id = $request->input('id');
        $info = User::find($id);

        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        $description = $request->input('description');
        $leader = $request->input('leader');
        $role = $request->input('role');
        $approve = $request->input('approve');
        $notilist = (!empty($request->input('notilist'))) ? $request->input('notilist') : [];

        $notify_accounts = implode(',', $notilist);

        if (empty($name) || empty($email) ){ $errors['err'] = 'Không được để trống';}

        if (User::where('email', '=', $email)->exists() && $email!= $info->email) {
            $errors['email'] = 'email đã tồn tại';
        }
        if (count($errors) > 1){
            $errors['error'] = 1;
            return response()->json($errors);
        }

        $password = ($password == '') ? $info->password : Hash::make($password);

        $info->name = $name;
        $info->email = $email;
        $info->password = $password;
        $info->description = $description;
        $info->leader_id = $leader;
        $info->role = $role;
        $info->approve = $approve;
        $info->notify_accounts = $notify_accounts;

        $info->save();

        return response()->json($errors);
        
    }

    public function destroy(Request $request)
    {
        $errors  = array('error' => 0);
        $id = $request->input('id');
        if ($id) {
            
            $info = User::find($id);
            if($info){
                $info->delete();
            }
            else {
                $errors['errors'] = 1;
            }
            return response()->json($errors);
        }
    }
}
