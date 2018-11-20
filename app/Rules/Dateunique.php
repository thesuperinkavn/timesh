<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Model\Timesheet;

class Dateunique implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        //
        $time = strtotime($value);
        $newformat = date('Y-m-d',$time);

        return (!Timesheet::where('release_date', '=', $newformat)->exists());
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Ngày này đã có timesheet rồi.';
    }
}
