import type { Metadata } from "next";
import Home from "@/components/Home/Home";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Bumi Organic Exim | Organic Products Exporter from India",
  description:
    "Bumi Organic Exim is a trusted exporter of organic products, Indian spices, super foods, fresh vegetables, fruits, coffee, cocoa powder, and dairy products from India.",

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

  alternates: {
    canonical: "https://www.boe9.com",
  },

  openGraph: {
    title: "Bumi Organic Exim | Organic Products Exporter from India",
    description:
      "Premium organic products and agricultural exports from India.",
    url: "https://www.boe9.com",
    siteName: "Bumi Organic Exim",
    images: [
      {
        url: "/og-image.jpg", // Put a 1200×630 image in public folder
        width: 1200,
        height: 630,
        alt: "Bumi Organic Exim",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bumi Organic Exim",
    description:
      "Leading exporter of organic products, spices, and agricultural goods from India.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Home />
      <Footer />
    </>
  );
}