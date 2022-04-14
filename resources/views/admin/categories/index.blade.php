@extends('admin.layouts.app')

@section('title', 'Courses')

@section('content')

    @if (session('category_action_msg'))
    <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
        <div class="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        </div>
        <div>
            {{ session('category_action_msg') }}
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
        <h1 class="h3 mb-0 text-gray-800">All Categories</h1>
        <a href="{{ route('users.create') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-graduation-cap text-white-50 me-1"></i> Courses</a>
    </div>

    <!-- ALL USERS TABLE -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Categories</h6>
        </div>
        <div class="card-body pb-5">

            <div class="row">
                <div class="col-lg-8 col-xxl-7">

                    <h4 class="mt-2">Create Category</h4>
                    {!! Form::open(['method' => 'POST', 'route' => 'categories.store', 'class' => 'row  g-3 mb-4', 'files' => true]) !!}
                        <div class="col-12">
                            <div class="form-group">
                                {!! Form::text('name', null, ['class' => $errors->has('name') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Category name', 'required' => 'required']) !!}
                                <small class="text-danger">{{ $errors->first('name') }}</small>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                {!! Form::file('thumb', ['class' => $errors->has('thumb') ? ' form-control is-invalid' : 'form-control']) !!}
                                <small class="help-block text-warning m-0">Choose 600x380 jpg/png thumbnail</small>
                                <small class="text-danger">{{ $errors->first('thumb') }}</small>
                            </div>
                        </div>
                        <div class="col-12 text-end mt-2">
                            {!! Form::button('<i class="fa-solid fa-plus fa-sm me-2"></i>Create', ['type'=>'submit', 'class' => 'btn btn-primary']) !!}
                        </div>
                    {!! Form::close() !!}
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Thumb</td>
                            <th>Category</th>
                            <th>Slug</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>Id</td>
                            <td>Thumb</td>
                            <th>Category</th>
                            <th>Slug</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @if ('categories')
                            @foreach ($categories as $category)
                                <tr>
                                    <td class="align-middle">{{ $category->id }}</td>
                                    <td class="align-middle">
                                        <img src="@if ($category->thumb)
                                                {{ url('/') . '/images/category/' . $category->thumb }}
                                                @else
                                                {{ asset('images/placeholde-image-7-5.jpg') }}
                                        @endif" class="me-2 rounded" width="60" height="auto" alt="{{ $category->name }} photo">
                                    </td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            
                                            <div>
                                                {{ $category->name }}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle">{{ $category->slug }}</td>
                                    <td class="align-middle">{{ $category->created_at->diffForHumans() }}</td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            <a href="{{ route('categories.edit', $category->slug) }}" class=" btn btn-sm btn-primary me-2" ><i class="fa-solid fa-pen-to-square fa-sm"></i> Edit</a>
                                            <a href="{{ route('categories.destroy', $category->slug) }}" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i> Delete</a>
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