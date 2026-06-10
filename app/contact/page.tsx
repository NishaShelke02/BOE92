import Contact from "@/components/Contact/Contact";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us | Bumi Organic Exim — Indian Organic Food Exporter",
  description:
    "Get in touch with Bumi Organic Exim for bulk organic food export enquiries. Located in Nashik, Maharashtra, India. Call, email or send an enquiry form.",
  keywords: [
    "contact Indian food exporter",
    "organic food export enquiry",
    "BOE9 contact",
    "Bumi Organic Exim Nashik",
    "Indian exporter contact",
  ],
  alternates: { canonical: "https://www.boe9.com/contact" },
  openGraph: {
    title: "Contact Bumi Organic Exim | Indian Organic Food Exporter",
    description:
      "Send an enquiry for bulk organic products, spices, millets and more from India.",
    url: "https://www.boe9.com/contact",
    siteName: "Bumi Organic Exim",
    type: "website",
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
            "@type": "Organization",
            name: "Bumi Organic Exim",
            url: "https://www.boe9.com",
            logo: "https://www.boe9.com/logo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nashik",
              addressRegion: "Maharashtra",
              addressCountry: "IN",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-9272131561",
                contactType: "sales",
                email: "info@boe9.com",
              },
              {
                "@type": "ContactPoint",
                telephone: "+91-9737305655",
                contactType: "export enquiry",
                email: "exports@boe9.com",
              },
            ],
          }),
        }}
      />
      <Contact />
    </>
  );
}