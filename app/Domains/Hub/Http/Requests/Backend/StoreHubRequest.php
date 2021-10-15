<?php

namespace App\Domains\Hub\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreHubRequest.
 */
class StoreHubRequest extends FormRequest
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
            'name'                => ['required', 'max:100'],
            'admin_id'            => ['required','exists:users,id'],
            'whole_number_rate'   => 'required',
            'decimal_number_rate' => 'required'
        ];
    }

}
