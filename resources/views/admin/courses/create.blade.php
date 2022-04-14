@extends('admin.layouts.app')

@section('title', 'Create Course')

@section('styles')
    <style>
        .course-users-multi-select .multiselect-container {
            padding-top: 0.25rem;
        }

        .course-users-multi-select .multiselect-container .multiselect-option {
            text-transform: lowercase !important;
        }

        .course-users-multi-select .multiselect-container .multiselect-filter>input.multiselect-search {
            background: transparent
        }

    </style>
@endsection

@section('content')

    @if (session('course_action_msg'))
    <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
        <div class="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        </div>
        <div>
            {{ session('course_action_msg') }}
        </div>
        <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif

    @if ($errors->all())
        <div class="alert alert-danger mb-3 alert-dismissible fade show" role="alert">
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
        <h1 class="h3 mb-0 text-gray-800">New Course</h1>
        <a href="{{ route('courses.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-graduation-cap text-white-50 me-1"></i> Courses</a>
    </div>

    <!-- ALL USERS TABLE -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Create Course</h6>
        </div>
        <div class="card-body pb-5">
            {!! Form::open(['method' => 'POST', 'route' => 'courses.store', 'files' => true]) !!}
                <div class="row gy-4">
                    <div class="col-lg-8">
                        <div class="row g-3">
                            <div class="col-12">
                                {!! Form::label('name', 'Course name') !!}
                                {!! Form::text('name', null, ['class' => $errors->has('name') ? 'form-control invalid' : 'form-control h3', 'required' => 'required', 'placeholder' => 'Course name']) !!}
                                <small class="text-danger">{{ $errors->first('name') }}</small>
                            </div>
                            
                            <div class="col-12">
                                {!! Form::label('description', 'Description') !!}
                                {!! Form::textarea('description', null, ['class' => $errors->has('description') ? 'form-control invalid' : 'form-control', 'rows' => '8', 'placeholder' => 'Course Description', 'required' => 'required']) !!}
                                <small class="text-danger">{{ $errors->first('description') }}</small>
                            </div>
                            <div class="col-12">
                                {!! Form::label('short_description', 'Short Description: ') !!}
                                {!! Form::textarea('short_description', null, ['class' => $errors->has('short_description') ? 'form-control invalid' : 'form-control', 'rows' => '3', 'placeholder' => 'Course short description', 'required' => 'required']) !!}
                                <small class="text-danger">{{ $errors->first('short_description') }}</small>
                            </div>
                            
                            <div class="col-lg-6">
                                {!! Form::label('level', 'Level') !!}
                                {!! Form::select('level', ['all level' => 'All level', 'beginner' => 'Beginner', 'intermediate' => 'Intermediate', 'advanced' => 'Advanced'], null, ['id' => 'multiselectLevel', 'class' => $errors->has('level') ? 'form-control is-invalid' : 'form-control']) !!}
                                <small class="text-danger">{{ $errors->first('level') }}</small>
                            </div>
                            <div class="col-lg-6">
                                {!! Form::label('duration', 'Duration') !!}
                                {!! Form::text('duration', '5h 30min', ['class' => $errors->has('duration') ? 'form-control invalid' : 'form-control', 'required' => 'required', 'placeholder' => 'Duration']) !!}
                                <small class="text-danger">{{ $errors->first('duration') }}</small>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row g-4">
                            <div class="col-12">
                                {!! Form::label('categories', 'Category') !!}
                                {!! Form::select('categories', $categories, null, ['id' => 'multiselectCategory', 'class' => $errors->has('categories') ? 'form-control is-invalid' : 'form-control']) !!}
                                <small class="text-danger">{{ $errors->first('categories') }}</small>
                            </div>
                            <div class="col-12">
                                {!! Form::label('language', 'Language') !!}
                                {!! Form::select('language', ['english' => 'English', 'bangla' => 'Bangla', 'english and bangla' => 'English and Bangla'], null, ['id' => 'multiselectLanguage', 'class' => $errors->has('language') ? 'form-control is-invalid' : 'form-control']) !!}
                                <small class="text-danger">{{ $errors->first('language') }}</small>
                            </div>
                            
                            <div class="col-12">
                                {!! Form::label('thumb', 'Thumnail') !!}
                                <div>
                                    <img id="previewImg" class="img-fluid w-75 rounded mb-2" src="{{ asset('images/placeholde-image-7-5.jpg') }}" alt="">
                                </div>
                                {!! Form::file('thumb', ['id'=> 'thumb', 'class' => $errors->has('thumb') ? 'form-control is-invalid' : 'form-control', 'oninput'=>"previewImg.src=window.URL.createObjectURL(this.files[0])", 'placeholder' => 'Photo']) !!}
                                <small class="text-danger">{{ $errors->first('thumb') }}</small>
                            </div>
                            <div class="col-12">
                                <div>{!! Form::label('visibility', 'Visibility') !!}</div>
                                <div class="form-check form-check-inline">
                                    {!! Form::radio('visiblility', 'public',  true, ['id' => 'public', 'class' => 'form-check-input']) !!}
                                    <label class="form-check-label text-primary" for="public">Public</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    {!! Form::radio('visiblility', 'private',  null, ['id' => 'private', 'class' => 'form-check-input']) !!}
                                    <label class="form-check-label text-primary" for="private">Private</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    {!! Form::radio('visiblility', 'specific',  null, ['id' => 'specific', 'class' => 'form-check-input']) !!}
                                    <label class="form-check-label text-primary" for="specific">Specific</label>
                                </div>
                                <small class="text-danger">{{ $errors->first('visibility') }}</small>
                            </div>
                            <div class="col-12">
                                {!! Form::label('course_users', 'Specified Users') !!}
                                {!! Form::select('course_users[]', $users, null, ['id' => 'multiselectCourseUsers', 'class' => $errors->has('course_users') ? ' forn-control d-none is-invalid' : ' d-none form-control', 'multiple']) !!}
                                <small class="text-danger">{{ $errors->first('course_users') }}</small>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-12 text-end">
                        {!! Form::button('<i class="fa-regular fa-check-circle me-2"></i>Create Course', ['type'=>'submit', 'class' => 'btn btn-primary']) !!}
                    </div>
                </div>
            {!! Form::close() !!}
        </div>
    </div>

@endsection


@section('scripts')
    <script type="text/javascript">
        jQuery(function(){
            $('#multiselectCategory').multiselect({
                buttonWidth:'100%',
                buttonClass: 'form-control text-left',
                selectedClass: 'selected'
            });
            $('#multiselectLanguage').multiselect({
                buttonWidth:'100%',
                buttonClass: 'form-control text-left',
                selectedClass: 'selected'
            });
            $('#multiselectLevel').multiselect({
                buttonWidth:'100%',
                buttonClass: 'form-control text-left',
                selectedClass: 'selected'
            });
            $('#multiselectCourseUsers').multiselect({
                buttonWidth:'100%',
                buttonClass: 'form-control text-left',
                selectedClass: 'selected',
                enableFiltering: true,
                buttonContainer:'<div class="btn-group course-users-multi-select" />',
                numberDisplayed: 1
            });
            
        });

        
    </script>
@endsection