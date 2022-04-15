@extends('admin.layouts.app')

@section('title', 'Media Images')
@section('content')
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Images</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
    <iframe class="shadow mb-4 rounded" src="{{ url('laravel-filemanager?type=image') }}" style="width: 100%; height: 600px; overflow: hidden; border: none;"></iframe>
@endsection