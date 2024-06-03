import './globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className="border-red-600 border-2">{children}</body>
        </html>
    );
}
