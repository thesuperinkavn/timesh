<?php 

Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
Route::post('/logout', 'Auth\AdminLoginController@logout')->name('admin.logout');
// Route::get('/home', 'Admin\AdminController@index')->name('admin.home');
// Route::any('/approve', 'AdminController@approve')->name('admin.approve');
// Route::any('/unapprove', 'AdminController@unapprove')->name('admin.unapprove');
Route::get('/dashboard', 'AdminController@index')->name('admin.home');
Route::get('/usermanagement', 'UserManagement@index');
Route::post('/usermanagement/action', 'UserManagement@action');
Route::post('/usermanagement/add', 'UserManagement@add');
Route::post('/usermanagement/edit', 'UserManagement@edit');
Route::post('/usermanagement/destroy', 'UserManagement@destroy');

// Route::any('/setting', 'Admin\SettingController@index');
// Route::post('/setting/timeupdate', 'Admin\SettingController@timeupdate');