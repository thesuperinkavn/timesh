<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFixToTimesheetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('timesheets', function (Blueprint $table) {
            //
            $table->renameColumn('relase_date', 'release_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('timesheets', function (Blueprint $table) {
            //
            $table->renameColumn('release_date', 'relase_date');
        });
    }
}
