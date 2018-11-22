<div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">&times;</button>
    <h5 class="modal-title">{{$title}}</h5>
</div>
<form action="#" class="form-horizontal">
    {{ csrf_field() }}
    <div class="modal-body">
        <div class="form-group">
            <label class="control-label col-sm-12 col-md-3">Chọn task</label>
            <div class="col-sm-12 col-md-9">
                <select class="basic-single select select-fixed-single" id="task" name="task">
                    @foreach ($list_tasks_assign as $item)
                    <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
        </div>

        <div class="form-group">
            <label class="control-label col-sm-12 col-md-3">Mô tả</label>
            <div class="col-sm-12 col-md-8">
                <textarea rows="5" cols="5" class="form-control" id="description" placeholder="Mô tả nhanh"></textarea>
            </div>
        </div>

        <div class="form-group">
            <label class="control-label col-sm-12 col-md-3">Thời gian</label>
            <div class="col-sm-12 col-md-3">
                <select class="basic-single select select-fixed-single" id="duration" name="duration">
                    <option value="1">1 tiếng</option>
                    <option value="2">2 tiếng</option>
                    <option value="3">3 tiếng</option>
                    <option value="4">4 tiếng</option>
                    <option value="5">5 tiếng</option>
                    <option value="6">6 tiếng</option>
                    <option value="7">7 tiếng</option>
                    <option value="8">8 tiếng</option>
                </select>
            </div>
        </div>
    </div>
    <div class="er">
        <div class="alert alert-danger no-border hide">
        </div>
        <div class="alert alert-success no-border hide">
        </div>
    </div>
    <div class="modal-footer">

        <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
        <button type="button" id="add" class="btn btn-primary">Submit</button>
    </div>
</form>

<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/forms/styling/uniform.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/core/libraries/jquery_ui/interactions.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/forms/select2/select2.min.js') }}"></script>

<script type="text/javascript">
    $(function() {
        // Checkboxes/radios (Uniform)
        // ------------------------------
        // Default initialization
        // Fixed width. Single select
        $('.select-fixed-single').select2({
            minimumResultsForSearch: 2,
            width: 350
        });
        
    });
</script>

<script>
    $(document).ready(function(){
        
    // when click submit
    $('#add').click(function(){
        var task            = $('#task').val();
        var description     = $('#description').val();
        var duration        = $('#duration').val();
        var timesheet_id    = '{{ $timesheet_id }}';

        $.ajax({
            type : "POST",
            dataType : "JSON",
            url: "{{ url('timesheet/addTaskToTimeSheet') }}",
            data : {
                task            : task,
                content     : description,
                duration        : duration,
                timesheet_id    : timesheet_id
            },
            success : function(result)
            {
                // Có lỗi, tức là key error = 1
                if (result.hasOwnProperty('error') && result.error == '1'){
                    var html = '';
 
                    // Lặp qua các key và xử lý nối lỗi
                    $.each(result, function(key, item){
                        // Tránh key error ra vì nó là key thông báo trạng thái
                        if (key != 'error'){ 
                            html += '<p  class="text-semibold">'+item+'</p>';
                        }
                    });
                    $('.alert-danger').html(html).removeClass('hide');
                    $('.alert-success').addClass('hide');
                }
                else{ // Thành công
                    $('.alert-success').html('Dữ liệu đang được thêm vào!').removeClass('hide');
                    $('.alert-danger').addClass('hide');
 
                    // 4 giay sau sẽ tắt popup
                    setTimeout(function(){
                        $('#actionmodal').modal('hide');
                        // Ẩn thông báo lỗi
                        $('.alert-danger').addClass('hide');
                        $('.alert-success').addClass('hide');
                        location.reload(); // then reload the page.
                    }, 2000);
                }
            }
        });
    });
});
</script>