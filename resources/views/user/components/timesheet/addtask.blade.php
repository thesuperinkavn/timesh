
    <a href="{{ url('timesheet') }}">
        <button type="button" class="btn bg-teal-400 btn-labeled"><b><i class="icon-arrow-left13"></i></b> 
            BACK
        </button>
    </a>

<div class="row">
    <div class="col-md-6">
        <!-- Support tickets -->

        <div class="panel panel-flat">
            <div class="panel-heading">
                <h6 class="panel-title">{{$title}}
                    <a class="openModal" data-toggle="modal" data-target="#actionmodal" data-action="add" data-id="{{ $info_timesheet->id }}">
                        <i class="icon-add"></i>
                    </a>
                </h6>

            </div>
            <div class="table-responsive">
                <table class="table text-nowrap">
                    <tbody>
                        <tr class="active border-double">
                            <td colspan="3">Tất cả task cho timesheet này</td>
                            <td class="text-right">
                                <span class="badge bg-blue">{{ count($list_tasks_added) }}</span>
                            </td>
                        </tr>
                        @foreach ( $list_tasks_added as $item )
                        <tr>
                            <td class="text-center">
                                <h6 class="no-margin">{{ $item->pivot->duration }} <small class="display-block text-size-small no-margin">giờ</small></h6>
                            </td>
                            <td>
                                <div class="media-left media-middle">
                                    <a href="#" class="btn bg-teal-400 btn-rounded btn-icon btn-xs">
                                        <span class="letter-icon"></span>
                                    </a>
                                </div>

                                <div class="media-body">
                                    <a href="#" class="display-inline-block text-default text-semibold letter-icon-title">{{ $info_timesheet->creator->name }}</a>
                                    <div class="text-muted text-size-small"><span class="status-mark border-blue position-left"></span> Active</div>
                                </div>
                            </td>
                            <td>
                                <a href="#" class="text-default display-inline-block">
                                    <span class="text-semibold">[#{{ $item->pivot->task_id }}] {{ $item->name }}</span>
                                    <span class="display-block text-muted">{{ $item->description }}</span>
                                </a>
                            </td>
                            <td class="text-center">
                                <a href="#" id="delete" data-task= "{{ $item->pivot->task_id }}" data-timesheet="{{ $info_timesheet->id }}" data-id="{{$item->pivot->id}}"><i class="icon-cross2 text-danger"></i> Xóa</a>
                            </td>
                        </tr>
                        @endforeach


                    </tbody>
                </table>
            </div>
        </div>
        <!-- /support tickets -->
    </div>
</div>

<!-- ACTION MODAL -->
<div id="actionmodal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

        </div>
    </div>
</div>
<!-- /ACTION MODAL -->

<script>
$(document).ready(function(){
    $('.openModal').click(function(){
        var id = $(this).attr('data-id');
        var action = $(this).attr('data-action');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            method: 'POST', // Type of response and matches what we said in the route
            url: '/timesheet/addtask_action', // This is the url we gave in the route
            data: {'id' : id, 'action':action}, // a JSON object to send back
            success: function(response){ // What to do if we succeed
                //console.log(response);
                $(".modal-content").html(response); 
            },
            error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
                console.log(JSON.stringify(jqXHR));
                console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
            }
        });
        action="";
    });
});
</script>

<script>
$(document).ready(function(){
    $(document).on('click', '#delete', function(e){
        
        var id = $(this).data('id');
        var timesheet = $(this).data('timesheet');
        var task = $(this).data('task');

        SwalDelete(id,timesheet,task);
        e.preventDefault();
    });
});
function SwalDelete(id,timesheet,task){
        
    swal({
        title:'Bạn có chắc chắn?',
        text: "Dữ liệu này sẽ bị xóa ngay lập tức!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đúng, Xóa nó!',
        cancelButtonText: 'Bỏ qua',
        showLoaderOnConfirm: true,
            
        preConfirm: function() {
            return new Promise(function(resolve) {
                //console.log(productId);
                data = {id:id, timesheet:timesheet, task:task};
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    url: "/timesheet/removeTaskFromTimeSheet",
                    type : "POST",
                    dataType : "JSON",
                    data : data
                })
                .done(function(response){
                    swal('Đã xóa!', response.message, response.status);
                location.reload(); // then reload the page.
                })
                .fail(function(){
                    swal('Oops...', 'Có lỗi xảy ra !', 'error');
                });
            });
        },
        allowOutsideClick: false			  
    });	
    
}
</script>