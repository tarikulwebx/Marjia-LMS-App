@extends('admin.layouts.app')

@section('title', 'Edit Category')

@section('styles')
    <style>
        #imgPreviewHolder img {
            height: auto !important;
            max-width: 180px !important; 
            border-radius: 0.3rem;
        }
    </style>
@endsection


@section('content')

    @if (session('category_action_msg'))
    <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
        <div class="me-2 pe-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
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
        <h1 class="h3 mb-0 text-gray-800">Edit Category</h1>
        <a href="{{ route('categories.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-arrow-left text-white-50 me-1"></i> Create category</a>
    </div>


    <!-- Edit Course Card -->
    <div class="card shadow mb-4">
        <!-- Card Header - Accordion -->
        <a href="#collapseNewCourse" class="d-block card-header py-3" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseNewCourse">
            <h6 class="m-0 font-weight-bold text-primary">Update category</h6>
        </a>
        <!-- Card Content - Collapse -->
        <div class="collapse show" id="collapseNewCourse">
            <div class="card-body">
                <!-- Create Category Form -->
                <div class="row">
                    <div class="col-xl-8 col-xxl-7 pb-2">
                        {!! Form::model($category, ['method' => 'PATCH', 'route' => ['categories.update', $category->slug], 'files'=>true]) !!}
                            <div class="row g-3">
                                <!-- Name -->
                                <div class="col-12">
                                    {!! Form::label('name', 'Category name') !!}
                                    {!! Form::text('name', null, ['class' => $errors->has('name') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Category name', 'required' => 'required']) !!}
                                    <small class="text-danger">{{ $errors->first('name') }}</small>
                                </div>
                                <!-- Thumbnail -->
                                <div class="col-12">
                                    {!! Form::label('thumbnail', 'Thumbnail') !!}
                                    <div id="imgPreviewHolder" class="mb-2">
                                        <img src="{{ $category->thumbnail ? $category->thumbnail : asset('images/placeholder_600x370.jpg') }}" alt="thumb">
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

                                <!-- Submit -->
                                <div class="col-12 text-end">
                                    {!! Form::button('<i class="fa-regular fa-check-circle me-2"></i>Update', ['type' => 'submit', 'class' => 'btn btn-primary px-3 rounded-pill']) !!}
                                </div>
                                
                            </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- ALL USERS TABLE -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Categories</h6>
        </div>
        <div class="card-body">

            <!-- Categories -->
            <div class="table-responsive mb-4">
                <table class="table table-bordered text-nowrap" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <th>Category name</th>
                            <th>Slug</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>Id</td>
                            <th>Category name</th>
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
                                        <div class="d-flex align-items-center">
                                            <img src="{{ $category->thumbnail ? $category->thumbnail : asset('images/placeholder_600x370.jpg') }}" class="me-2 rounded" height="44" alt="thumb">
                                            <div class="ps-1">
                                                <h6 class="mb-0"><a href="{{ route('categories.edit', $category->slug) }}">{{ $category->name }}</a></h6>
                                                <small class="me-2" style="font-size: 0.825rem;"><i class="fa-solid fa-graduation-cap fa-sm text-gray-400 me-1"></i>{{ $category->courses()->count() }} courses</small>
                                            </div>
                                        </div>
                                        
                                    </td>
                                    <td class="align-middle">{{ $category->slug }}</td>
                                    <td class="align-middle">{{ $category->created_at->diffForHumans() }}</td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            <a href="{{ route('categories.edit', $category->slug) }}" class="btn btn-sm btn-primary text-nowrap me-2"><i class="fa-solid fa-pen-to-square fa-sm"></i> Edit</a>
                                            @if ($category->courses()->count() > 0)
                                                <a href="{{ route('categories.destroy', $category->slug) }}" class="btn btn-sm btn-danger text-nowrap" onclick="event.preventDefault(); toastr.warning('Make sure no courses linked to this category.', 'Cannot Delete');"><i class="fa-solid fa-trash-alt fa-sm"></i> Delete</a>
                                            @else 
                                                <a href="{{ route('categories.destroy', $category->slug) }}" class="btn btn-sm btn-danger text-nowrap" onclick="event.preventDefault(); document.getElementById('delete-category-form-{{ $category->id }}').submit();"><i class="fa-solid fa-trash-alt fa-sm"></i> Delete</a>
                                            @endif
                                            
                                            {!! Form::open(['method' => 'DELETE', 'route' => ['categories.destroy', $category->slug], 'id' => 'delete-category-form-'.$category->id, 'class' => 'd-none']) !!}
                                            {!! Form::close() !!}
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
    <script src="{{ asset('vendor/laravel-filemanager/js/stand-alone-button.js') }}"></script>
    <script type="text/javascript">
        jQuery(function(){
            $('#dataTable').DataTable();
            $('#lfm').filemanager('image');
        });
    </script>
@endsection
