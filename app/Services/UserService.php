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
}