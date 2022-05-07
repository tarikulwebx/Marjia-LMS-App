@extends('admin.layouts.app')

@section('title', 'Edit FAQ')

@section('content')

    @if (session('faq_action_msg'))
    <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
        <div class="me-2 pe-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        </div>
        <div>
            {{ session('faq_action_msg') }}
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
        <h1 class="h3 mb-0 text-gray-800">Edit FAQ</h1>
        <a href="{{ route('faqs.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-arrow-right text-white-50 me-1"></i> All FAQs</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Edit FAQ: {{ $faq->question }}</h6>
        </div>
        <div class="card-body pb-5">
            {!! Form::model($faq, ['method' => 'PATCH', 'route' => ['faqs.update', $faq->slug]]) !!}
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
                        {!! Form::button('<i class="fa-regular fa-check-circle me-2"></i>Update FAQ', ['type' => 'submit', 'class' => 'btn btn-primary px-3 rounded-pill']) !!}
                    </div>
                </div>
                
            {!! Form::close() !!}
        </div>
    </div>
@endsection



@section('scripts')
    @include('admin.includes.tinymce-config')
@endsection