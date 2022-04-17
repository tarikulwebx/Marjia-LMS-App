@extends('admin.layouts.app')

@section('title', 'Courses')

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
        <h1 class="h3 mb-0 text-gray-800">Courses</h1>
        <a href="{{ route('courses.create') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-plus text-white-50 me-1"></i> New course</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Courses Table</h6>
        </div>
        <div class="card-body pb-4">
            <div class="table-responsive">
                <table class="table table-bordered text-nowrap" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <th>course</th>
                            <th>Category</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>Id</td>
                            <th>course</th>
                            <th>Category</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @if ('courses')
                            @foreach ($courses as $course)
                                <tr>
                                    <td class="align-middle">{{ $course->id }}</td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            <img src="{{ $course->thumbnail }}" class="me-2 rounded" width="80" height="auto" alt="thumbnail">
                                            <div class="ps-1">
                                                <h6 class="mb-1"><a href="{{ route('courses.edit', $course->slug) }}">{{ $course->name }}</a></h6>
                                                <small class="me-2" style="font-size: 0.825rem;"><i class="fa-solid fa-user fa-sm text-gray-400 me-1"></i>{{ $course->user->first_name }}</small>
                                                <small style="font-size: 0.825rem;"><i class="fa-regular fa-eye fa-sm text-gray-400 me-1"></i>{{ $course->visibility }}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle">{{ $course->category->name }}</td>
                                    <td class="align-middle">{{ $course->created_at->diffForHumans() }}</td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            <a href="{{ route('courses.edit', $course->slug) }}" class="btn btn-sm btn-primary text-nowrap me-2"><i class="fa-solid fa-pen-to-square fa-sm"></i> Edit</a>
                                            <a href="#" class="btn btn-sm btn-info text-nowrap"><i class="fa-solid fa-eye fa-sm"></i> Preview</a>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>

@endsection


@section('scripts')
    <script type="text/javascript">
        jQuery(function(){
            $('#dataTable').DataTable();
        });
    </script>
@endsection

