<?php 
    function pre($list,$exit=true){
        echo "<pre>";
        print_r($list);
        
        if($exit){
            die();
        }
    }
    
    function task_priority($priority)
    {
        switch ($priority) {
            case '1':
                return "<div class=\"label label-danger\">Cao nhất</div>";
                break;
            case '2':
                return "<div class=\"label label-info\">Cao</div>";
                break;
            case '3':
                return "<div class=\"label label-primary\">Bình thường</div>";
                break;                
            case '4':
                return "<div class=\"label label-success\">Cao nhất</div>";
                break;
            default:
                # code...
                break;
        }
    }

    function task_status($status)
    {
        switch ($status) {
            case '1':
                return 'Mở';
                break;
            case '2':
                return 'Bị giữ';
                break;
            case '3':
                return 'Đã xong';
                break;        
            case '4':
                return 'Trùng lặp';
                break;
            case '5':
                return 'Không hợp lệ';
                break;
            case '6':
                return 'Đóng';
                break;
            default:
                # code...
                break;
        }
    }

    function timesheet_status($status)
    {
        switch ($status) {
            case '0':
                return "<div class=\"label label-danger\">Chưa duyệt</div>";
                break;
            
            default:
                return "<div class=\"label label-success\">Đã duyệt</div>";
                break;
        }
    }

?>