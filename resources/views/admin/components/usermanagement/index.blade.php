<!-- Basic datatable -->
<div class="panel panel-flat">
        <div class="panel-heading">
            <h5 class="panel-title">{{$title}}</h5>
            <div class="heading-elements">
                <ul class="icons-list">
                    <li><a data-action="collapse"></a></li>
                    <li><a data-action="reload"></a></li>
                    <li><a data-action="close"></a></li>
                </ul>
            </div>
        </div>
    
        <div class="panel-body">
            <a class="openModal" data-toggle="modal" data-target="#actionmodal" data-action="add" data-id="0">
                <button type="button" class="btn bg-teal-400 btn-labeled"><b><i class="icon-add"></i></b> 
                    Thêm mới
                </button>
            </a>
        </div>
        @if(session()->get('success'))
        <div class="alert alert-success">
          {{ session()->get('success') }}  
        </div><br />
        @endif
    
        <table class="table datatable-basic">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>Ngày tạo</th>
                    <th>Leader</th>
                    <th>Tình trạng</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($users as $user)
                <tr>
                <td>{{$user->id}}</td>
                    <td><a href="#">{{$user->name}}</a></td>
                    <td>{{$user->created_at}}</td>
                    <td><span class="label label-success">{{ $user->leader->name }}</span></td>
                    <td>{{ ($user->approve==FALSE) ? 'Not approve' : 'approved' }}</td>
                    <td class="text-center">
                        <ul class="list-edit">
                            <li><a class="openModal" data-toggle="modal" data-target="#actionmodal" data-action="edit" data-id="<?=$user->id ?>"><i class="icon-compose"></i></a></li>
                            <li><a href="#" id="delete" data-id="<?=$user->id?>"><i class="icon-bin"></i></a></li>
                        </ul>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    <!-- /basic datatable -->

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
                url: '/admin/usermanagement/action', // This is the url we gave in the route
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
        
        var userId = $(this).data('id');
        SwalDelete(userId);
        e.preventDefault();
    });
});
function SwalDelete(userId){
        
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
                data = {id:userId};
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    url: "/admin/usermanagement/destroy",
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