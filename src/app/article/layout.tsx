export default function ArticleLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className="border-blue-600 border-2">{children}</body>
        </html>
    );
}
