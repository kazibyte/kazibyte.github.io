import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BgGradient from "@/components/common/BgGradient";
import SEOMetaTags from "../contexts/meta/SEOTags";
import Navbar from "@/components/ui/nav/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SEOMetaTags.title,
  description: SEOMetaTags.description,
  keywords: SEOMetaTags.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
          <BgGradient />
          <div className="text-black dark:text-white"> {children}</div>
      </body>
    </html>
  );
}
