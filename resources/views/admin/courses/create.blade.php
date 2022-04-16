@extends('admin.layouts.app')

@section('title', 'Categories')

@section('styles')
    <style>
        /* #previewImg {
            width: 180px;
            max-width: 180px;
            height: auto;
        } */

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

    @if (session('course_action_msg'))
    <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
        <div class="me-2 pe-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
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
        <h1 class="h3 mb-0 text-gray-800">New Course</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-arrow-left text-white-50 me-1"></i> Courses</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Create new course</h6>
        </div>
        <div class="card-body pb-5">
            {!! Form::open(['method' => 'POST', 'route' => 'courses.store', 'files' => true]) !!}
                <div class="row gy-3 gx-4">
                    <!-- Left Contents -->
                    <div class="col-lg-8">
                        <!-- Form grid -->
                        <div class="row g-3">
                            <!-- Input: Course name -->
                            <div class="col-12">
                                {!! Form::label('name', 'Course name') !!}
                                {!! Form::text('name', null, ['class' => $errors->has('name') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Name']) !!}
                                <small class="text-danger">{{ $errors->first('name') }}</small>
                            </div>
                            <!-- Input: Description -->
                            <div class="col-12">
                                {!! Form::label('description', 'Description') !!}
                                {!! Form::textarea('description', null, ['id' => 'tinymceEditor', 'class' => $errors->has('description') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Description', 'rows' => '10']) !!}
                                <small class="text-danger">{{ $errors->first('description') }}</small>
                            </div>

                            <!-- Input: Short Description -->
                            <div class="col-12">
                                {!! Form::label('short_description', 'Short description') !!}
                                {!! Form::textarea('short_description', null, ['class' => $errors->has('short_description') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Short description', 'rows' => '4']) !!}
                                <small class="text-danger">{{ $errors->first('short_description') }}</small>
                            </div>

                            <!-- Input: What Student will learn? -->
                            <div class="col-12">
                                {!! Form::label('learning', 'Learning') !!}
                                {!! Form::textarea('learning', null, ['class' => $errors->has('learning') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Learning', 'rows' => '3']) !!}
                                <em class="d-block"><small class="help-block text-warning">Point out what are students going to learn. Separate every line with semicolon(;)</small></em>
                                <small class="text-danger">{{ $errors->first('learning') }}</small>
                            </div>

                            <!-- Input: Language -->
                            <div class="col-lg-6">
                                {!! Form::label('language', 'Language') !!}
                                {!! Form::select('language', ['english' => 'English', 'bangla' => 'Bangla', 'bangla & english' => 'Bangla & English'], null, ['id' => 'multiselectLanguage', 'class' => $errors->has('language') ? ' form-control form-select is-invalid' : ' form-control form-select']) !!}
                                <small class="text-danger">{{ $errors->first('language') }}</small>
                            </div>

                            <!-- Input: Level -->
                            <div class="col-lg-6">
                                {!! Form::label('level', 'Level') !!}
                                {!! Form::select('level', ['beginner' => 'Beginner', 'intermediate' => 'Intermediate', 'advanced' => 'Advanced'], null, ['id' => 'multiselectLevel', 'class' => $errors->has('level') ? ' form-control is-invalid' : ' form-control']) !!}
                                <small class="text-danger">{{ $errors->first('level') }}</small>
                            </div>

                            <!-- Input: Level -->
                            <div class="col-lg-6">
                                {!! Form::label('duration', 'Duration') !!}
                                 {!! Form::text('duration', '5h 30m', ['class' => $errors->has('duration') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Duration']) !!}
                                <small class="text-danger">{{ $errors->first('duration') }}</small>
                            </div>
                            
                        </div>
                    </div>
                    <!-- Right Contents -->
                    <div class="col-lg-4">
                        <!-- Form Grid -->
                        <div class="row g-3">
                            <!-- Input: Category -->
                            <div class="col-12">
                                {!! Form::label('category_id', 'Categories') !!}
                                {!! Form::select('category_id', $categories, null, ['id' => 'multiselectCategories', 'class' => $errors->has('category_id') ? ' form-control is-invalid' : ' form-control']) !!}
                                <small class="text-danger">{{ $errors->first('category_id') }}</small>
                            </div>
                            <!-- Input: Thumbnail -->
                            <div class="col-12">
                                {!! Form::label('thumbnail', 'Thumbnail') !!}
                                <div id="imgPreviewHolder" class="mb-2">
                                    <img src="{{ asset('images/placeholde_7x5.jpg') }}" alt="">
                                </div>
                                <div class="input-group">
                                    <span class="input-group-btn">
                                    <a id="lfm" data-input="thumbnail" data-preview="imgPreviewHolder" class="btn btn-primary bg-primary bg-opacity-75 rounded-right-0">
                                        <i class="fa-solid fa-image fa-sm me-2"></i>Choose
                                    </a>
                                    </span>
                                    {!! Form::text('thumbnail', null, ['class' => $errors->has('thumbnail') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Thumbnail url']) !!}
                                </div>
                                <em class="d-block"><small class="help-block text-warning">Thumbnail dimension 600x370 and jpg/png</small></em>
                                <small class="text-danger d-block">{{ $errors->first('thumbnail') }}</small>
                            </div>
                            <!-- Input: Visiblility -->
                            <div class="col-12">
                                {!! Form::label('visibility', 'Visiblility', ['class' => 'd-block']) !!}
                                <div class="form-check form-check-inline">
                                    {!! Form::radio('visibility', 'public',  true, ['class' => 'form-check-input', 'id' => 'public']) !!}
                                    <label class="form-check-label text-primary" for="public">Public</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    {!! Form::radio('visibility', 'private',  null, ['class' => 'form-check-input', 'id' => 'private']) !!}
                                    <label class="form-check-label text-primary" for="private">Private</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    {!! Form::radio('visibility', 'defined',  null, ['class' => 'form-check-input', 'id' => 'defined']) !!}
                                    <label class="form-check-label text-primary" for="defined">Defined</label>
                                </div>
                                <small class="text-danger d-block">{{ $errors->first('visibility') }}</small>
                            </div>
                            <!-- Input: Defined users -->
                            <div class="col-12">
                                {!! Form::label('defined_users', 'Defined Users') !!}
                                {!! Form::select('defined_users[]', $students, null, ['id' => 'multiselectDefinedUsers', 'class' => $errors->has('defined_users') ? ' form-control is-invalid d-none' : ' form-control d-none', 'multiple']) !!}
                                <small class="text-danger">{{ $errors->first('defined_users') }}</small>
                            </div>
                            <!-- Input: Submit -->
                            <div class="col-12 text-end">
                                {!! Form::button('<i class="fa-regular fa-check-circle me-2"></i>Create', ['type' => 'submit', 'class' => 'btn btn-primary px-3 rounded-pill']) !!}
                            </div>
                        </div>
                        
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
            $('#multiselectCategories, #multiselectLanguage, #multiselectLevel, #multiselectLevel').multiselect({
                buttonWidth:'100%',
                buttonClass: 'form-control text-left',
                selectedClass: 'selected'
            });

            $('#multiselectDefinedUsers').multiselect({
                buttonWidth:'100%',
                buttonClass: 'form-control text-left',
                selectedClass: 'selected',
                enableFiltering:true,
                buttonContainer:'<div class="btn-group multi-select-with-search" />',
                numberDisplayed: 1,
                includeSelectAllOption: true
            });

            $('#lfm').filemanager('image');

        });
    </script>
    
    @include('admin.includes.tinymce-config');



@endsection