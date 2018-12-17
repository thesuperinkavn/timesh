@extends('admin.layouts.main')
@section('title',$title)

@hasSection('head-css')
    @include($css)
@endif

@section('content')
    @include('user.task.'.$page)
@endsection

@hasSection('footer-js')
    @include($js)
@endif