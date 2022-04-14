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
        <h1 class="h3 mb-0 text-gray-800">Edit Category</h1>
        <a href="{{ route('categories.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-list text-white-50 me-1"></i> Categories</a>
    </div>

    <!-- ALL USERS TABLE -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Categories</h6>
        </div>
        <div class="card-body pb-5">

            <div class="row">
                <div class="col-lg-8 col-xxl-7">

                    <h4 class="mt-2">Edit Category</h4>
                    {!! Form::model($category, ['method' => 'PATCH', 'route' => ['categories.update', $category->slug], 'class' => 'row  g-3 mb-4', 'files' => true]) !!}
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
                            {!! Form::button('<i class="fa-regular fa-circle-check me-2"></i>Update', ['type'=>'submit', 'class' => 'btn btn-primary']) !!}
                        </div>
                    {!! Form::close() !!}
                </div>
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