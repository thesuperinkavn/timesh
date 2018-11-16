@extends('layouts.default')
@section('title',$title)

@section('head-js')
    @include($js)
@endsection

@section('class',$class)
@section('content')
    @include('user.components.login.login')
@endsection