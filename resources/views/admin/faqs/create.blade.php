@extends('admin.layouts.app')

@section('title', 'Create FAQ')

@section('content')

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
        <h1 class="h3 mb-0 text-gray-800">New FAQ</h1>
        <a href="{{ route('faqs.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-arrow-right text-white-50 me-1"></i> All FAQs</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Create FAQ:</h6>
        </div>
        <div class="card-body pb-5">
            {!! Form::open(['method' => 'POST', 'route' => 'faqs.store']) !!}
                <div class="row gy-3">
                    <!-- Input: Question -->
                    <div class="col-12">
                        {!! Form::label('question', 'Question') !!}
                        {!! Form::text('question', null, ['class' => $errors->has('question') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Question']) !!}
                        <small class="text-danger">{{ $errors->first('question') }}</small>
                    </div>
                    <!-- Input: Answer -->
                    <div class="col-12">
                        {!! Form::label('answer', 'Answer') !!}
                        {!! Form::textarea('answer', null, ['id' => 'tinymceEditor', 'class' => $errors->has('answer') ? ' form-control is-invalid' : ' form-control', 'placeholder' => 'Write answer here', 'rows' => '10']) !!}
                        <small class="text-danger">{{ $errors->first('answer') }}</small>
                    </div>
                    <!-- Input: Submit -->
                    <div class="col-12 text-end">
                        {!! Form::button('<i class="fa-regular fa-check-circle me-2"></i>Create FAQ', ['type' => 'submit', 'class' => 'btn btn-primary px-3 rounded-pill']) !!}
                    </div>
                </div>
                
            {!! Form::close() !!}
        </div>
    </div>
@endsection


@section('scripts')
    @include('admin.includes.tinymce-config')
@endsection
