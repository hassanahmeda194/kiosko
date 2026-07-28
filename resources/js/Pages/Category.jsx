import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import Button from "@/Components/Button";
import Input from "@/Components/Input";

export default function Category() {
    const { categories, filters } = usePage().props;

    const [editing, setEditing] = useState(null);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: "",
        slug: "",
        description: "",
        status: true,
    });

    function submit(e) {
        e.preventDefault();

        if (editing) {
            put(`/categories/${editing.id}`, {
                onSuccess: () => {
                    reset();
                    setEditing(null);
                },
            });

            return;
        }

        post("/categories", {
            onSuccess: () => reset(),
        });
    }

    function editCategory(category) {
        setEditing(category);

        setData({
            name: category.name,
            slug: category.slug,
            description: category.description ?? "",
            status: category.status,
        });
    }

    function cancelEdit() {
        setEditing(null);

        reset();
    }

    return (
        <>
            <Head title="Categories" />

            <div>
                <h1 className="text-3xl font-bold">Categories</h1>

                <p className="mt-2 text-neutral-500">
                    Manage restaurant categories.
                </p>

                <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6">
                    <form onSubmit={submit} className="space-y-5">
                        <Input
                            label="Name"
                            value={data.name}
                            error={errors.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />

                        <Input
                            label="Slug"
                            value={data.slug}
                            error={errors.slug}
                            onChange={(e) => setData("slug", e.target.value)}
                        />

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Description
                            </label>

                            <textarea
                                rows="3"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-black"
                            />

                            {errors.description && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.checked)
                                }
                            />

                            <span>Active</span>
                        </div>

                        <div className="flex gap-3">
                            <Button type="submit" disabled={processing}>
                                {editing
                                    ? "Update Category"
                                    : "Create Category"}
                            </Button>

                            {editing && (
                                <Button
                                    type="button"
                                    onClick={cancelEdit}
                                    className="bg-gray-200 text-black hover:bg-gray-300"
                                >
                                    Cancel
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-6">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Categories</h2>

                    <input
                        type="text"
                        placeholder="Search..."
                        defaultValue={filters.search ?? ""}
                        onChange={(e) =>
                            router.get(
                                "/categories",
                                {
                                    search: e.target.value,
                                },
                                {
                                    preserveState: true,
                                    replace: true,
                                },
                            )
                        }
                        className="w-64 rounded-lg border border-neutral-300 px-4 py-2 outline-none focus:border-black"
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="py-3 ">Name</th>
                                <th className="">Slug</th>
                                <th className="">Status</th>
                                <th className="t">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {categories.data.length ? (
                                categories.data.map((category) => (
                                    <tr key={category.id} className="border-b">
                                        <td className="py-4">
                                            {category.name}
                                        </td>

                                        <td>{category.slug}</td>

                                        <td>
                                            {category.status ? (
                                                <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-700">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-700">
                                                    Inactive
                                                </span>
                                            )}
                                        </td>

                                        <td>
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() =>
                                                        editCategory(category)
                                                    }
                                                    className="rounded border border-black px-3 py-1 text-sm"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        if (
                                                            confirm(
                                                                "Delete this category?",
                                                            )
                                                        ) {
                                                            router.delete(
                                                                `/categories/${category.id}`,
                                                            );
                                                        }
                                                    }}
                                                    className="rounded border border-black px-3 py-1 text-sm"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="py-8 text-center text-neutral-500"
                                    >
                                        No categories found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

Category.layout = (page) => <AppLayout>{page}</AppLayout>;
