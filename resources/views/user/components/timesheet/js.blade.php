<script type="text/javascript" src="{{ asset('theme/assets/js/core/libraries/jquery_ui/widgets.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/tables/datatables/datatables.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/tables/datatables/extensions/natural_sort.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/forms/select2/select2.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/notifications/sweetalert2.min.js') }}"></script>

<script type="text/javascript" src="{{ asset('theme/assets/js/pages/tasks_list.js') }}"></script>


<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/ui/moment/moment.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/daterangepicker.js') }}"></script>


<script>
/* ------------------------------------------------------------------------------
*
*  # Date and time pickers
*
*  Specific JS code additions for picker_date.html page
*
*  Version: 1.1
*  Latest update: Aug 10, 2016
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Date range picker
    // ------------------------------

    // Basic initialization
    $('.daterange-basic').daterangepicker({
        applyClass: 'bg-slate-600',
        cancelClass: 'btn-default'
    });


    // Display week numbers
    $('.daterange-weeknumbers').daterangepicker({
        showWeekNumbers: true,
        applyClass: 'bg-slate-600',
        cancelClass: 'btn-default'
    });


    // Button class options
    $('.daterange-buttons').daterangepicker({
        applyClass: 'btn-success',
        cancelClass: 'btn-danger'
    });


    // Display time picker
    $('.daterange-time').daterangepicker({
        timePicker: true,
        applyClass: 'bg-slate-600',
        cancelClass: 'btn-default',
        locale: {
            format: 'MM/DD/YYYY h:mm a'
        }
    });


    // Show calendars on left
    $('.daterange-left').daterangepicker({
        opens: 'left',
        applyClass: 'bg-slate-600',
        cancelClass: 'btn-default'
    });


    // Single picker
    $('.daterange-single').daterangepicker({ 
        singleDatePicker: true
    });


    // Display date dropdowns
    $('.daterange-datemenu').daterangepicker({
        showDropdowns: true,
        opens: "left",
        applyClass: 'bg-slate-600',
        cancelClass: 'btn-default'
    });


    // 10 minute increments
    $('.daterange-increments').daterangepicker({
        timePicker: true,
        opens: "left",
        applyClass: 'bg-slate-600',
        cancelClass: 'btn-default',
        timePickerIncrement: 10,
        locale: {
            format: 'MM/DD/YYYY h:mm a'
        }
    });


    // Localization
    $('.daterange-locale').daterangepicker({
        applyClass: 'bg-slate-600',
        cancelClass: 'btn-default',
        opens: "left",
        ranges: {
            'Сегодня': [moment(), moment()],
            'Вчера': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Последние 7 дней': [moment().subtract(6, 'days'), moment()],
            'Последние 30 дней': [moment().subtract(29, 'days'), moment()],
            'Этот месяц': [moment().startOf('month'), moment().endOf('month')],
            'Прошедший месяц': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        locale: {
            applyLabel: 'Вперед',
            cancelLabel: 'Отмена',
            startLabel: 'Начальная дата',
            endLabel: 'Конечная дата',
            customRangeLabel: 'Выбрать дату',
            daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт','Сб'],
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            firstDay: 1
        }
    });


    //
    // Pre-defined ranges and callback
    //

    // Initialize with options
    $('.daterange-predefined').daterangepicker(
        {
            startDate: moment().subtract(29, 'days'),
            endDate: moment(),
            minDate: '01/01/2014',
            maxDate: '12/31/2016',
            dateLimit: { days: 60 },
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            applyClass: 'btn-small bg-slate',
            cancelClass: 'btn-small btn-default'
        },
        function(start, end) {
            $('.daterange-predefined span').html(start.format('MMMM D, YYYY') + ' &nbsp; - &nbsp; ' + end.format('MMMM D, YYYY'));
            $.jGrowl('Date range has been changed', { header: 'Update', theme: 'bg-primary', position: 'center', life: 1500 });
        }
    );

    // Display date format
    $('.daterange-predefined span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' &nbsp; - &nbsp; ' + moment().format('MMMM D, YYYY'));


    //
    // Inside button
    //

    // Initialize with options
    $('.daterange-ranges').daterangepicker(
        {
            startDate: moment().subtract(29, 'days'),
            endDate: moment(),
            minDate: '01/01/2012',
            maxDate: '12/31/2016',
            dateLimit: { days: 60 },
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            applyClass: 'btn-small bg-slate-600',
            cancelClass: 'btn-small btn-default'
        },
        function(start, end) {
            $('.daterange-ranges span').html(start.format('MMMM D, YYYY') + ' &nbsp; - &nbsp; ' + end.format('MMMM D, YYYY'));
        }
    );

    // Display date format
    $('.daterange-ranges span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' &nbsp; - &nbsp; ' + moment().format('MMMM D, YYYY'));


    
    
});

</script>