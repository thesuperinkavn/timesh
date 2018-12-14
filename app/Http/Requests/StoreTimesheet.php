<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\Dateunique;
use App\Rules\Righttime;

class StoreTimesheet extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'           => 'required',
            'release_date' => ['required', new Dateunique, new Righttime]
        ];
    }

    public function messages()
    {
        return[
            'name.required' => 'Bạn phải nhập tên.',
            'release_date.required' => 'Bạn phải chọn ngày.'
        ];
    }
}
