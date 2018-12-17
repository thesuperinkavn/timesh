
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
        <a class="openModal" data-toggle="modal" data-target="#actionmodal" data-action="add" data-id="0">
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
                <th>Ưu tiên</th>
                <th>Cập nhật</th>
                <th>Trạng thái</th>
                <th>Assigned</th>
                <th class="text-center text-muted" style="width: 30px;"><i class="icon-checkmark3"></i></th>
            </tr>
        </thead>
        <tbody>
            @foreach ($tasks as $task)
            <tr>
                <td>#{{ $task->id }}</td>
                <td>Tất cả</td>
                <td>
                    <div class="text-semibold"><a href="#">{{ $task->name }}</a></div>
                    <div class="text-muted">{{ $task->description }}</div>
                </td>
                <td>{{ $task->creator->name }}</td>
                <td>
                   {!! task_priority($task->priority) !!}
                </td>
                <td>
                    <div class="input-group input-group-transparent">
                        <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                        <input type="text" class="form-control datepicker" value="{{ $task->updated_at }}">
                    </div>
                </td>
                <td>
                    {!! task_status($task->status) !!}
                </td>
                <td>
                    <a href="#">
                        @if ($task->assignee->name == 'Không chọn')
                            <img src="{{ asset('upload/avatar/noavatar.png') }}" class="img-circle img-xs" title="{{ $task->assignee->name }}"/>
                        @else
                            <img src="{{ asset('upload/avatar/'.$task->assignee->avatar) }}" class="img-circle img-xs" title="{{ $task->assignee->name }}">
                        @endif
                    </a>
                </td>
                <td class="text-center">
                    <ul class="icons-list">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="openModal" data-toggle="modal" data-target="#actionmodal" data-action="edit" data-id="<?=$task->id ?>"><i class="icon-pencil7"></i> Sửa  task</a></li>
                                <li class="divider"></li>
                                <li><a href="#" id="delete" data-id="<?=$task->id?>"><i class="icon-cross2"></i> Xóa</a></li>
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

