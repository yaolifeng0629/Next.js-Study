export default function LinkLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-green-500">
            <h1>Link Layout</h1>
            {children}
        </div>
    );
}
