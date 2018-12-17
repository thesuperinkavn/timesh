

require('./core/libraries/jquery_ui/widgets.min');
window.dataTable = require('./plugins/tables/datatables/datatables.min');
require('./plugins/tables/datatables/extensions/natural_sort.js');
require('./plugins/forms/select2/select2.min');

var swal = require('./plugins/notifications/sweetalert2.min');
require('./plugins/forms/styling/uniform.min');
require('./core/libraries/jquery_ui/interactions.min');

/* ------------------------------------------------------------------------------
*
*  # Task list view
*
*  Specific JS code additions for task_manager_list.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */


// Create an array with the values of all the input boxes in a column
$.fn.dataTable.ext.order['dom-text'] = function (settings, col) {
    return this.api().column(col, {order:'index'}).nodes().map( function (td, i) {
        return $('input', td).val();
    });
}

 
// Create an array with the values of all the select options in a column
$.fn.dataTable.ext.order['dom-select'] = function (settings, col) {
    return this.api().column(col, {order:'index'}).nodes().map( function (td, i) {
        return $('select', td).val();
    });
}


$(function() {


    // Table setup
    // ------------------------------

    // Initialize data table
    $('.tasks-list').DataTable({

        "bDestroy": true,
        autoWidth: false,
        columnDefs: [
            {
                type: "natural",
                width: '20px',
                targets: 0
            },
            {
                visible: false,
                targets: 1
            },
            {
                width: '40%',
                targets: 2
            },
            {
                width: '10%',
                targets: 3
            },
            {
                orderDataType: 'dom-text',
                type: 'string',
                targets: 4
            },
            {
                orderDataType: 'dom-select',
                type: 'string',
                targets: 5
            },
            { 
                orderable: false,
                width: '100px',
                targets: 7
            },
            {
                width: '15%',
                targets: [4, 5, 6]
            }
        ],
        order: [[ 0, 'desc' ]],
        dom: '<"datatable-header"fl><"datatable-scroll-lg"t><"datatable-footer"ip>',
        language: {
            search: '<span>Filter:</span> _INPUT_',
            searchPlaceholder: 'Type to filter...',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
        },
        lengthMenu: [ 15, 25, 50, 75, 100 ],
        displayLength: 25,
        drawCallback: function (settings) {
            var api = this.api();
            var rows = api.rows({page:'current'}).nodes();
            var last=null;
 
            // Grouod rows
            api.column(1, {page:'current'}).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="active border-double"><td colspan="8" class="text-semibold">'+group+'</td></tr>'
                    );
 
                    last = group;
                }
            });

            // Datepicker
            $(".datepicker").datepicker({
                showOtherMonths: true,
                dateFormat: "d MM, y"
            });

            // Select2
            $('.select').select2({
                width: '150px',
                minimumResultsForSearch: Infinity
            });

            // Reverse last 3 dropdowns orientation
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        },
        preDrawCallback: function(settings) {

            // Reverse last 3 dropdowns orientation
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');

            // Destroy Select2
            $('.select').select2().select2('destroy');
        }
    });



    // External table additions
    // ------------------------------

    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
        minimumResultsForSearch: Infinity,
        width: 'auto'
    });
    
});


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
                url: '/task/action', // This is the url we gave in the route
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



    $(document).ready(function(){
        $(document).on('click', '#delete', function(e){
            
            var taskID = $(this).data('id');
            SwalDelete(taskID);
            e.preventDefault();
        });
    });
    function SwalDelete(taskID){
            
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
                    data = {id:taskID};
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });
                    $.ajax({
                        url: "/task/destroy",
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
 