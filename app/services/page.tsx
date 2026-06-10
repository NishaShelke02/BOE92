import type { Metadata } from "next";
import Services from "@/components/Services/Services";


export const metadata: Metadata = {
  title: "Export & Sourcing Services from India | Bumi Organic Exim",
  description:
    "BOE9 offers end-to-end export and sourcing services from India — manufacturer discovery, price negotiation, quality assurance, logistics, and banking support.",
  keywords: [
    "Indian sourcing agent",
    "export services India",
    "sourcing agent India",
    "Indian food export logistics",
    "manufacturer sourcing India",
    "BOE9 export services",
  ],
  alternates: {
    canonical: "https://www.boe9.com/services",
  },
  openGraph: {
    title: "Export & Sourcing Services from India | Bumi Organic Exim",
    description:
      "End-to-end sourcing, logistics and export documentation services from India. Let BOE9 handle everything.",
    url: "https://www.boe9.com/services",
    siteName: "Bumi Organic Exim",
    images: [
      {
        url: "https://www.boe9.com/images/Services.png",
        width: 1200,
        height: 630,
        alt: "BOE9 Export Import Sourcing Services India",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Export & Sourcing Services from India | Bumi Organic Exim",
    description:
      "End-to-end sourcing, logistics and export documentation services from India.",
    images: ["https://www.boe9.com/images/Services.png"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Indian Export & Sourcing Services",
            provider: {
              "@type": "Organization",
              name: "Bumi Organic Exim",
              url: "https://www.boe9.com",
            },
            description:
              "End-to-end export and sourcing services from India including manufacturer discovery, price negotiation, quality assurance, logistics and banking support.",
            areaServed: [
              "Middle East",
              "Europe",
              "Asia",
              "Africa",
              "North America",
            ],
            serviceType: "Export Sourcing Agent",
            url: "https://www.boe9.com/services",
          }),
        }}
      />
      <Services />
    </>
  );
}