<?php

namespace App\Services;

use App\Models\Category;
use Illuminate\Support\Str;

class CategoryService
{
    public function getCategories(?string $search = null)
    {
        return Category::query()
            ->when($search, function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('slug', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();
    }

    public function create(array $data): Category
    {
        $data['slug'] = Str::slug($data['slug']);
        return Category::create($data);
    }

    public function update(Category $category, array $data): Category
    {
        $data['slug'] = Str::slug($data['slug']);
        $category->update($data);
        return $category;
    }

    public function delete(Category $category): void
    {
        $category->delete();
    }
}
