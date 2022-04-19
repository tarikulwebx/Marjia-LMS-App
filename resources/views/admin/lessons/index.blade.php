@extends('admin.layouts.app')

@section('title', 'Lessons')

@section('styles')
    <style>
        .group-edit-link,
        .group-delete-link {
            font-size: 0.8rem;
        }
        .group-edit-link i,
        .group-delete-link i {
            opacity: 0.65;
            transition: 0.3s;
        }

        .group-edit-link:hover i,
        .group-delete-link:hover i {
            opacity: 1;
        }
    </style> 
@endsection

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

    @if (session('group_action_msg'))
        <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
            <div class="me-2 pe-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
            </div>
            <div>
                {{ session('group_action_msg') }}
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
        <a href="{{ route('lessons.create', $course->slug) }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fa-solid fa-plus text-white-50 me-1"></i> Add lesson</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Lessons</h6>
        </div>
        <div class="card-body pb-4">
            <div class="table-responsive">
                <table class="table table-bordered text-nowrap align-middle" id="" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Group/ Lessons <a href="#" class="btn btn-sm btn-primary rounded-pill ms-2" data-bs-toggle="modal" data-bs-target="#lessonCreateGroupModal"><i class="fas fa-plus"></i> Add group</a></th>
                            <th>Readers</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Group/ Lessons</th>
                            <th>Readers</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @if ($groups)
                            @foreach ($groups as $group)
                                <tr>
                                    <td colspan="5">
                                        <div class="d-flex flex-column  @if($loop->first) mt-4 @else mt-5  @endif">
                                            <h5 class="m-0"><a href="#">{{ $group->name }} ({{ $group->lessons->count() }})</a></h5>
                                            <div>
                                                <a href="{{ route('groups.edit', [$course->slug, $group->slug]) }}" class="text-primary small group-edit-link"><i class="fas fa-edit fa-sm"></i> Edit</a>
                                                <a href="{{ route('groups.destroy', [$course->slug, $group->slug]) }}" class="text-danger small group-delete-link ms-2"><i class="fas fa-trash-alt fa-sm"></i> Delete</a>
                                                {!! Form::open(['method' => 'POST', 'route' => ['groups.destroy', [$course->slug, $group->slug]], 'class' => 'd-none']) !!}
                                                {!! Form::close() !!}
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                @if ($group->lessons)
                                    @foreach ($group->lessons as $lesson)
                                        <tr>
                                            <td><a href="#">{{ $lesson->title }}</a></td>
                                            <td>--</td>
                                            <td>{{ $lesson->created_at->diffForHumans() }}</td>
                                            <td>{{ $lesson->updated_at->diffForHumans() }}</td>
                                            <td style="width: 100px">
                                                <div class="d-flex align-items-center">
                                                    <a href="#" class="btn btn-sm btn-primary text-nowrap me-2"><i class="fa-solid fa-pen-to-square fa-sm"></i> Edit</a>
                                                    <a href="#" class="btn btn-sm btn-info text-nowrap"><i class="fa-solid fa-eye fa-sm"></i> Preview</a>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                @endif
                                <tr>
                                    <td colspan="5"><a href="#" class="btn btn-sm btn-primary"><i class="fa-solid fa-plus" aria-hidden="true"></i> Add lesson</a></td>
                                </tr>
                            @endforeach
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="lessonCreateGroupModal" tabindex="-1" aria-labelledby="lessonCreateGroupModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="d-none" id="currentCourseId">{{ $course->id }}</h1>
                    <h5 class="modal-title" id="lessonCreateGroupModalLabel">New Group</h5>
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
    <script type="text/javascript">
        jQuery(function(){
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
                                toastr.success('New group created', 'Success');
                                $('#lessonGroupModal').modal('hide');
                                location.reload();
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