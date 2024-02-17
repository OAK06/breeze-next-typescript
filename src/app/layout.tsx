import '@/app/global.css'

export const metadata = {
    title: 'Laravel',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    )
}