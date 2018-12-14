<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\User\Controller;
use Auth;
use App\User;
use Intervention\Image\Facades\Image;

class ProfileController extends Controller
{
    //
    public function index()
    {
        $params = [
            'title'          => 'Quản lý thông tin cá nhân',
            'js'             => 'user.components.profile.js',
            'css'            => 'user.components.profile.css'
        ];
        return view('user.pages.profile')->with($params);
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'name'  => 'required'
        ]);

        $info = User::find(AUth::id());
        $name = $request->input('name');
        $password = $request->input('password');
        $description = $request->input('description');

        $password = ($password == '') ? $info->password : Hash::make($password);
        $image = $info->avatar;
        
        if ($request->hasFile('image')) {
            $this->validate($request, [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            if ($request->file('image')->isValid()) {
                $image = $this->upload($request->file('image'));
            }
        }
        
        $info->name = $name;
        $info->password = $password;
        $info->description = $description;
        $info->avatar = $image;

        $info->save();
        return redirect()->back()->with('success', 'Sửa thành công!');
    }

    public function upload($image)
    {
        $fileExtension = $image->getClientOriginalExtension(); // Lấy . của file

        //generate file name
        $pref = time() . "_" . rand(0,9999999) . "_" . md5(rand(0,9999999));
        
        // Filename cực shock để khỏi bị trùng
        $origin = $pref . "." . $fileExtension;
        $resize = $pref.'-resize'."." . $fileExtension;

        // Thư mục upload
        $uploadPath = public_path('/upload/avatar'); // Thư mục upload

        if (!file_exists($uploadPath)) {
            mkdir($uploadPath, 666, true);
        }
        
        $img = Image::make($image->getRealPath());
        $img->resize(300, 300)->save($uploadPath.'/'.$resize);

        // Bắt đầu chuyển file vào thư mục
        $image->move($uploadPath, $origin);

        return $resize;

    }
}
