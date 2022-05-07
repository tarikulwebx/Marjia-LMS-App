@extends('admin.layouts.app')

@section('title', 'FAQs')

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

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">All FAQs</h1>
        <a href="{{ route('faqs.create') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-plus text-white-50 me-1"></i> New FAQ</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Frequently Asked Questions (FAQs)</h6>
        </div>
        <div class="card-body pb-4">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Slug</th>
                            <th>Updated</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>Id</td>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Slug</th>
                            <th>Updated</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @if ($faqs)
                            @foreach ($faqs as $faq)
                                <tr>
                                    <td class="align-middle">{{ $faq->id }}</td>
                                    <td class="align-middle">
                                        <h6 class="mb-0"><a href="{{ route('faqs.edit', $faq->slug) }}">{{ $faq->question }}</a></h6>
                                    </td>
                                    <td class="align-middle">
                                        {!! Str::limit($faq->answer, 120, '...') !!}
                                    </td>
                                    <td class="align-middle">{{ $faq->slug }}</td>
                                    <td class="align-middle text-nowrap">
                                        {{ $faq->updated_at->format('M d, Y') }} at {{ $faq->updated_at->format('h:m a') }}
                                    </td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            <a href="{{ route('faqs.edit', $faq->slug) }}" class="btn btn-sm btn-primary text-nowrap me-2"><i class="fa-solid fa-pen-to-square fa-sm"></i> Edit</a>
                                            <a href="{{ route('faqs.destroy', $faq->slug) }}" class="faq-delete-btn btn btn-sm btn-danger text-nowrap me-2" data-id="{{ $faq->id }}"><i class="fa-solid fa-trash-alt fa-sm"></i> Delete</a>
                                            
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


    <!-- Page Detele Modal -->
    <div class="modal fade" id="deleteFaqModal" tabindex="-1" aria-labelledby="deleteFaqModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-danger" id="deleteFaqModalLabel"><i class="fas fa-trash-alt me-1"></i> Confirm Deletion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h1 id="faqId" class="d-none"></h1>
                    <p class="m-0">Are you sure you want to delete this FAQ?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" id="deleteFaqConfirm" class="btn btn-danger">Yes, Delete</button>
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


        // Blog Delete
        $('.faq-delete-btn').on('click', function(e) {
            e.preventDefault();
            $('#faqId').html($(this).data('id'));
            $('#deleteFaqModal').modal('show');
        });


        $('#deleteFaqConfirm').on('click', function(){
            let faqId =  $('#faqId').html();
            axios.delete('/admin/faqs/'+faqId, {
                
            })
            .then(res => {
                if (res.status == 200) {
                    if (res.data == 1) {
                        $('#deleteFaqModal').modal('hide');
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

    </script>
@endsection
