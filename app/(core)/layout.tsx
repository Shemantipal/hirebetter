import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";

export default function CoreRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={cn("min-h-screen antialiased mx-auto")}>
            {children}
            <Navbar />
        </div>
    );
}