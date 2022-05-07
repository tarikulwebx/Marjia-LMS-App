@extends('admin.layouts.app')

@section('title', 'Edit blog')

@section('styles')
    <style>

        .multi-select-with-search .multiselect-container .multiselect-filter>input.multiselect-search {
            background: transparent
        }

        .multi-select-with-search .multiselect-container .multiselect-filter {
            margin-bottom: 0.4rem;
        }

        .multiselect-native-select .multi-select-with-search .multiselect-container {
            padding-top: 0.25rem
        }

        .multiselect-native-select .multi-select-with-search .multiselect-container .multiselect-option {
            text-transform: lowercase !important;
        }

        #imgPreviewHolder img {
            height: auto !important;
            width: 75% !important; 
            border-radius: 0.3rem;
        }
    </style>
@endsection

@section('content')

    @if (session('page_action_msg'))
    <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
        <div class="me-2 pe-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        </div>
        <div>
            {{ session('page_action_msg') }}
        </div>
        <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif


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
        <h1 class="h3 mb-0 text-gray-800">Edit Page</h1>
        <a href="{{ route('pages.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-plus text-white-50 me-1"></i> All pages</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Edit Page: {{ $page->title }}</h6>
        </div>
        <div class="card-body pb-5">
            {!! Form::model($page, ['method' => 'PATCH', 'route' => ['pages.update', $page->slug], 'files' => true]) !!}
                <div class="row gy-3">
                    <!-- Input: Title -->
                    <div class="col-12">
                        {!! Form::label('title', 'Title') !!}
                        {!! Form::text('title', null, ['class' => $errors->has('title') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Title']) !!}
                        <small class="text-danger">{{ $errors->first('title') }}</small>
                        <div class="small">Link: <a href="{{ url('/').'/pages/'.$page->slug }}" target="_blank">{{ url('/').'/pages/'.$page->slug }}</a></div>
                    </div>
                    <!-- Input: Body -->
                    <div class="col-12">
                        {!! Form::label('body', 'Content Body') !!}
                        {!! Form::textarea('body', null, ['id' => 'tinymceEditor', 'class' => $errors->has('body') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Write content here', 'rows' => '10']) !!}
                        <small class="text-danger">{{ $errors->first('body') }}</small>
                    </div>
                    <!-- Input: Submit -->
                    <div class="col-12 text-end">
                        {!! Form::button('<i class="fa-regular fa-check-circle me-2"></i>Update', ['type' => 'submit', 'class' => 'btn btn-primary px-3 rounded-pill']) !!}
                    </div>
                </div>
                
            {!! Form::close() !!}
        </div>
    </div>
@endsection



@section('scripts')
    @include('admin.includes.tinymce-config')
@endsection