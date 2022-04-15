@extends('admin.layouts.app')

@section('title', 'Categories')

@section('styles')
    <style>
        #previewImg {
            width: 180px;
            max-width: 180px;
            height: auto;
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
        <h1 class="h3 mb-0 text-gray-800">Course Categories</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-arrow-left text-white-50 me-1"></i> Courses</a>
    </div>

    <!-- ALL USERS TABLE -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Categories Table</h6>
        </div>
        <div class="card-body">

            <!-- Create Category Form -->
            <div class="row mb-5">
                <div class="col-xl-8">
                    {!! Form::open(['method' => 'POST', 'route' => 'categories.store', 'class' => 'bg-light rounded p-4', 'files'=>true]) !!}
                        <div class="row g-3">
                            <div class="col-12">
                                <h4 class="mb-0 text-primary">Create Category</h4>
                            </div>
                            <!-- Name -->
                            <div class="col-12">
                                {!! Form::label('name', 'Category name') !!}
                                {!! Form::text('name', null, ['class' => $errors->has('name') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Category name', 'required' => 'required']) !!}
                                <small class="text-danger">{{ $errors->first('name') }}</small>
                            </div>
                            <!-- Thumbnail -->
                            <div class="col-12">
                                {!! Form::label('thumbnail', 'Thumbnail') !!}
                                <div>
                                    <img id="previewImg" class="rounded mb-2" src="{{ asset('images/placeholde_7x5.jpg') }}" alt="preview">
                                </div>
                                {!! Form::file('thumbnail', ['id'=> 'photo', 'class' => $errors->has('thumbnail') ? 'form-control is-invalid' : 'form-control', 'oninput'=>"previewImg.src=window.URL.createObjectURL(this.files[0])", 'placeholder' => 'Photo']) !!}
                                <small class="text-warning">Dimension 600x370 and jpg/png thambnail</small>
                                <small class="text-danger">{{ $errors->first('thumbnail') }}</small>
                            </div>

                            <!-- Submit -->
                            <div class="col-12 text-end">
                                {!! Form::button('<i class="fa-regular fa-check-circle me-2"></i>Create', ['type' => 'submit', 'class' => 'btn btn-primary px-3 rounded-pill']) !!}
                            </div>
                            
                        </div>
                        
                    {!! Form::close() !!}
                </div>
            </div>


            <!-- Categories -->
            <div class="table-responsive mb-4">
                <table class="table table-bordered text-nowrap" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <th>Thumbnail</th>
                            <th>Category</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>Id</td>
                            <th>Thumbnail</th>
                            <th>Category</th>
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
                                        <img src="@if ($category->thumbnail)
                                                {{ url('/') .'/images/category/' . $category->thumbnail }}
                                                @else
                                                {{ asset('images/placeholde_7x5.jpg') }}
                                                @endif" 
                                        class="me-2 rounded" width="60" height="auto" alt="thumb">
                                    </td>
                                    <td class="align-middle">{{ $category->name }}</td>
                                    <td class="align-middle">{{ $category->created_at->diffForHumans() }}</td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            <a href="{{ route('categories.edit', $category->slug) }}" class="btn btn-sm btn-primary text-nowrap me-2"><i class="fa-solid fa-pen-to-square fa-sm"></i> Edit</a>
                                            <a href="{{ route('categories.destroy', $category->slug) }}" class="btn btn-sm btn-danger text-nowrap" onclick="event.preventDefault(); document.getElementById('delete-category-form-{{ $category->id }}').submit();"><i class="fa-solid fa-trash-alt fa-sm"></i> Delete</a>
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
    <script type="text/javascript">
        jQuery(function(){
            $('#dataTable').DataTable();
        });
    </script>
@endsection