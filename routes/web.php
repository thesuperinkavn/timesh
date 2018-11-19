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

Route::get('/home', 'HomeController@index')->name('home');

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
