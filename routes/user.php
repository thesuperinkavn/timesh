<?php 

Auth::routes();

Route::get('/home', 'TaskController@index')->name('user.home');
Route::get('/task', 'TaskController@index');
Route::post('/task/action', 'TaskController@action');
Route::post('/task/store', 'TaskController@store');
Route::post('/task/update', 'TaskController@update');
Route::post('/task/destroy', 'TaskController@destroy');

Route::get('profile', 'ProfileController@index')->name('user.profile');
Route::post('profile/update', 'ProfileController@update')->name('user.profile.update');


Route::get('timesheet', 'TimesheetController@index')->name('timesheet.all');
Route::any('timesheet/create', 'TimesheetController@create')->name('timesheet.create');
Route::any('timesheet/edit/{id}', 'TimesheetController@edit')->name('timesheet.edit');
Route::post('timesheet/store', 'TimesheetController@store');
// Route::post('timesheet/update', 'User\TimesheetController@update');
// Route::post('timesheet/show', 'User\TimesheetController@show');
// Route::any('timesheet/addtask', 'User\TimesheetController@addtask');
// Route::post('timesheet/addtask_action', 'User\TimesheetController@addtask_action');
// Route::get('timesheet/addtask/{id}', 'User\TimesheetController@addtask');
// Route::post('timesheet/addTaskToTimeSheet', 'User\TimesheetController@addTaskToTimeSheet');
// Route::post('timesheet/removeTaskFromTimeSheet', 'User\TimesheetController@removeTaskFromTimeSheet');
Route::get('timesheet/filter', 'TimesheetController@filter')->name('timesheet.filter');