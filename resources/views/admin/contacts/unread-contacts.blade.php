@extends('admin.layouts.app')

@section('title', 'Contact Messages')

@section('content')
    @if (session('contact_action_msg'))
    <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
        <div class="me-2 pe-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        </div>
        <div>
            {{ session('contact_action_msg') }}
        </div>
        <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif


    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Unread Messages</h1>
        <a href="{{ route('contacts.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-arrow-right text-white-50 me-1"></i> All Contact Messages</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Unread Messages</h6>
        </div>
        <div class="card-body pb-4">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <th>Sender</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Sent on</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>Id</td>
                            <th>Sender</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Sent on</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @if ($contacts)
                            @foreach ($contacts as $contact)
                                <tr>
                                    <td class="align-middle">{{ $contact->id }}</td>
                                    <td class="align-middle">
                                        <h6 class="mb-1"><a href="{{ route('contacts.show', $contact->id) }}">{{ $contact->first_name }} {{ $contact->last_name }}</a></h6>
                                        <div class="d-flex flex-wrap">
                                            <small class="me-2 text-nowrap" style="font-size: 0.825rem;"><i class="fa-regular fa-envelope fa-sm text-gray-400 me-1"></i><a href="mailto:{{ $contact->email }}">{{ $contact->email }}</a></small>
                                            <small class="me-2 text-nowrap text-capitalize" style="font-size: 0.825rem;"><i class="fa-solid fa-mobile-screen-button fa-sm text-gray-400 me-1"></i>{{ $contact->ip }}</small>
                                        </div>
                                    </td>
                                    <td class="align-middle">
                                        {{ Str::limit($contact->message, '100', '...') }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        @if ($contact->read == 0)
                                            <span class="text-success"><i class="fa-solid fa-envelope me-1"></i>Unread</span>
                                            @else 
                                            <span class="text-muted"><i class="fa-solid fa-envelope-open me-1"></i>Read</span>
                                        @endif
                                    </td>
                                    <td class="align-middle text-nowrap">{{ $contact->created_at->format('M d, Y') }} at {{ $contact->created_at->format('h:m a') }}</td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            <a href="{{ route('contacts.show', $contact->id) }}" class="btn btn-sm btn-primary text-nowrap me-2"><i class="fa-regular fa-circle-check fa-sm"></i> Read</a>
                                            <a href="{{ route('contacts.destroy', $contact->id) }}" class="contact-delete-btn btn btn-sm btn-danger text-nowrap me-2" data-id="{{ $contact->id }}"><i class="fa-solid fa-trash-alt fa-sm"></i> Delete</a>
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


    <!-- Contact Detele Modal -->
    <div class="modal fade" id="deleteContactModal" tabindex="-1" aria-labelledby="deleteContactModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-danger" id="deleteContactModalLabel"><i class="fas fa-trash-alt me-1"></i> Confirm Deletion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h1 id="contactId" class="d-none"></h1>
                    <p class="m-0">Are you sure you want to delete this contact message?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" id="deleteContactConfirm" class="btn btn-danger">Yes, Delete</button>
                </div>
            </div>
        </div>
    </div>

@endsection


@section('scripts')
    <script type="text/javascript">
        jQuery(function(){
            $('#dataTable').DataTable({
                "order" : [[0, "desc"]]
            });


            // Contact Delete
            $('.contact-delete-btn').on('click', function(e) {
                e.preventDefault();
                $('#contactId').html($(this).data('id'));
                $('#deleteContactModal').modal('show');
            });


            $('#deleteContactConfirm').on('click', function(){
                let contactId =  $('#contactId').html();
                axios.delete('/admin/contacts/'+contactId, {
                    
                })
                .then(res => {
                    if (res.status == 200) {
                        if (res.data == 1) {
                            location.reload();
                        } else {
                            toastr.error('Delete failed', 'Failed');
                        }
                    }else {
                            toastr.error('Delete failed', 'Failed');
                        }
                    console.log(res)
                })
                .catch(err => {
                    console.error(err); 
                })
            });

        });
    </script>
@endsection