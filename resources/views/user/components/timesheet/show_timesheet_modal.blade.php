<div class="panel">
    <div class="panel-body">
        <h6 class="text-semibold no-margin-top">
            <a href="#">Timesheet #{{ $info_timesheet->id }} - {{ $info_timesheet->name }}</a>
        </h6>

        {{ $info_timesheet->description }}

        <ul class="media-list">
            <li class="media">
                <div class="media-left">
                    <a href="#" class="btn border-primary text-primary btn-flat btn-icon btn-rounded btn-sm">
                        <i class="icon-user"></i>
                    </a>
                </div>

                <div class="media-body">
                    {{ $info_timesheet->creator->name }}
                </div>
            </li>

            <li class="media">
                <div class="media-left">
                    <a href="#" class="btn border-primary text-primary btn-flat btn-icon btn-rounded btn-sm">
                        <i class="icon-task"></i>
                    </a>
                </div>

                <div class="media-body">
                    Danh sách các task của ngày
                    @if (count($list_tasks_added)==0)
                        <p>N/A</p>
                    @else
                        @foreach ($list_tasks_added as $item )
                            <p> - Task #{{ $item->id }}. {{$item->name}} . <a href="#">{{$item->pivot->duration}} giờ</a> </p>
                        @endforeach
                    @endif
                   
                </div>
            </li>

            <li class="media">
                <div class="media-left">
                    <a href="#" class="btn border-danger text-danger btn-flat btn-icon btn-rounded btn-sm">
                        <i class="icon-wall"></i>
                    </a>
                </div>

                <div class="media-body">
                    Khó khăn đang gặp phải
                    @if (empty($info_timesheet->issue))
                        <p>N/A</p>
                    @else
                        <p>- {{ $info_timesheet->issue }}</p>
                    @endif
                </div>
            </li>

            <li class="media">
                <div class="media-left">
                    <a href="#" class="btn border-success text-success btn-flat btn-icon btn-rounded btn-sm">
                        <i class="icon-comments"></i>
                    </a>
                </div>
                
                <div class="media-body">
                    Dự định trong thời gian tiếp theo
                    @if (empty($info_timesheet->plan))
                    <p>N/A</p>
                    @else
                        <p>- {{ $info_timesheet->issue }}</p>
                    @endif
                </div>
            </li>
        </ul>
    </div>

    <div class="panel-footer panel-footer-condensed">
        <div class="heading-elements not-collapsible">
            <span class="heading-text">
                <i class="icon-history position-left"></i>
                {{ $info_timesheet->release_date }}
            </span>

            <span class="heading-text pull-right label">
                {!! timesheet_status($info_timesheet->approve) !!}
            </span>
        </div>
    </div>
</div>