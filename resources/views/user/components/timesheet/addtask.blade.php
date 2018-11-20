<!-- Support tickets -->
<div class="panel panel-flat">
    <div class="panel-heading">
        <h6 class="panel-title">{{$title}}
            <a class="openModal" data-toggle="modal" data-target="#actionmodal" data-action="add" data-id="{{ $info_timesheet->id }}">
                <i class="icon-add"></i>
            </a>
        </h6>

    </div>

    <div class="table-responsive">
        <table class="table text-nowrap">
            <tbody>
                <tr class="active border-double">
                    <td colspan="3">Tất cả task cho timesheet này</td>
                    <td class="text-right">
                        <span class="badge bg-blue">24</span>
                    </td>
                </tr>

                <tr>
                    <td class="text-center">
                        <h6 class="no-margin">12 <small class="display-block text-size-small no-margin">hours</small></h6>
                    </td>
                    <td>
                        <div class="media-left media-middle">
                            <a href="#" class="btn bg-teal-400 btn-rounded btn-icon btn-xs">
                                <span class="letter-icon"></span>
                            </a>
                        </div>

                        <div class="media-body">
                            <a href="#" class="display-inline-block text-default text-semibold letter-icon-title">Annabelle Doney</a>
                            <div class="text-muted text-size-small"><span class="status-mark border-blue position-left"></span> Active</div>
                        </div>
                    </td>
                    <td>
                        <a href="#" class="text-default display-inline-block">
                            <span class="text-semibold">[#1183] Workaround for OS X selects printing bug</span>
                            <span class="display-block text-muted">Chrome fixed the bug several versions ago, thus rendering this...</span>
                        </a>
                    </td>
                    <td class="text-center">
                        <a href="#"><i class="icon-cross2 text-danger"></i> Xóa</a>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>
<!-- /support tickets -->

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
            url: '/timesheet/addtask_action', // This is the url we gave in the route
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