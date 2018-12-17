
<a href="{{ url('timesheet') }}">
    <button type="button" class="btn bg-teal-400 btn-labeled"><b><i class="icon-arrow-left13"></i></b> 
        BACK
    </button>
</a>
<!-- WYSIHTML5 basic -->
<div class="panel panel-flat">
    <div class="panel-heading">
        <h5 class="panel-title">Thêm mới bài viết</h5>
        <div class="heading-elements">
            <ul class="icons-list">
                <li><a data-action="collapse"></a></li>
                <li><a data-action="reload"></a></li>
                <li><a data-action="close"></a></li>
            </ul>
        </div>
    </div>

    <div class="panel-body">
        @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div><br />
        @endif
        <form class="form-horizontal" role="form" method="POST" enctype="multipart/form-data" action="{{ route('timesheet.update',$info_timesheet->id) }}">
            <div class="form-group">
                {{ csrf_field() }}
                <label class="control-label col-lg-2 col-xs-12">Tiêu đề</label>
                <div class="col-lg-6 col-xs-12">
                    <input type="text" id="name" name="name" placeholder="tiêu đề" value="{{ $info_timesheet->name }}" class="form-control">
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-lg-2 col-xs-12">Mô tả</label>
                <div class="col-lg-6 col-xs-12">
                    <textarea rows="3" cols="3" class="form-control" name="description" placeholder="Mô tả">{{ $info_timesheet->description }}</textarea>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-lg-2 col-xs-12">Dành cho ngày</label>
                <div class="col-lg-6 col-xs-12">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="icon-calendar5"></i></span>
                        <input type="text" class="form-control pickadate" id="release_date" name="release_date" value="{{ $info_timesheet->release_date }}" placeholder="Chọn ngày...">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-lg-2 col-xs-12">Khó khăn gặp phải</label>
                <div class="col-lg-6 col-xs-12">
                    <textarea rows="3" cols="3" class="form-control" name="issue" placeholder="Mô tả khó khăn đang gặp phải">{{ $info_timesheet->issue }}</textarea>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-lg-2 col-xs-12">Dự định tiếp theo</label>
                <div class="col-lg-6 col-xs-12">
                    <textarea rows="3" cols="3" class="form-control" name="plan" placeholder="Mô tả những dự định trong thời gian tiếp theo">{{ $info_timesheet->plan }}</textarea>
                </div>
            </div>


            <div class="text-right">
                <button type="reset" class="btn btn-danger">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</div>
<!-- /WYSIHTML5 basic -->