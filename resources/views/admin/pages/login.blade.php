@extends('layouts.default')
@section('title',$title)

@section('head-js')
    @include($js)
@endsection

@section('class',$class)
@section('content')    
    @include('admin.components.login.login')
@endsection