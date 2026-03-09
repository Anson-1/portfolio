import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiyang Xu — Data Scientist & Quant Developer",
  description:
    "Portfolio of a Big Data Technology MSc student at HKUST, specializing in ML, quantitative finance, and data engineering.",
  openGraph: {
    title: "Shiyang Xu — Data Scientist & Quant Developer",
    description:
      "Portfolio of a Big Data Technology MSc student at HKUST, specializing in ML, quantitative finance, and data engineering.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiyang Xu — Data Scientist & Quant Developer",
    description:
      "Portfolio of a Big Data Technology MSc student at HKUST, specializing in ML, quantitative finance, and data engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
