@extends('layouts.app')

@section('title', $page->title)

@section('content')
    <!-- PAGE SECTION: START -->
    <section class="page">
        <!-- Heading -->
        <div class="page-head text-white">
            <div class="container">
                <h1 class="page-head__title mb-0">{{ $page->title }}</h1>
            </div>
        </div>

        <!-- Content -->
        <div class="page-content">
            <div class="container">
                <div class="page-content__body" style="min-height: 300px;">
                    {!! $page->body !!}
                </div>
            </div>
        </div>
    </section>
    <!-- PAGE SECTION: END -->
@endsection