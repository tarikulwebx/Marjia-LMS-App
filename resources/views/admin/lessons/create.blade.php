@extends('admin.layouts.app')

@section('title', 'Create Lesson')

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
        <a href="{{ route('lessons.index', $course->slug) }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fa-solid fa-arrow-left text-white-50 me-1"></i> Lessons</a>
    </div>


    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">New lesson</h6>
        </div>
        <div class="card-body pb-5">
            {!! Form::open(['method' => 'POST', 'route' => ['lessons.store', $course->slug], 'files' => true]) !!}
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
                        <label for="group_id">Lesson group <i class="fas fa-arrow-right fa-sm mx-1"></i> <a href="#" data-bs-toggle="modal" data-bs-target="#lessonGroupModal">Add new</a></label>
                        <select name="group_id" id="lesson_group_select" class="form-select form-control">
                        </select>
                        {{-- {!! Form::select('group_id', $groups, null, ['id' => 'multiselectGroup', 'class' => $errors->has('group_id') ? ' form-control form-select is-invalid' : ' form-control form-select']) !!} --}}
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
                            {!! Form::text('files', null, ['class' => $errors->has('files') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Files url (mulitple)']) !!}
                        </div>
                        <small class="text-danger d-block">{{ $errors->first('files') }}</small>
                    </div>

                    <!-- Input: Submit -->
                    <div class="col-12 text-end">
                        {!! Form::button('<i class="fa-regular fa-check-circle me-2"></i>Create Lesson', ['type' => 'submit', 'class' => 'btn btn-primary px-3 rounded-pill']) !!}
                    </div>
                    
                </div>
            {!! Form::close() !!}
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="lessonGroupModal" tabindex="-1" aria-labelledby="lessonGroupModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="d-none" id="currentCourseId">{{ $course->id }}</h1>
                    <h5 class="modal-title" id="lessonGroupModalLabel">New Lesson Group</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="input_group_name">Group name</label>
                    <input type="text" class="form-control" id="input_group_name" name="input_group_name"  placeholder="Group name">
                    <small id="input_group_name_error" class="text-danger d-none"></small>
                    <p class="mt-3 mb-0 small text-gray-800">You're adding new lesson group of "{{ $course->name }}" course.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="create_group_submit_btn" type="button" class="btn btn-primary"><i class="far fa-check-circle fa-sm me-1"></i>Create</button>
                </div>
            </div>
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

        });
    </script>
    
    @include('admin.includes.tinymce-config')


    <script type="text/javascript">
        jQuery(function(){

            // Get lesson groups
            get_lesson_groups();
            function get_lesson_groups() {
                let course_id = $('#currentCourseId').html();
                axios.get('/get-lesson-groups/'+course_id)
                .then(res => {
                    if (res.status == 200) {
                        $('#lesson_group_select').empty();
                        var jsonData = res.data;
                        $.each(jsonData, function (i, item) { 
                            $('#lesson_group_select').append(
                                '<option value="' +jsonData[i].id+ '">' +jsonData[i].name+ '</option>'
                            );
                        });
                    } else {
                        console.log(res)
                    }
                    
                })
                .catch(err => {
                    console.error(err); 
                })
            }

            // Create group
            $('#create_group_submit_btn').on('click', function(){
                let courseId = $('#currentCourseId').html();
                let groupName = $('#input_group_name').val().trim();
                $('#input_group_name_error').addClass('d-none');
                if (groupName.length == 0) {
                    $('#input_group_name_error').removeClass('d-none');
                    $('#input_group_name_error').html('Name field is empty');
                } else {
                    axios.post('/create-lesson-group', {
                        course_id: courseId,
                        input_group_name: groupName,
                    })
                    .then(res => {
                        if (res.status == 200) {
                            if (res.data == 1) {
                                get_lesson_groups();
                                toastr.success('New group created', 'Success');
                                $('#lessonGroupModal').modal('hide');
                            } else {
                                toastr.error('Something went wrong', 'Failed');
                            }
                        } else {
                            toastr.error('Something went wrong', 'Failed');
                        }
                    })
                    .catch(err => {
                        console.error(err); 
                    })
                }
            });


        });
    </script>

@endsection