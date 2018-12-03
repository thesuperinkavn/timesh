@if ($errors->any())
<div class="alert alert-danger">
    <ul>
        @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
        @endforeach
    </ul>
</div><br />
@endif

@if(session()->get('success'))
<div class="alert alert-success">
  {{ session()->get('success') }}  
</div><br />
@endif

<div class="row">
    <div class="col-md-12">
        <!-- Support tickets -->

        <div class="panel panel-flat">
            <form action="{{ route('profile.update') }}" method="POST" enctype="multipart/form-data" class="form-horizontal">
                {{ csrf_field() }}
                <div class="modal-body">
                    <div class="form-group">
                        <label class="col-lg-3 control-label text-semibold">Ảnh đại diện</label>
                        <div class="col-lg-9">
                        @if (Auth::user()->avatar==NULL)
                            <img src="{{ asset('upload/avatar/noavatar.png') }}" class="img-responsive"/>
                        @else
                            <img src="{{ asset('upload/avatar/'.Auth::user()->avatar) }}" class="img-responsive"/>
                        @endif
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-lg-3 control-label text-semibold"></label>
                        <div class="col-lg-9">
                            <input type="file" name="image" class="file-input-advanced" data-show-remove="false" data-show-upload="false">
                            <span class="help-block">Hãy lưu ý về kích thước ảnh.</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-12 col-md-3">Họ và tên</label>
                        <div class="col-sm-12 col-md-9">
                            <input type="text" placeholder="Họ và tên" name="name" id="name" class="form-control" value="{{ Auth::user()->name }}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-12 col-md-3">Mật khẩu</label>
                        <div class="col-sm-12 col-md-9">
                            <input type="password" placeholder="Mật khẩu" id="password" name="password" class="form-control" value="">
                        </div>
                    </div>
            
                    <div class="form-group">
                        <label class="control-label col-sm-12 col-md-3">Description</label>
                        <div class="col-sm-12 col-md-9">
                            <input type="text" placeholder="Description" id="description" name="description" class="form-control" value="{{ Auth::user()->desription }}">
                        </div>
                    </div>
            
                </div>

                <div class="modal-footer">
            
                    <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                    <button type="submit" id="add" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        <!-- /support tickets -->
    </div>
</div>

