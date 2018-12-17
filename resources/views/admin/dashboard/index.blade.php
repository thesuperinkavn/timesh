@extends('admin.layouts.main')
@section('title',$title)

@section('head-js')
    @include($js)
@endsection

@section('content')
    @include('admin.components.dashboard.dashboard')
@endsection