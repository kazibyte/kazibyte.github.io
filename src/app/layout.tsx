import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SEOMetaTags from "../contexts/meta/SEOTags";
import Navbar from "@/components/ui/nav/Navbar";
import { ThemeProvider } from "next-themes";

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
      <ThemeProvider attribute="class">
      <Navbar />
          
          {children}
      </ThemeProvider>
      
         
      </body>
    </html>
  );
}
