@extends('layouts.app')

@section('title', 'FAQs')

@section('content')
    <!-- FAQ SECTION: START -->
    <section class="page faq-page">
        <!-- Heading -->
        <div class="page-head text-white">
            <div class="container">
                <h1 class="page-head__title">Frequently Asked Questions</h1>
                <p class="page-head__page-description lead m-0">Find the answers to Frequently Asked Questions (FAQ) that commonly raise in mind. If you're a new student or visitor FAQ will help you a lot to understand about us. For any query you can also contact us.</p>
            </div>
        </div>

        <!-- Content -->
        <div class="page-content">
            <div class="container">
                <div class="page-content__body">
                    <div class="faqs mb-0">
                        <div class="row g-4">
                            @if ($faqs)
                                @foreach ($faqs as $faq)
                                    <!-- FAQ item -->
                                    <div class="col-xl-6">
                                        <div class="faqs__faq">
                                            <h5 class="text-gray-800 mb-3">{{ $faq->question }}</h5>
                                            <p class="text-gray-600">{!! $faq->answer !!}</p>
                                        </div>
                                    </div>
                                @endforeach
                            @endif
                        </div>
                    </div>

                    @if ($faqs->links())
                        <div class="mt-5">
                            {{ $faqs->links() }}
                        </div>
                    @endif
                    
                </div>
            </div>
        </div>

    </section>
    <!-- FAQ SECTION: END -->
@endsection