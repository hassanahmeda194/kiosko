import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Navbar() {
    const { auth } = usePage().props;
    const user = auth.user;

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="border-b border-neutral-200 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link
                    href="/dashboard"
                    className="text-xl font-bold tracking-tight"
                >
                    Kiosko
                </Link>

                <nav className="flex items-center gap-8 text-sm font-medium">
                    <Link
                        href="/dashboard"
                        className="text-neutral-700 hover:text-black"
                    >
                        Dashboard
                    </Link>

                    {(user.role === "admin" || user.role === "staff") && (
                        <div className="relative">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-neutral-700 hover:text-black"
                            >
                                Menu Management
                            </button>

                            {menuOpen && (
                                <div className="absolute right-0 mt-3 w-56 rounded-lg border border-neutral-200 bg-white shadow-lg">
                                    <Link
                                        href="/categories"
                                        className="block px-4 py-3 hover:bg-neutral-100"
                                    >
                                        Categories
                                    </Link>
                                    <Link
                                        href="/products"
                                        className="block px-4 py-3 hover:bg-neutral-100"
                                    >
                                        Products
                                    </Link>

                                    <Link
                                        href="/variants"
                                        className="block px-4 py-3 hover:bg-neutral-100"
                                    >
                                        Product Variants
                                    </Link>

                                    <Link
                                        href="/toppings"
                                        className="block px-4 py-3 hover:bg-neutral-100"
                                    >
                                        Extra Toppings
                                    </Link>

                                    <Link
                                        href="/inventory"
                                        className="block px-4 py-3 hover:bg-neutral-100"
                                    >
                                        Inventory
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}

                    <Link
                        href="/orders"
                        className="text-neutral-700 hover:text-black"
                    >
                        Orders
                    </Link>

                    <Link
                        href="/membership"
                        className="text-neutral-700 hover:text-black"
                    >
                        Membership
                    </Link>

                    <Link
                        href="/profile"
                        className="text-neutral-700 hover:text-black"
                    >
                        Profile
                    </Link>

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="rounded-lg border border-neutral-300 px-4 py-2 hover:border-black"
                    >
                        Logout
                    </Link>
                </nav>
            </div>
        </header>
    );
}
