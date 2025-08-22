import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsappButton from "../components/WhatsappButton";
import CallButton from "../components/CallButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hubtown Trade Centre - Premium Commercial Spaces in Mehsana, Gujarat",
  description:
    "Discover premium commercial spaces, shops, offices, and retail outlets at Hubtown Trade Centre, Mehsana. Strategic location with modern amenities for your business success.",
  keywords:
    "Hubtown Trade Centre, commercial spaces Mehsana, shops offices Gujarat, retail outlets Mehsana, business spaces Gujarat, commercial property Mehsana",
  authors: [{ name: "Hubtown Trade Centre" }],
  creator: "Hubtown Trade Centre",
  publisher: "Hubtown Trade Centre",
  robots: "index, follow",
  openGraph: {
    title: "Hubtown Trade Centre - Premium Commercial Spaces in Mehsana",
    description:
      "Premium commercial spaces with modern amenities in the heart of Mehsana, Gujarat",
    url: "https://hubtown-trade-centre.com",
    siteName: "Hubtown Trade Centre",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubtown Trade Centre - Premium Commercial Spaces",
    description:
      "Premium commercial spaces with modern amenities in Mehsana, Gujarat",
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
        {/* Floating Buttons */}
        <WhatsappButton />
        <CallButton />
      </body>
    </html>
  );
}
