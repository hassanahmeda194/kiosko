import { Head } from "@inertiajs/react";
import AppLayout from "../Layouts/AppLayout";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <div>

                <h1 className="text-4xl font-bold">
                    Dashboard
                </h1>

                <p className="mt-2 text-neutral-500">
                    Welcome to the Kiosko Restaurant Management System.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-4">

                    <div className="rounded-xl border border-neutral-200 bg-white p-6">
                        <p className="text-sm text-neutral-500">
                            Total Orders
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            120
                        </h2>
                    </div>

                    <div className="rounded-xl border border-neutral-200 bg-white p-6">
                        <p className="text-sm text-neutral-500">
                            Revenue
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            $2,450
                        </h2>
                    </div>

                    <div className="rounded-xl border border-neutral-200 bg-white p-6">
                        <p className="text-sm text-neutral-500">
                            Customers
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            84
                        </h2>
                    </div>

                    <div className="rounded-xl border border-neutral-200 bg-white p-6">
                        <p className="text-sm text-neutral-500">
                            Memberships
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            28
                        </h2>
                    </div>

                </div>

            </div>
        </>
    );
}

Dashboard.layout = (page) => <AppLayout>{page}</AppLayout>;