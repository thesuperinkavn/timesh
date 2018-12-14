<?php
namespace App\Services\Interfaces;

interface UserInterface
{
    public function getAll();
    public function find($id);
    // public function create($attributes = array());
    // public function update($attributes = array());
    // public function delete($id);
}