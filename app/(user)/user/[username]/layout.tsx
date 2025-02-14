import UserNavbar from "@/components/user/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";


export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: {
        default: DATA.name,
        template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    openGraph: {
        title: `${DATA.name}`,
        description: DATA.description,
        url: DATA.url,
        siteName: `${DATA.name}`,
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: `${DATA.name}`,
        card: "summary_large_image",
    },
    verification: {
        google: "",
        yandex: "",
    },
};

export default function UserRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={cn(
                "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6"
            )}
        >
            {children}
            <UserNavbar />
        </div>
    );
}
