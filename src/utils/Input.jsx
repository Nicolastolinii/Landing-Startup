
export const Input = ({ type,id, placeholder, label }) => {
    return (
        <>
            <label htmlFor={id} className="text-sm font-medium">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="flex h-10 w-full border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
            />
        </>
    )
}
