import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apply.jainsoft.co.in"),
  title: "JAIN School of Future Technology | Work-Integrated BCA",
  description:
    "India's first Work-Integrated BCA Program. Earn a UGC-recognised BCA degree plus 2 years of real industry experience while you study, with mentorship from 25+ industry leaders.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "JAIN School of Future Technology | Work-Integrated BCA",
    description:
      "Earn a UGC-recognised BCA degree + 2 years of real industry experience while you study.",
    url: "https://apply.jainsoft.co.in",
    siteName: "JAIN School of Future Technology",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAIN School of Future Technology | Work-Integrated BCA",
    description:
      "Earn a UGC-recognised BCA degree + 2 years of real industry experience while you study.",
  },
  verification: {
    google: "cx8bwFmWfY4L4KGe_603R47NPulyk_Bs6aSoPtKePK4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-[#0a0a0a]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}