<?php

namespace App\Domains\Auth\Http\Requests\Backend\User;

use App\Domains\Auth\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use LangleyFoxall\LaravelNISTPasswordRules\PasswordRules;

/**
 * Class StoreUserRequest.
 */
class UpdateAgentRequest extends FormRequest
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
            'email' => ['required', 'max:255', 'email', Rule::unique('users')->ignore($this->agent)],
            'mobile' => ['required', 'max:100', Rule::unique('users')->ignore($this->agent)],
            'hub_id' => ['exists:hubs,id'],
            'whole_number_rate' => 'required',
            'decimal_number_rate' => 'required',
            'referral_id' => ['required', 'max:100', Rule::unique('users')->ignore($this->agent)],
            'password' => ['max:100'],
            'referred_by' => 'required',
            'active' => ['sometimes', 'in:1'],
            'email_verified' => ['sometimes', 'in:1'],
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
