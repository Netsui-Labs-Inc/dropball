<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Factory;

class WithdrawalRequest extends FormRequest
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
            'amount' => 'required|numeric|gt:' . config('minimum_withdrawal'),
            'channel' => 'required',
            'details' => 'required',
            'note' => 'sometimes',
            'password' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'gt:' . config('minimum_withdrawal') => 'Please enter minimum amount of ' . config('minimum_withdrawal') . 'Pesos.'
        ];
    }
}
