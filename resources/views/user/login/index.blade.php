@extends('admin.layouts.main')
@section('title',$title)

@section('head-js')
    @include($js)
@endsection

@section('class',$class)
@section('content')
    @include('user.login.content')
@endsection