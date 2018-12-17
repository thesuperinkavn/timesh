@extends('admin.layouts.main')
@section('title',$title)

@section('head-css')
    @if (isset($css))
        @include($css)
    @endif
    
@endsection

@section('content')
    @include('admin.setting.index')
@endsection

@section('footer-js')
    @if (isset($js))
        @include($js)
    @endif
@endsections