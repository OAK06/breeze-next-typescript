export default function Input({ disabled = false, className, ...props }: any) {
    return (
        <input
            disabled={disabled}
            className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
            {...props}
        />
    )
}
