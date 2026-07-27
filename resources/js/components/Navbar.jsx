import { Link } from "@inertiajs/react";

export default function Navbar() {
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
                        className="text-neutral-700 transition hover:text-black"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/products"
                        className="text-neutral-700 transition hover:text-black"
                    >
                        Products
                    </Link>

                    <Link
                        href="/orders"
                        className="text-neutral-700 transition hover:text-black"
                    >
                        Orders
                    </Link>

                    <Link
                        href="/membership"
                        className="text-neutral-700 transition hover:text-black"
                    >
                        Membership
                    </Link>

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="rounded-lg border border-neutral-300 px-4 py-2 text-neutral-700 transition hover:border-black hover:text-black"
                    >
                        Logout
                    </Link>

                </nav>

            </div>
        </header>
    );
}