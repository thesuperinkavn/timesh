<?php 

Auth::routes(['register' => false]);

Route::get('/home', 'TaskController@index')->name('user.home');
Route::get('/task', 'TaskController@index');
Route::post('/task/action', 'TaskController@action');
Route::post('/task/store', 'TaskController@store');
Route::post('/task/update', 'TaskController@update');
Route::post('/task/destroy', 'TaskController@destroy');

Route::get('profile', 'ProfileController@index')->name('user.profile');
Route::post('profile/update', 'ProfileController@update')->name('user.profile.update');


Route::get('timesheet', 'TimesheetController@index')->name('timesheet.all');
Route::get('timesheet/create', 'TimesheetController@create')->name('timesheet.create');
Route::get('timesheet/edit/{id}', 'TimesheetController@edit')->name('timesheet.edit');
Route::post('timesheet/update/{id}', 'TimesheetController@update')->name('timesheet.update');
Route::post('timesheet/store', 'TimesheetController@store')->name('timesheet.store');
Route::post('timesheet/show', 'TimesheetController@show')->name('timesheet.show');
Route::get('timesheet/addtask/{id}', 'TimesheetController@addtask')->name('timesheet.addtask');
Route::post('timesheet/addtask_action', 'TimesheetController@addtask_action')->name('timesheet.addtask.action');
Route::post('timesheet/addTaskToTimeSheet', 'TimesheetController@addTaskToTimeSheet');
Route::post('timesheet/removeTaskFromTimeSheet', 'TimesheetController@removeTaskFromTimeSheet');
Route::get('timesheet/filter', 'TimesheetController@filter')->name('timesheet.filter');

Route::get('/timesheet/review', 'ApproveTimesheetController@review')->name('timesheet.review');
Route::post('timesheet/review/approve', 'ApproveTimesheetController@approve')->name('timesheet.approve');
Route::post('timesheet/review/unapprove', 'ApproveTimesheetController@unapprove')->name('timesheet.unapprove');

Route::get('/report', 'ReportController@index');