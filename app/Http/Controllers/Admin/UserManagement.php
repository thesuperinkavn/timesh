<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Admin\AdminBaseController;
use Illuminate\Support\Facades\Hash;
use App\Services\Interfaces\UserInterface;
use Auth;

class UserManagement extends AdminBaseController
{
    //
    public function __construct(UserInterface $user)
    {
        $this->middleware('auth:admin');
        $this->user = $user;
    }

    public function index()
    {
        $users = $this->user->getAll();

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
        $users = $this->user->getAll();
        

        switch ($action) {
            case 'add':
                $leaders = $this->user->getAllLeaders();
                $params = [
                    'title' => 'Thêm mới nhân viên',
                    'users' => $users,
                    'leaders' => $leaders
                ];
                return view('admin.components.usermanagement.add_user_modal')->with($params);
                break;
            case 'edit':
                $id = $request->input('id');
                $info = $this->user->find($id);
                $leaders = $this->user->getAllOthersLeaders($id);
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

    function store(Request $request)
    {
        //print_r($request->all());
        $errors  = array('error' => 0);

        $attributes = array(
            'name'          => $request->input('name'),
            'email'         => $request->input('email'),
            'password'      => Hash::make($request->input('password')),
            'description'   => $request->input('description'),
            'leader_id'     => $request->input('leader'),
            'role'          => $request->input('role'),
            'approve'       => $request->input('approve'),
            'avatar'        => 'noavatar.png'
        );

        if (empty($request->input('name')) || empty($request->input('email')) || empty($request->input('password')) ){ $errors['err'] = 'Không được để trống';}

        if (count($errors) > 1){
            $errors['error'] = 1;
            return response()->json($errors);
        }

        $user = $this->user->store($attributes);
        if(!$user){
            $errors['error'] = 1;
            return response()->json($errors);
        }
        return response()->json($errors);
        
    }

    function update(Request $request)
    {
        //print_r($request->all());
        $errors  = array('error' => 0);
        $id = $request->input('id');

        $info = $this->user->find($id);

        $password = $request->input('password');
        $password = ($password == '') ? $info->password : Hash::make($password);
        $notilist = (!empty($request->input('notilist'))) ? $request->input('notilist') : [];
        $notify_accounts = implode(',', $notilist);

        $attributes = array(
            'name'          => $request->input('name'),
            'email'         => $request->input('email'),
            'password'      => $password,
            'description'   => $request->input('description'),
            'leader_id'     => $request->input('leader'),
            'role'          => $request->input('role'),
            'approve'       => $request->input('approve'),
            'notify_accounts'      => $notify_accounts
        );

        if (empty($request->input('name')) || empty($request->input('email')) ){ $errors['err'] = 'Không được để trống';}

        if (count($errors) > 1){
            $errors['error'] = 1;
            return response()->json($errors);
        }

        if ($this->user->update($id, $attributes) == FALSE)
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
        if ($this->user->destroy($id) == FALSE)
        {
            $errors['error'] = 1;
            return response()->json($errors);
        }
        return response()->json($errors);
    }
}
