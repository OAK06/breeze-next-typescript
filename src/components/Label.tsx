export default function Label({ className, children, ...props }: any) {
    return (
        <label
            className={`${className} block font-medium text-sm text-gray-700`}
            {...props}>
            {children}
        </label>
    )
}