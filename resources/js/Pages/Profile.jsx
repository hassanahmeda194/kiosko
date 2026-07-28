import { Head, useForm, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

export default function Profile() {
    const { auth } = usePage().props;
    const user = auth.user;

    const profileForm = useForm({
        name: user.name,
        email: user.email,
    });

    const passwordForm = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    function updateProfile(e) {
        e.preventDefault();

        profileForm.put("/profile");
    }

    function updatePassword(e) {
        e.preventDefault();

        passwordForm.put("/profile/password", {
            onSuccess: () =>
                passwordForm.reset(
                    "current_password",
                    "password",
                    "password_confirmation",
                ),
        });
    }

    return (
        <>
            <Head title="Profile" />

            <div>
                <h1 className="text-4xl font-bold">Profile</h1>

                <p className="mt-2 text-neutral-500">
                    Manage your account settings.
                </p>

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    {/* Profile Card */}

                    <div className="rounded-xl border border-neutral-200 bg-white p-8">
                        <h2 className="text-xl font-semibold">
                            Personal Information
                        </h2>

                        <p className="mt-1 text-sm text-neutral-500">
                            Update your personal details.
                        </p>

                        <form
                            onSubmit={updateProfile}
                            className="mt-8 space-y-5"
                        >
                            <Input
                                label="Full Name"
                                name="name"
                                value={profileForm.data.name}
                                error={profileForm.errors.name}
                                onChange={(e) =>
                                    profileForm.setData("name", e.target.value)
                                }
                            />

                            <Input
                                label="Email Address"
                                name="email"
                                type="email"
                                value={profileForm.data.email}
                                error={profileForm.errors.email}
                                onChange={(e) =>
                                    profileForm.setData("email", e.target.value)
                                }
                            />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={profileForm.processing}
                            >
                                {profileForm.processing
                                    ? "Saving..."
                                    : "Save Changes"}
                            </Button>
                        </form>
                    </div>

                    {/* Password Card */}

                    <div className="rounded-xl border border-neutral-200 bg-white p-8">
                        <h2 className="text-xl font-semibold">
                            Change Password
                        </h2>

                        <p className="mt-1 text-sm text-neutral-500">
                            Update your account password.
                        </p>

                        <form
                            onSubmit={updatePassword}
                            className="mt-8 space-y-5"
                        >
                            <Input
                                label="Current Password"
                                type="password"
                                name="current_password"
                                value={passwordForm.data.current_password}
                                error={passwordForm.errors.current_password}
                                onChange={(e) =>
                                    passwordForm.setData(
                                        "current_password",
                                        e.target.value,
                                    )
                                }
                            />

                            <Input
                                label="New Password"
                                type="password"
                                name="password"
                                value={passwordForm.data.password}
                                error={passwordForm.errors.password}
                                onChange={(e) =>
                                    passwordForm.setData(
                                        "password",
                                        e.target.value,
                                    )
                                }
                            />

                            <Input
                                label="Confirm Password"
                                type="password"
                                name="password_confirmation"
                                value={passwordForm.data.password_confirmation}
                                onChange={(e) =>
                                    passwordForm.setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                            />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={passwordForm.processing}
                            >
                                {passwordForm.processing
                                    ? "Updating..."
                                    : "Update Password"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

Profile.layout = (page) => <AppLayout>{page}</AppLayout>;
