<?php
namespace App\Services\Interfaces;

interface TimesheetInterface
{
    public function getAll();
    public function find($id);
    public function store($attributes = array());
    // public function update($attributes = array());
    // public function delete($id);
}