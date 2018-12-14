<?php 

namespace App\Services;
use App\Model\Task;
use App\Services\Interfaces\TaskInterface;
use Auth;

class TaskService implements TaskInterface
{
    public function getAll()
    {
        $id = Auth::user()->id;
        return Task::where('created_by',$id)->get();
    }

    public function find($id)
    {
        return Task::find($id);
    }

    public function store($attributes = array())
    {
        return Task::create($attributes);
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
}