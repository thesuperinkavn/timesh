@extends('layouts.default')
@section('title',$title)

@section('head-css')
    @include($css)
@endsection

@section('head-js')
    @include($js)
@endsection

@section('content')
    @include('user.components.task.index')
@endsection