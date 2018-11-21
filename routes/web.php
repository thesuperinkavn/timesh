<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Auth::routes();
Auth::routes(['register' => false]);

Route::get('/home', 'User\TaskController@index')->name('home');

Route::prefix('admin')->group(function() {
    Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
    Route::get('/home', 'AdminController@index')->name('admin.home');
    Route::any('/approve', 'AdminController@approve')->name('admin.approve');
    Route::any('/unapprove', 'AdminController@unapprove')->name('admin.unapprove');
    Route::any('/dashboard', 'Admin\AdminController@index')->name('admin.home');
    Route::any('/usermanagement', 'Admin\UserManagement@index');
    Route::post('/usermanagement/action', 'Admin\UserManagement@action');
    Route::post('/usermanagement/add', 'Admin\UserManagement@add');
    Route::post('/usermanagement/edit', 'Admin\UserManagement@edit');
    Route::post('/usermanagement/destroy', 'Admin\UserManagement@destroy');

});


Route::any('/task', 'User\TaskController@index');
Route::post('/task/action', 'User\TaskController@action');
Route::post('/task/add', 'User\TaskController@add');
Route::post('/task/edit', 'User\TaskController@edit');
Route::post('/task/destroy', 'User\TaskController@destroy');


Route::any('timesheet', 'User\TimesheetController@index');
Route::any('timesheet/create', 'User\TimesheetController@create');
Route::any('timesheet/edit', 'User\TimesheetController@edit');
Route::post('timesheet/store', 'User\TimesheetController@store');
Route::post('timesheet/update', 'User\TimesheetController@update');
Route::post('timesheet/show', 'User\TimesheetController@show');
Route::any('timesheet/addtask', 'User\TimesheetController@addtask');
Route::post('timesheet/addtask_action', 'User\TimesheetController@addtask_action');
Route::get('timesheet/addtask/{id}', 'User\TimesheetController@addtask');
Route::post('timesheet/addTaskToTimeSheet', 'User\TimesheetController@addTaskToTimeSheet');
Route::post('timesheet/removeTaskFromTimeSheet', 'User\TimesheetController@removeTaskFromTimeSheet');

Route::any('/report', 'User\ReportController@index');