<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminUsersRequest extends FormRequest
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
            'first_name'    => 'required|string|max:255',
            'last_name'     => 'required|string|max:255',
            'email'         => 'required|string|email|max:255|unique:users',
            'user_role'     => 'required',
            'is_active'     => 'required',
            'password'      => 'required|string|min:8|max:255|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'required|min:8',
            'photo' => 'mimes:png,jpg',
        ];
    }
}
