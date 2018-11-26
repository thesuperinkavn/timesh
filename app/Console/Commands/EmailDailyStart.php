<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\Timesheet;
use App\User;
use DB;
use Mail;

class EmailDailyStart extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'daily:emailstart';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        $users = $this->not_timesheet_today();

        foreach ($users as $user) {
            $u = User::findOrFail($user->id);
            $leader = $u->leader;

            $to_name = $user->name;
            $to_email = $user->email;
            $title = $user->name.' chưa tạo timesheet cho ngày hôm nay';
                
            $data = array('name'=>$user->name, "body" => "Đây là thông báo tự động");

            Mail::send('user.components.email.index', $data, function($message) use ($to_name, $to_email, $title) {
                $message->to($to_email, $to_name)
                        ->subject($title);
                $message->from('thesuperinkavn@gmail.com','Hệ thống timesheet');
            });
        }
    }

    public function not_timesheet_today()
    {
        $users = DB::select(
            "SELECT users.id,users.name,users.email 
            FROM users 
            WHERE id 
            NOT IN (
                SELECT users.id 
                FROM users 
                INNER JOIN timesheets 
                ON users.id = timesheets.created_by 
                WHERE release_date  = curdate())
            ");
        return $users;
    }
}
