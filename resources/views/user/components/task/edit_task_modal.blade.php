<div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h5 class="modal-title">{{$title}}</h5>
    </div>
    
    <form action="#" class="form-horizontal">
        {{ csrf_field() }}
        <div class="modal-body">
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Tên task</label>
                <div class="col-sm-12 col-md-9">
                    <input type="text" placeholder="Tên task" id="name" value="{{ $info_task->name }}" class="form-control">
                </div>
            </div>
    
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Mô tả</label>
                <div class="col-sm-12 col-md-8">
                    <textarea rows="5" cols="5" class="form-control" id="description" placeholder="Mô tả nhanh">{{ $info_task->description }}</textarea>
                </div>
            </div>
    
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Assign cho</label>
                <div class="col-sm-12 col-md-3">
                    <select class="basic-single select select-fixed-single" id="assignee" name="assignee">
                        <option value="" {{($info_task->assign_to == NULL) ? 'selected' : ' ' }}>Không chọn</option>
                        <option value="{{ $info_user->id }}" {{ ($info_task->assign_to == $info_user->id) ? 'selected' : ' ' }}>{{ $info_user->name }}</option>
                        @foreach ($assignees as $assignee)
                        <option value="{{ $assignee->id }}" {{ ($info_task->assign_to == $assignee->id) ? 'selected' : ' ' }}>{{ $assignee->name }}</option>            
                        @endforeach
                    </select>
                </div>
            </div>
    
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Ưu tiên</label>
                <div class="col-sm-12 col-md-3">
                    <select class="basic-single select select-fixed-single" id="priority" name="state">
                        <option value="1"  {{ ($info_task->priority == 1) ? 'selected' : ' ' }}>Cao nhất</option>
                        <option value="2"  {{ ($info_task->priority == 2) ? 'selected' : ' ' }}>Cao</option>
                        <option value="3"  {{ ($info_task->priority == 3) ? 'selected' : ' ' }}>Bình thường</option>
                        <option value="4"  {{ ($info_task->priority == 4) ? 'selected' : ' ' }}>Thấp</option>
                    </select>
                </div>
            </div>
    
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Trạng thái</label>
                <div class="col-sm-12 col-md-3">
                    <select class="basic-single select select-fixed-single" id="status" name="status">
                        <option value="1" {{ ($info_task->priority == 1) ? 'selected' : ' ' }}>Mở</option>
                        <option value="2" {{ ($info_task->priority == 2) ? 'selected' : ' ' }}>Bị giữ</option>
                        <option value="3" {{ ($info_task->priority == 3) ? 'selected' : ' ' }}>Đã xong</option>
                        <option value="4" {{ ($info_task->priority == 4) ? 'selected' : ' ' }}>Trùng lặp</option>
                        <option value="5" {{ ($info_task->priority == 5) ? 'selected' : ' ' }}>Không hợp lệ</option>
                        <option value="6" {{ ($info_task->priority == 6) ? 'selected' : ' ' }}>Đóng</option>
                    </select>
                </div>
            </div>
    
            <div class="checkbox">
                <label>
                    <input type="checkbox" class="styled" id="active" checked="">
                    Active
                </label>
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
            <button type="button" id="edit" class="btn btn-primary">Submit</button>
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
            $(".styled, .multiselect-container input").uniform({
                radioClass: 'choice'
            });
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
        $('#edit').click(function(){
            var name            = $('#name').val();
            var description     = $('#description').val();
            var assignee            = $('#assignee').val();
            var priority            = $('#priority').val();
            var status            = $('#status').val();
            var id_task = '{{ $info_task->id }}';
            var active;
    
            if ($('#active').is(":checked")) active = 1;
            else active = 0;
    
            $.ajax({
                type : "POST",
                dataType : "JSON",
                url: "<?php echo url('task/edit'); ?>",
                data : {
                    name            : name,
                    description     : description,
                    assignee        : assignee,
                    priority        : priority,
                    status          : status,
                    active          : active,
                    id_task         : id_task
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