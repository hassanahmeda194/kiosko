import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <>
            <Head title="Login" />

            <div className="flex min-h-screen items-center justify-center bg-white px-6">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-black">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-neutral-500">
                        Sign in to continue.
                    </p>

                    <form onSubmit={submit} className="mt-8 space-y-5">
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            value={data.email}
                            error={errors.email}
                            placeholder="john@example.com"
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            value={data.password}
                            error={errors.password}
                            placeholder="••••••••"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={processing}
                        >
                            {processing ? "Signing In..." : "Login"}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-neutral-500">
                        Don't have an account?
                        <Link
                            href="/register"
                            className="ml-1 font-medium text-black hover:underline"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
