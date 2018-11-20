<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTimesheetDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timesheet_details', function (Blueprint $table) {
            $table->increments('id');
            $table->text('content')->nullable();
            $table->integer('duration')->default(0);
            $table->integer('timesheet_id')->unsigned();
            $table->foreign('timesheet_id')->references('id')->on('timesheets'); 
            $table->integer('task_id')->unsigned()->nullable();
            $table->foreign('task_id')->references('id')->on('tasks'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('timesheet_details');
    }
}
