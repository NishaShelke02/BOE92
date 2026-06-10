import type { Metadata } from "next";
import AboutUs from "@/components/About/About";

export const metadata: Metadata = {
  title: "About BOE9 Export Import | Indian Organic, Spices & Agri Exporter",
  description:
    "BOE9 Export Import is a trusted Indian exporter of organic products, spices, dehydrated vegetables, fresh fruits, coffee, cocoa powder, and dairy products. Serving importers across Middle East, Europe, Asia, Africa & North America.",
  keywords: [
    "Indian organic products exporter",
    "NPOP certified organic export India",
    "Indian spices exporter",
    "dehydrated vegetables supplier India",
    "fresh fruits vegetables export India",
    "coffee cocoa powder exporter India",
    "dairy products export India",
    "agricultural commodities India",
    "BOE9 Export Import",
    "bulk food export India",
  ],
  openGraph: {
    title: "About BOE9 Export Import | Indian Organic & Spice Exporter",
    description:
      "BOE9 Export Import — trusted Indian exporter of organic foods, spices, fresh produce, coffee, dairy and agri products. Serving global importers with quality and transparency.",
    url: "https://www.boe9.com/about",
    siteName: "BOE9 Export Import",
    images: [
      {
        url: "https://www.boe9.com/images/about.png",
        width: 1200,
        height: 630,
        alt: "BOE9 Export Import — Indian Organic & Agri Products Exporter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BOE9 Export Import | Indian Organic & Spice Exporter",
    description:
      "BOE9 Export Import — trusted Indian exporter of organic products, spices, fresh produce, coffee, dairy and agri commodities for global buyers.",
    images: ["https://www.boe9.com/images/about.png"],
  },
  alternates: {
    canonical: "https://www.boe9.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const Page = () => {
  return (
    <main>
      <AboutUs />
    </main>
  );
};

export default Page;