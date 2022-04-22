@extends('admin.layouts.app')

@section('title', $lesson->title)

@section('content')
    @if (session('lesson_action_msg'))
    <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
        <div class="me-2 pe-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        </div>
        <div>
            {{ session('lesson_action_msg') }}
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
        <h1 class="h3 mb-0 text-gray-800">Course: "{{ $course->name }}"</h1>
        <a href="{{ route('lessons.index', $course->slug) }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fa-solid fa-arrow-left text-white-50 me-1"></i> All Lessons</a>
    </div>


    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Edit lesson <i class="fas fa-arrow-right"></i> ({{ $lesson->title }})</h6>
        </div>
        <div class="card-body pb-5">
            {!! Form::model($lesson, ['method' => 'PATCH', 'route' => ['lessons.update', $course->slug, $lesson->slug], 'files' => true]) !!}
                <div class="row g-3">
                    <!-- Input: Title -->
                    <div class="col-12">
                        {!! Form::label('title', 'Title') !!}
                        {!! Form::text('title', null, ['class' => $errors->has('title') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Lesson tittle']) !!}
                        <small class="text-danger">{{ $errors->first('title') }}</small>
                    </div>
                    <!-- Input: Body -->
                    <div class="col-12">
                        {!! Form::label('body', 'Body') !!}
                        {!! Form::textarea('body', null, ['id' => 'tinymceEditor', 'class' => $errors->has('body') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Lesson body', 'rows' => '10']) !!}
                        <small class="text-danger">{{ $errors->first('body') }}</small>
                    </div>

                    <!-- Input: Group -->
                    <div class="col-lg-6">
                        <label for="group_id">Lesson group</label>
                        {!! Form::select('group_id', $groups, null, ['id' => 'multiselectGroup', 'class' => $errors->has('group_id') ? ' form-control form-select is-invalid' : ' form-control form-select']) !!}
                        <small class="text-danger">{{ $errors->first('group_id') }}</small>
                    </div>

                    <!-- Input: Files -->
                    <div class="col-lg-6">
                        {!! Form::label('files', 'Download files') !!}
                        <div class="input-group">
                            <span class="input-group-btn">
                            <a id="lfm" data-input="files" class="btn btn-primary bg-primary bg-opacity-75 rounded-right-0">
                                <i class="fa-solid fa-image fa-sm me-2"></i>Choose
                            </a>
                            </span>
                            {!! Form::text('files', null, ['class' => $errors->has('files') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Files url (multiple)']) !!}
                            <em class="small text-info">Please, make sure, filename doesn't contain comma(,) and files url separated with comma(,)</em>
                        </div>
                        <small class="text-danger d-block">{{ $errors->first('files') }}</small>
                    </div>

                    

                    <!-- Input: Submit -->
                    <div class="col-12 text-end">
                        {!! Form::button('<i class="fa-regular fa-check-circle me-2"></i>Update lesson', ['type' => 'submit', 'class' => 'btn btn-primary px-3 rounded-pill']) !!}
                    </div>
                    
                </div>
            {!! Form::close() !!}
        </div>
    </div>

@endsection


@section('scripts')
    <script src="{{ asset('vendor/laravel-filemanager/js/stand-alone-button.js') }}"></script>
    <script type="text/javascript">
        jQuery(function(){
            $('#multiselectGroup').multiselect({
                buttonWidth:'100%',
                buttonClass: 'form-control text-left',
                selectedClass: 'selected'
            });

            $('#lfm').filemanager('file');
            $('#lfm-files').filemanager('file');

        });
    </script>
    
    @include('admin.includes.tinymce-config')

@endsection