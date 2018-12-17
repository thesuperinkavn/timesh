<?php 
namespace App\Services;
use App\Model\Setting;
use App\User;
use Illuminate\Support\Facades\Mail;
use App\Services\Interfaces\EmailInterface;
class EmailService implements EmailInterface
{
   
    public function get_starttime()
    {
        try {
            return Setting::first()->timesheet_start;
        } catch (\Throwable $th) {
            //throw $th;
            return '17:00:00';
        }
    }

    public function get_endtime()
    {
        try {
            return Setting::first()->timesheet_end;
        } catch (\Throwable $th) {
            //throw $th;
            return '19:00:00';
        }
    }
    
    public function sendEmailReminderToLeader($id, $type, $release_date)
    {
        //$id = $request->input('id');
        $user = User::findOrFail($id);
        $leader = $user->leader;
        if($leader->name != 'Không có quản lý') {
            $to_name = $leader->name;
            $to_email = $leader->email;
    
            $title ='';
    
            switch ($type) {
                case '1':
                    $title = $user->name.' vừa tạo timesheet mới cho ngày '.$release_date;
                    break;
                
                case '2':
                    $title = $user->name.' vừa sửa timesheet ngày '.$release_date;
                    break;
            }
    
            $data = array('name'=>$leader->name, "body" => "Đây là thông báo tự động");

            try {
                Mail::send('user.components.email.index', $data, function($message) use ($to_name, $to_email, $title, $user) {
                    $message->to($to_email, $to_name)
                            ->subject($title);
                    $message->from('timesheetdms@gmail.com',$user->name);
                });
                $this->sendEmailRemenderToOthers($id, $type, $release_date);
                return 0;
            } catch (\Throwable $th) {
                return 1;
            }
        }
    }

    public function sendEmailRemenderToOthers($id, $type, $release_date)
    {
        $user = User::findOrFail($id);
        $notilist = $user->notify_accounts;
        if($notilist != NULL) {
            $list = explode(',', $notilist);
            foreach ($list as $key => $value) {
                $u = User::findOrFail($value);
                $to_name = $u->name;
                $to_email = $u->email;

                $title ='';

                switch ($type) {
                    case '1':
                        $title = $user->name.' vừa tạo timesheet mới cho ngày '.$release_date;
                        break;
                    
                    case '2':
                        $title = $user->name.' vừa sửa timesheet ngày '.$release_date;
                        break;
                }

                $data = array('name'=>$u->name, "body" => "Đây là thông báo tự động");

                try {
                    //code...
                    Mail::send('user.components.email.index', $data, function($message) use ($to_name, $to_email, $title, $user) {
                        $message->to($to_email, $to_name)
                                ->subject($title);
                        $message->from('timesheetdms@gmail.com',$user->name);
                    });
                } catch (\Throwable $th) {
                    //throw $th;
                }
            }
        }
    }
    
}
?>