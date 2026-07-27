import Navbar from "@/Components/Navbar";
import FlashMessages from "@/Components/FlashMessages";

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-neutral-50">
            <FlashMessages />
            <Navbar />

            <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
        </div>
    );
}
