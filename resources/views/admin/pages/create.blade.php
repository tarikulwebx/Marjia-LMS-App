@extends('admin.layouts.app')

@section('title', 'Edit page')

@section('content')

    @if ($errors->all())
        <div class="alert alert-danger  mb-3 alert-dismissible fade show" role="alert">
            <strong>Fix following errors: </strong>
            <ul class="m-0">
                @foreach ($errors->all() as $message)
                    <li>{{ $message }}</li>
                @endforeach
            </ul>
            <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">New Page</h1>
        <a href="{{ route('pages.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-arrow-right text-white-50 me-1"></i> All pages</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Create Page:</h6>
        </div>
        <div class="card-body pb-5">
            {!! Form::open(['method' => 'POST', 'route' => 'pages.store']) !!}
                <div class="row gy-3">
                    <!-- Input: Title -->
                    <div class="col-12">
                        {!! Form::label('title', 'Title') !!}
                        {!! Form::text('title', null, ['class' => $errors->has('title') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Title']) !!}
                        <small class="text-danger">{{ $errors->first('title') }}</small>
                    </div>
                    <!-- Input: Body -->
                    <div class="col-12">
                        {!! Form::label('body', 'Content Body') !!}
                        {!! Form::textarea('body', null, ['id' => 'tinymceEditor', 'class' => $errors->has('body') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Write content here', 'rows' => '10']) !!}
                        <small class="text-danger">{{ $errors->first('body') }}</small>
                    </div>
                    <!-- Input: Submit -->
                    <div class="col-12 text-end">
                        {!! Form::button('<i class="fa-regular fa-check-circle me-2"></i>Create page', ['type' => 'submit', 'class' => 'btn btn-primary px-3 rounded-pill']) !!}
                    </div>
                </div>
                
            {!! Form::close() !!}
        </div>
    </div>
@endsection


@section('scripts')
    @include('admin.includes.tinymce-config')
@endsection
