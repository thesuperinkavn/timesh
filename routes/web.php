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



Route::prefix('admin')->group(function() {


});





// Route::any('timesheet', 'User\TimesheetController@index')->name('timesheet.all');
// Route::any('timesheet/create', 'User\TimesheetController@create');
// Route::any('timesheet/edit', 'User\TimesheetController@edit');
// Route::post('timesheet/store', 'User\TimesheetController@store');
// Route::post('timesheet/update', 'User\TimesheetController@update');
// Route::post('timesheet/show', 'User\TimesheetController@show');
// Route::any('timesheet/addtask', 'User\TimesheetController@addtask');
// Route::post('timesheet/addtask_action', 'User\TimesheetController@addtask_action');
// Route::get('timesheet/addtask/{id}', 'User\TimesheetController@addtask');
// Route::post('timesheet/addTaskToTimeSheet', 'User\TimesheetController@addTaskToTimeSheet');
// Route::post('timesheet/removeTaskFromTimeSheet', 'User\TimesheetController@removeTaskFromTimeSheet');
// Route::get('timesheet/filter', 'User\TimesheetController@filter')->name('timesheet.filter');

// Route::any('/report', 'User\ReportController@index');
// Route::any('/timesheet/review', 'User\TimesheetController@reviewTimeSheet');

// Route::post('timesheet/review/approve', 'User\TimesheetController@approve');
// Route::post('timesheet/review/unapprove', 'User\TimesheetController@unapprove');

// Route::get('profile', 'User\ProfileController@index')->name('profile');
// Route::post('profile/update', 'User\ProfileController@update')->name('profile.update');



