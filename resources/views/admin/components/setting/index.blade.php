@if(session()->get('success'))
<div class="alert alert-success">
  {{ session()->get('success') }}  
</div><br />
@endif
<!-- Anytime picker -->
<div class="panel panel-flat">
    <div class="panel-heading">
        <h5 class="panel-title">Cấu hình thời gian timesheet</h5>
        <div class="heading-elements">
            <ul class="icons-list">
                <li><a data-action="collapse"></a></li>
                <li><a data-action="reload"></a></li>
                <li><a data-action="close"></a></li>
            </ul>
        </div>
    </div>

    <div class="panel-body">
        <p class="mb-15"></p>
        <form class="form-horizontal" role="form" method="POST" enctype="multipart/form-data" action="{{ url('admin/setting/timeupdate') }}">
            {{ csrf_field() }}
            <div class="row">
                <div class="col-md-3">

                    <div class="content-group-lg">
                        <h6 class="text-semibold">Chọn thời gian bắt đầu khai timesheet</h6>
                        <p><code>Mặc định là 17:00</code>.</p>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-watch2"></i></span>
                            <input type="text" class="form-control" name="start" id="anytime-time-start" value="{{ (empty($config->timesheet_start)) ? '17:00' : $config->timesheet_start}}">
                        </div>
                    </div>

                </div>
            </div>

            
            <div class="row">
                <div class="col-md-3">

                    <div class="content-group-lg">
                        <h6 class="text-semibold">Chọn thời gian chốt timesheet</h6>
                        <p><code>Mặc định là 19:00</code>.</p>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-watch2"></i></span>
                            <input type="text" class="form-control" name="end" id="anytime-time-end" value="{{ (empty($config->timesheet_end)) ? '19:00' : $config->timesheet_end}}">
                        </div>
                    </div>

                </div>
            </div>
            <div class="text-left">
                <button type="reset" class="btn btn-danger">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>

    </div>
</div>
<!-- /anytime picker -->