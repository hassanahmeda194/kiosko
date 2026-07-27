export default function Button({
    type = "button",
    children,
    className = "",
    disabled = false,
    ...props
}) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-black
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition
                duration-200
                hover:bg-neutral-800
                focus:outline-none
                focus:ring-2
                focus:ring-black
                disabled:cursor-not-allowed
                disabled:opacity-50
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}
