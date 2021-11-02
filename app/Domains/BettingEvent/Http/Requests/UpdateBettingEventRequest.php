<?php

namespace App\Domains\BettingEvent\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBettingEventRequest extends FormRequest
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
            'name' => 'required',
            'description' => 'required',
            'bet_admin_id' => 'required|exists:users,id',
            'dealer_admin_id'=> 'sometimes|nullable|exists:users,id',
            'schedule' => 'required|unique:betting_events,schedule,'.$this->bettingEvent->id,
            'stream_url' => 'sometimes',
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
