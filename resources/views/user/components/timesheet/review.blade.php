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
                <td>{{ $timesheet->user_name }}</td>
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
                    <ul class="list-edit">
                        <li><a href="#" class="{{ ($timesheet->approve==0) ? 'approve' : 'unapprove' }}" data-id="{{$timesheet->id}}"><i class="{{ ($timesheet->approve==0) ? 'icon-file-check' : 'icon-file-minus' }}"></i></a></li>
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
        $(document).on('click', '.approve', function(e){
            
            var id = $(this).data('id');
            Approve(id);
            e.preventDefault();
        });
        $(document).on('click', '.unapprove', function(e){
            
            var id = $(this).data('id');
            Unapprove(id);
            e.preventDefault();
        });
    });
    function Approve(id){
            
        swal({
            title:'Bạn có chắc chắn?',
            text: "Bài viết này sẽ được duyệt ngay lập tức!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đúng, Duyệt nó!',
            cancelButtonText: 'Bỏ qua',
            showLoaderOnConfirm: true,
                
            preConfirm: function() {
                return new Promise(function(resolve) {
                    //console.log(productId);
                    data = {id:id};
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });
                    $.ajax({
                        url: "{{ url('/timesheet/review/approve') }}",
                        type : "POST",
                        dataType : "JSON",
                        data : data
                    })
                    .done(function(response){
                        swal('OK!', response.message, response.status);
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
    function Unapprove(id){
        
        swal({
            title:'Bạn có chắc chắn?',
            text: "Bài viết này sẽ được bỏ duyệt ngay lập tức!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đúng, Bỏ duyệt nó!',
            cancelButtonText: 'Bỏ qua',
            showLoaderOnConfirm: true,
                
            preConfirm: function() {
                return new Promise(function(resolve) {
                    //console.log(productId);
                    data = {id:id};
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });
                    $.ajax({
                        url: "{{ url('/timesheet/unapprove') }}",
                        type : "POST",
                        dataType : "JSON",
                        data : data
                    })
                    .done(function(response){
                        swal('OK!', response.message, response.status);
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