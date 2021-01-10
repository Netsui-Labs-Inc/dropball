<?php

namespace App\Domains\BettingEvent\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorebettingEventBettingRoundRequest extends FormRequest
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
            'quantity' => 'required|min:0|max:300',
            'note' => 'sometimes',
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'bet_admin_id.required' => __('Bet Admin is required'),
        ];
    }
}
