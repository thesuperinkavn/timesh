<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Services\Interfaces\TimesheetInterface;
use App\Services\TimesheetService;

use App\Services\Interfaces\TaskInterface;
use App\Services\TaskService;

use App\Services\Interfaces\UserInterface;
use App\Services\UserService;

use Blade;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
        Blade::directive('priority', function ($priority) {
            switch ($priority) {
                case '1':
                    return "<?php echo '<div class=\"label label-danger\">Cao nhất</div>'; ?>";
                    break;
                case '2':
                    return "<?php echo '<div class=\"label label-info\">Cao</div>'; ?>";
                    break;
                case '3':
                    return "<?php echo '<div class=\"label label-primary\">Bình thường</div>'; ?>";
                    break;                
                case '4':
                    return "<?php echo '<div class=\"label label-success\">Cao nhất</div>'; ?>";
                    break;
                default:
                    # code...
                    break;
            }
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind(TimesheetInterface::class, TimesheetService::class);
        $this->app->bind(TaskInterface::class, TaskService::class);
        $this->app->bind(UserInterface::class, UserService::class);
    }
}
