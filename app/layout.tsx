import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

// Load Inter font
const inter = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrainWell",
  description:
    "A platform to improve mental well-being through journaling, meditation, and habit tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`pattern antialiased`}>
        <Toaster position="top-right" richColors />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
