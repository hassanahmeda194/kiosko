import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post("/register", {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <Head title="Register" />

            <div className="flex min-h-screen items-center justify-center bg-white px-6">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-black">
                        Create Account
                    </h1>

                    <p className="mt-2 text-sm text-neutral-500">
                        Create your account to continue.
                    </p>

                    <form onSubmit={submit} className="mt-8 space-y-5">
                        <Input
                            label="Full Name"
                            name="name"
                            type="text"
                            value={data.name}
                            error={errors.name}
                            placeholder="John Doe"
                            onChange={(e) => setData("name", e.target.value)}
                        />

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

                        <Input
                            label="Confirm Password"
                            name="password_confirmation"
                            type="password"
                            value={data.password_confirmation}
                            error={errors.password_confirmation}
                            placeholder="••••••••"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={processing}
                        >
                            {processing
                                ? "Creating Account..."
                                : "Create Account"}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-neutral-500">
                        Already have an account?
                        <Link
                            href="/login"
                            className="ml-1 font-medium text-black hover:underline"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
