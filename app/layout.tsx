import Navbar from "@/components/Navbar/Navbar";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boe9.com"),

  title: {
    default: "Bumi Organic Exim | Organic Products Exporter from India",
    template: "%s | Bumi Organic Exim",
  },

  description:
    "Bumi Organic Exim is a trusted exporter of organic products, Indian spices, super foods, dehydrated products, fresh vegetables, fruits, coffee, cocoa powder, and dairy products from India.",

  keywords: [
    "Bumi Organic Exim",
    "Organic Products Exporter",
    "Indian Spices Exporter",
    "Indian Super Foods",
    "Fresh Vegetables Exporter",
    "Fresh Fruits Exporter",
    "Coffee Powder Exporter",
    "Cocoa Powder Supplier",
    "Dairy Products Exporter",
    "Organic Food Exporter India",
  ],

  authors: [{ name: "Bumi Organic Exim" }],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Bumi Organic Exim | Organic Products Exporter from India",
    description:
      "Premium organic products and agricultural exports from India.",
    url: "https://www.boe9.com",
    siteName: "Bumi Organic Exim",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // place this image in public folder
        width: 1200,
        height: 630,
        alt: "Bumi Organic Exim",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bumi Organic Exim",
    description:
      "Leading exporter of organic products and agricultural products from India.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SocialSidebar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}