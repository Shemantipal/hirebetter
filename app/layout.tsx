import type { Metadata } from "next";
import { Inter, Schoolbell } from "next/font/google";
import "./globals.css";

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
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${schoolbell.variable} w-screen h-screen`}>
        {children}
      </body>
    </html>
  );
}
