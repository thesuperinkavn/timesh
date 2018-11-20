<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

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

        // // Make a custom blade directive:
        // Blade::directive('shout', function ($string) {
        // return trim(strtoupper($string), '(\'\')');
        // });

        // // And another one for good measure:
        // Blade::directive('customLink', function () {
        //     return '<a href="#">Custom Link</a>';
        // });
        
        // Priority:
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
    }
}
