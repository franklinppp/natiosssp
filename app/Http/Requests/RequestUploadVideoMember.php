<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use App\Models\User;

class RequestUploadVideoMember extends FormRequest
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
        // $request = $this->all();
        // $file = $request['myfile'];
        $rules = [
            'myfile' => 'required|mimes:mp4,mov,qt,avi,flv'
        ];
        return $rules;
    }

    public function response(array $errors)
    {
        return new JsonResponse(['status'=> 403, 'errors'=>$errors]);
    }
}