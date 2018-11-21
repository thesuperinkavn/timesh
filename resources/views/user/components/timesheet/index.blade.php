<!-- Task manager table -->
<div class="panel panel-white">
    <div class="panel-heading">
        <h6 class="panel-title">{{ $title }}</h6>
        <div class="heading-elements">
            <ul class="icons-list">
                <li><a data-action="collapse"></a></li>
                <li><a data-action="reload"></a></li>
                <li><a data-action="close"></a></li>
            </ul>
        </div>
    </div>
    <div class="panel-body">
        <a href="{{ url('timesheet/create') }}">
            <button type="button" class="btn bg-teal-400 btn-labeled"><b><i class="icon-add"></i></b> 
                Thêm mới
            </button>
        </a>
    </div>

    <table class="table tasks-list table-lg">
        <thead>
            <tr>
                <th>ID</th>
                <th>Period</th>
                <th>Mô tả</th>
                <th>Người tạo</th>
                <th>Trạng thái</th>
                <th>Dành cho ngày</th>
                <th>Cập nhật</th>
                <th class="text-center text-muted" style="width: 30px;"><i class="icon-checkmark3"></i></th>
            </tr>
        </thead>
        <tbody>
            @foreach ($timesheets as $timesheet)
            <tr>
                <td>#{{ $timesheet->id }}</td>
                <td>Tất cả</td>
                <td>
                    <div class="text-semibold">
                        <a class="openModal" data-toggle="modal" data-target="#actionmodal" data-action="show" data-id="{{ $timesheet->id }}">
                            {{ $timesheet->name }}
                        </a>
                    </div>
                    <div class="text-muted">{{ $timesheet->description }}</div>
                </td>
                <td>{{ $timesheet->creator->name }}</td>
                <td>
                   {!! timesheet_status($timesheet->approve) !!}
                </td>
                <td>
                    {{ $timesheet->release_date }}

                </td>
                <td>
                    <div class="input-group input-group-transparent">
                        <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                        <input type="text" class="form-control datepicker" value="{{ $timesheet->updated_at }}">
                    </div>
                </td>
                <td class="text-center">
                    <ul class="icons-list">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a href="{{ url('timesheet/edit?id='.$timesheet->id) }}" id="addtask" data-id="<?=$timesheet->id?>"><i class="icon-pencil7"></i> Sửa nội dung</a></li>
                                <li class="divider"></li>
                                <li><a href="{{ url('timesheet/addtask?id='.$timesheet->id) }}" id="addtask" data-id="<?=$timesheet->id?>"><i class="icon-plus-circle2"></i> Thêm task</a></li>
                            </ul>
                        </li>
                    </ul>
                </td>
            </tr>
            @endforeach


        </tbody>
    </table>
</div>
<!-- /task manager table -->



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
            url: '/timesheet/show', // This is the url we gave in the route
            data: {'id' : id}, // a JSON object to send back
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
            
            var taskID = $(this).data('id');
            SwalDelete(taskID);
            e.preventDefault();
        });
    });
    function SwalDelete(taskID){
            
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
                    data = {id:taskID};
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });
                    $.ajax({
                        url: "/task/destroy",
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