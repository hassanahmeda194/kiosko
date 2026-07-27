export default function Input({
    label,
    error,
    className = "",
    ...props
}) {
    return (
        <div className="space-y-2">

            {label && (
                <label className="block text-sm font-medium text-neutral-700">
                    {label}
                </label>
            )}

            <input
                {...props}
                className={`
                    w-full
                    rounded-lg
                    border
                    border-neutral-300
                    bg-white
                    px-4
                    py-3
                    text-sm
                    text-black
                    outline-none
                    transition
                    duration-200
                    placeholder:text-neutral-400
                    focus:border-black
                    focus:ring-2
                    focus:ring-black/10
                    ${error ? "border-red-500" : ""}
                    ${className}
                `}
            />

            {error && (
                <p className="text-sm text-red-500">
                    {error}
                </p>
            )}

        </div>
    );
}