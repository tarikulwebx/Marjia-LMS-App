@extends('admin.layouts.app')

@section('title', 'Pages')

@section('content')

    @if (session('page_action_msg'))
    <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
        <div class="me-2 pe-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        </div>
        <div>
            {{ session('page_action_msg') }}
        </div>
        <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">All Pages</h1>
        <a href="{{ route('pages.create') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-plus text-white-50 me-1"></i> New page</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">All Pages</h6>
        </div>
        <div class="card-body pb-4">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Slug</th>
                            <th>Updated</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>Id</td>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Slug</th>
                            <th>Updated</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @if ($pages)
                            @foreach ($pages as $page)
                                <tr>
                                    <td class="align-middle">{{ $page->id }}</td>
                                    <td class="align-middle text-nowrap">
                                        <h6 class="mb-0"><a href="{{ route('pages.edit', $page->slug) }}">{{ $page->title }}</a></h6>
                                    </td>
                                    <td class="align-middle">
                                        {!! Str::limit($page->body, 120, '...') !!}
                                    </td>
                                    <td class="align-middle text-nowrap">{{ $page->slug }}</td>
                                    <td class="align-middle text-nowrap">
                                        {{ $page->updated_at->format('M d, Y') }} at {{ $page->updated_at->format('h:m a') }}
                                    </td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            <a href="{{ route('pages.edit', $page->slug) }}" class="btn btn-sm btn-primary text-nowrap me-2"><i class="fa-solid fa-pen-to-square fa-sm"></i> Edit</a>
                                            @if ($page->id < 6)
                                                <button type="button" class="page-delete-btn btn btn-sm btn-dark text-nowrap me-2" data-id="{{ $page->id }}" disabled><i class="fa-solid fa-trash-alt fa-sm"></i> Delete</button>
                                                @else
                                                    <a href="{{ route('pages.destroy', $page->slug) }}" class="page-delete-btn btn btn-sm btn-danger text-nowrap me-2" data-id="{{ $page->id }}" @if($page->id < 6) disabled @endif><i class="fa-solid fa-trash-alt fa-sm"></i> Delete</a>
                                            @endif
                                            
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
    <div class="modal fade" id="deletePageModal" tabindex="-1" aria-labelledby="deletePageModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-danger" id="deletePageModalLabel"><i class="fas fa-trash-alt me-1"></i> Confirm Deletion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h1 id="pageId" class="d-none"></h1>
                    <p class="m-0">Are you sure you want to delete this page?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" id="deletePageConfirm" class="btn btn-danger">Yes, Delete</button>
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
        $('.page-delete-btn').on('click', function(e) {
            e.preventDefault();
            $('#pageId').html($(this).data('id'));
            $('#deletePageModal').modal('show');
        });


        $('#deletePageConfirm').on('click', function(){
            let pageId =  $('#pageId').html();
            axios.delete('/admin/pages/'+pageId, {
                
            })
            .then(res => {
                if (res.status == 200) {
                    if (res.data == 1) {
                        $('#deletePageModal').modal('hide');
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
