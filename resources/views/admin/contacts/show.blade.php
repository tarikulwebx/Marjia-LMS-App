@extends('admin.layouts.app')

@section('title', 'Contact Messages')

@section('content')

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Contact Message</h1>
        <a href="{{ route('contacts.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-arrow-right text-white-50 me-1"></i> Contact Messages</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Contact Message</h6>
        </div>
        <div class="card-body pb-4">
            @if ($contact)
                <h4 class="mb-0">Sender: {{ $contact->first_name }} {{ $contact->last_name }}</h4>
                <small class="d-block"><a href="mailto:{{ $contact->email }}"><i class="fa-regular fa-envelope me-1"></i> {{ $contact->email }}</a></small>
                <h5 class="mb-1 mt-3">Message: </h5>
                <p>{{ $contact->message }}</p>
                <ul class="list-inline mb-0">
                    <li class="list-inline-item small"><Strong>Sent on:</Strong> {{ $contact->created_at->format('M d, Y') }} at {{ $contact->created_at->format('h:m a') }}</li>
                    <li class="list-inline-item small"><i class="fa-solid fa-mobile-screen me-1"></i>{{ $contact->ip }}</li>
                </ul>
            @endif
        </div>
    </div>
@endsection

