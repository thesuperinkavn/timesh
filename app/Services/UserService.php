<?php 

namespace App\Services;
use App\User;
use App\Services\Interfaces\UserInterface;
use Auth;

class UserService implements UserInterface
{
    public function getAll()
    {
        return User::where('active',1)->get();
    }

    public function find($id)
    {
        return User::find($id);
    }

    public function store($attributes = array())
    {
        return User::create($attributes);
    }

    public function update($id, $attributes = array())
    {
        $info = $this->find($id);
        if ($info) {
            $info->update($attributes);
            return $info;
        }
        return false;
    }

    public function destroy($id)
    {
        $info = $this->find($id);
        if ($info) {
            $info->delete();
            return true;
        }
        return false;
    }

    public function getAllLeaders()
    {
        return User::where('role',3)->get();
    }

    public function getAllOthersLeaders($id)
    {
        return User::where('role',3)->where('id','<>',$id)->get();
    }
}