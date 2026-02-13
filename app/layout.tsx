// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsappButton from "../components/WhatsappButton";
import CallButton from "../components/CallButton";
import ChatbotLoader from "../components/ChatbotLoader";
import Script from "next/script";

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
    url: "https://www.hubtowntradecentre.com",
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHQ6ZWLJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}

        <WhatsappButton />
        <CallButton />
        <ChatbotLoader />

        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WHQ6ZWLJ');`,
          }}
        />
      </body>
    </html>
  );
}