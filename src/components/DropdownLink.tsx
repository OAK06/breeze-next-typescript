import Link from 'next/link'
import { Menu } from '@headlessui/react'

export default function DropdownLink({ children, ...props }: any) {
    return <Menu.Item>
        {({ active }) => (
            <Link
                {...props}
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}>
                {children}
            </Link>
        )}
    </Menu.Item>
}

export function DropdownButton({ children, ...props }: any) {
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                        active ? 'bg-gray-100' : ''
                    } focus:outline-none transition duration-150 ease-in-out`}
                    {...props}>
                    {children}
                </button>
            )}
        </Menu.Item>
    )
}