import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/providers/Providers";

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "BeetleJz",
  description: "A place for musicians and music lovers to share ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", publicSans.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}