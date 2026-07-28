<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Services\CategoryService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function __construct(
        protected CategoryService $categoryService
    ) {
    }

    public function index(Request $request)
    {
        return Inertia::render('Category', [
            'categories' => $this->categoryService->getCategories(
                $request->search
            ),
            'filters' => [
                'search' => $request->search,
            ],
        ]);
    }

    public function store(StoreCategoryRequest $request)
    {
        $this->categoryService->create(
            $request->validated()
        );

        return back()->with(
            'success',
            'Category created successfully.'
        );
    }

    public function update(
        UpdateCategoryRequest $request,
        Category $category
    ) {
        $this->categoryService->update(
            $category,
            $request->validated()
        );

        return back()->with(
            'success',
            'Category updated successfully.'
        );
    }

    public function destroy(Category $category)
    {
        $this->categoryService->delete($category);

        return back()->with(
            'success',
            'Category deleted successfully.'
        );
    }
}