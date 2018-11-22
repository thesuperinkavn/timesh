<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/notifications/jgrowl.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/ui/moment/moment.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/daterangepicker.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/anytime.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/pickadate/picker.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/pickadate/picker.date.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/pickadate/picker.time.js') }}"></script>
<script type="text/javascript" src="{{ asset('theme/assets/js/plugins/pickers/pickadate/legacy.js') }}"></script>



<script type="text/javascript">

    $(function() {
        // Time picker
        $("#anytime-time-start").AnyTime_picker({
            format: "%H:%i"
        });

        // Time picker
        $("#anytime-time-end").AnyTime_picker({
            format: "%H:%i"
        });
    });
</script>