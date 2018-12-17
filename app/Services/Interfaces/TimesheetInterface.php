<?php
namespace App\Services\Interfaces;

interface TimesheetInterface
{
    public function getAll();
    public function find($id);
    public function store($attributes = array());
    public function update($id,$attributes = array());
    public function destroy($id);
}