<?php

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Factory;

class WithdrawalRequestApproval extends FormRequest
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
            'withdrawal_id' => 'required',
            'reference_number' => 'required',
            'channel' => 'required',
            'date_of_transfer' => 'required',
        ];
    }

}
