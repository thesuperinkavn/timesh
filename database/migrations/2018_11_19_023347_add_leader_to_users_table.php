<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLeaderToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->integer("leader_id");
            $table->text("description")->nullable();
            $table->smallInteger('active')->default(1);
            $table->string('avatar', 128)->nullable();
            $table->smallInteger('role')->default(2);
            $table->boolean('approve')->default(true);
            $table->text('notify_accounts')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
