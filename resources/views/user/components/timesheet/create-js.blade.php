<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/notifications/jgrowl.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/ui/moment/moment.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/daterangepicker.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/anytime.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/pickadate/picker.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/pickadate/picker.date.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/pickadate/picker.time.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/pickadate/legacy.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/forms/select2/select2.min.js') }}"></script>




<script type="text/javascript">
    
    $(function() {
        // Checkboxes/radios (Uniform)
        // ------------------------------
        // Default initialization

        // Fixed width. Single select
        $('.select-fixed-single').select2({
            minimumResultsForSearch: 2,
            width: 350
        });
        
            
        // Pick-a-date picker
        // ------------------------------


        // Basic options
        $('.pickadate').pickadate({
            today: 'Hôm nay',
            close: 'Đóng',
            clear: 'Xóa',
        });

    });
</script>