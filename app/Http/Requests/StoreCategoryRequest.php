<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'min:3',
                'max:100',
            ],

            'slug' => [
                'required',
                'string',
                'min:3',
                'max:100',
                'alpha_dash',
                Rule::unique('categories'),
            ],

            'description' => [
                'nullable',
                'string',
                'max:500',
            ],

            'status' => [
                'required',
                'boolean',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Category name is required.',
            'slug.required' => 'Slug is required.',
            'slug.unique' => 'Slug already exists.',
            'slug.alpha_dash' => 'Slug may only contain letters, numbers, dashes and underscores.',
            'status.required' => 'Status is required.',
        ];
    }
}
