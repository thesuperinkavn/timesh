<div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h5 class="modal-title">{{$title}}</h5>
    </div>
    
    <form action="#" class="form-horizontal">
        {{ csrf_field() }}
        <div class="modal-body">
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Tên nhân viên</label>
                <div class="col-sm-12 col-md-9">
                    <input type="text" placeholder="Họ và tên" id="name" value="{{ $info->name }}" class="form-control">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Email</label>
                <div class="col-sm-12 col-md-9">
                    <input type="text" placeholder="Email đăng nhập" id="email" value="{{ $info->email }}" class="form-control">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Mật khẩu</label>
                <div class="col-sm-12 col-md-9">
                    <input type="password" placeholder="Mật khẩu" id="password" value="" class="form-control">
                </div>
            </div>
    
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Mô tả</label>
                <div class="col-sm-12 col-md-8">
                    <textarea rows="5" cols="5" class="form-control" id="description" placeholder="Mô tả nhanh">{{ $info->description }}</textarea>
                </div>
            </div>
    
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Quản lý trực tiếp</label>
                <div class="col-sm-12 col-md-3">
                    <select class="basic-single select select-fixed-single" id="leader" name="state">
                        <option value="" {{ ($info->leader_id == null) ? 'selected' : '' }}>Không có quản lý</option>
                        @foreach($leaders as $leader)
                        <option value="{{ $leader->id }}" {{ ($info->leader_id == $leader->id) ? 'selected' : '' }}>{{ $leader->name }}</option>
                        @endforeach
                    </select>
                </div>
            </div>
    
            <div class="form-group">
                <label class="control-label col-sm-12 col-md-3">Role</label>
                <div class="col-sm-12 col-md-3">
                    <select class="basic-single select select-fixed-single" id="role" name="state">
                        <option value="2" {{ ($info->role == 2) ? 'selected' : '' }}>Nhân viên</option>
                        <option value="3" {{ ($info->role == 3) ? 'selected' : '' }}>Leader</option>
                    </select>
                </div>
            </div>
    
            <div class="checkbox">
                <label>
                    <input type="checkbox" class="styled" id="approve" checked="checked">
                    Approve
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
                var id = '{{$info->id}}';
                var name            = $('#name').val();
                var email           = $('#email').val();
                var password        = $('#password').val();
                var leader          = $('#leader').val();
                var description     = $('#description').val();
                var role            = $('#role').val();
                var approve;
    
                if ($('#approve').is(":checked")) approve = 1;
                else approve = 0;
    
                $.ajax({
                    type : "POST",
                    dataType : "JSON",
                    url: "<?php echo url('admin/usermanagement/edit'); ?>",
                    data : {
                        id              : id,
                        name            : name,
                        email           : email,
                        password        : password,
                        leader          : leader,
                        description     : description,
                        role            : role,
                        approve         : approve
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
                            $('.alert-success').html('Dữ liệu đang được sửa!').removeClass('hide');
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