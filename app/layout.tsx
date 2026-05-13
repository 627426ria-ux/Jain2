import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  style: ['italic', 'normal']
});

export const metadata: Metadata = {
  title: "Jain | Premium Digital Studio",
  description: "Curated digital experiences built with precision.",
};

// Fixed the 'any' type error by adding { children: React.ReactNode }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-[#0a0a0a]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}