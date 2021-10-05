<?php

namespace App\Domains\Auth\Http\Requests\Backend\User;

use App\Domains\Auth\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use LangleyFoxall\LaravelNISTPasswordRules\PasswordRules;

/**
 * Class StoreUserRequest.
 */
class StoreSubAgentRequest extends FormRequest
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
            'name' => ['required', 'max:100'],
            'email' => ['required', 'max:255', 'email', Rule::unique('users')],
            'mobile' => ['required', 'max:100', Rule::unique('users')],
            'referral_id' => ['required', 'max:100', Rule::unique('users')],
            'password' => ['max:100'],
            'commission_rate' => 'required'
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'roles.*.exists' => __('One or more roles were not found or are not allowed to be associated with this user type.'),
            'permissions.*.exists' => __('One or more permissions were not found or are not allowed to be associated with this user type.'),
        ];
    }
}
