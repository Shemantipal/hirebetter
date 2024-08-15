import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { Inter, Schoolbell } from "next/font/google";
import { cn } from "@nextui-org/react";
import { SITE_METADATA } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.url),
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.title}`,
  },
  description: SITE_METADATA.description,
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.url,
    siteName: `${SITE_METADATA.title}`,
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
    title: `@abbhishekstwt`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

const schoolbell = Schoolbell(
  {
    subsets: ["latin"],
    weight: "400",
    variable: "--font-schoolbell",
  }
);

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.variable,
        schoolbell.variable,
        inter.className,
      )}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={2}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
