<?php

namespace App\Domains\BettingEvent\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJackpotRequest extends FormRequest
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
            'betting_round_id' => 'required|exists:betting_rounds,id',
        ];
    }
}
