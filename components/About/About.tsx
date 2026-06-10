"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import "./About.css";

// ================= TYPES =================

interface ExpertiseItem {
  title: string;
  description: string;
}

// ================= DATA =================

const expertiseData: ExpertiseItem[] = [
  {
    title: "🌿 Organic Products (NPOP Certified)",
    description:
      "Our NPOP-certified organic range ensures authenticity from farm to shelf. From cold-pressed oils and natural sweeteners to certified organic grains and pulses.",
  },
  {
    title: "🍛 Indian Super Foods",
    description:
      "Makhana, millets, amla powder, turmeric latte mix, sesame seeds, jaggery products and more for healthy modern lifestyles.",
  },
  {
    title: "🌶️ Indian Spices",
    description:
      "Premium turmeric, cumin, coriander, garam masala, chaat masala and authentic Indian spices with traceability.",
  },
  {
    title: "🧄 Dehydrated Products & Powder",
    description:
      "Dehydrated onion, garlic, tomato, ginger and vegetable powders with long shelf life and consistent quality.",
  },
  {
    title: "🍲 Fresh Vegetables & Fruits",
    description:
      "Export-quality fresh vegetables and fruits sourced from trusted Indian farmers, delivered with care and reliability.",
  },
  {
    title: "☕ Coffee & Cocoa Powders",
    description:
      "Premium coffee and cocoa powders sourced from India's renowned growing regions, perfect for food manufacturers and private label brands.",
  },
  {
    title: "🐄 Dairy Products",
    description:
      "Fresh, high-quality dairy products sourced from trusted Indian farmers for export markets.",
  },
];

// ================= JSON-LD SCHEMA =================

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BOE9 Export Import",
  url: "https://www.boe9.com",
  logo: "https://www.boe9.com/images/logo.png",
  description:
    "BOE9 Export Import is a trusted Indian exporter specializing in organic products, Indian spices, dehydrated vegetables, fresh fruits, coffee, cocoa, dairy products, and agricultural commodities.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61580965360742",
    "https://www.instagram.com/bumi_organicexim",
    "https://www.linkedin.com/company/109393938",
  ],
  areaServed: ["Middle East", "Europe", "Asia", "Africa", "North America"],
  knowsAbout: [
    "NPOP Certified Organic Products Export",
    "Indian Spices Export",
    "Dehydrated Vegetables Supplier",
    "Fresh Fruits and Vegetables Export India",
    "Coffee and Cocoa Powder Export",
    "Dairy Products Export India",
    "Agricultural Commodities India",
  ],
};

// ================= COMPONENT =================

const AboutUs = () => {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <div className="about-container">

        {/* HERO SECTION */}
        <section
          className="about-hero"
          aria-label="About BOE9 Export Import"
        >
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              About BOE9 — Trusted Indian Exporter of Organic Products &amp; Spices
            </h1>

            <p className="hero-description">
              At <strong>Bumi Organic Exim</strong>, we believe sustainable
              sourcing creates stronger businesses, healthier communities, and a
              better future. We export premium{" "}
              <strong>
                organic products, Indian spices, fresh vegetables, coffee, dairy
                and agricultural commodities
              </strong>{" "}
              to global markets.
            </p>
          </motion.div>
        </section>

        {/* COMPANY OVERVIEW */}
        <section
          className="company-overview"
          aria-label="BOE9 Company Overview"
        >
          <div className="container">
            <div className="company-grid">

              <div className="company-image">
                <Image
                  src="/images/about.png"
                  alt="BOE9 Export Import — Indian organic products and spices exporter facility"
                  width={600}
                  height={450}
                  priority
                />
              </div>

              <div className="company-content">
                <span className="company-badge">
                  WELCOME TO BUMI ORGANIC EXIM
                </span>

                <h2>
                  Bumi Organic — India's Reliable Agri &amp; Organic Exporter
                </h2>

                <p>
                  Bumi Organic is a trusted exporter and sourcing partner
                  from India, specializing in{" "}
                  <strong>
                    organic products, Indian spices, dehydrated vegetables,
                    millets, fresh fruits &amp; vegetables, coffee, cocoa
                    powder, dairy products, and agricultural commodities
                  </strong>
                  .
                </p>

                <p>
                  With a strong supplier network, quality-focused sourcing
                  process, and reliable logistics support, we help global buyers
                  procure premium Indian products with confidence and
                  transparency.
                </p>

                <p>
                  We serve importers, distributors, wholesalers, retailers, food
                  manufacturers, and private label brands across the{" "}
                  <strong>
                    Middle East, Europe, Asia, Africa, and North America
                  </strong>
                  .
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section
          className="about-intro"
          aria-label="BOE9 Mission and Vision"
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2>
                Our Mission — Ethical Indian Agri Export &amp; Sustainable Sourcing
              </h2>

              <p>
                BOE9 is your trusted export partner for{" "}
                <strong>
                  organic products, spices, dehydrated foods, fresh produce,
                  coffee, dairy, and sustainable agricultural products from India
                </strong>
                .
              </p>

              <p>
                We connect responsible Indian producers with global businesses
                seeking quality, authenticity, and ethical sourcing — building
                supply chains that are transparent, reliable, and built for the
                long term.
              </p>
            </motion.div>
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section
          className="about-expertise"
          aria-label="BOE9 Product Export Expertise"
        >
          <div className="container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Export Expertise — Organic, Spices, Dairy &amp; More
            </motion.h2>

            <div className="expertise-grid" role="list">
              {expertiseData.map((item, index) => (
                <motion.article
                  key={index}
                  className="expertise-card"
                  role="listitem"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="about-cta"
          aria-label="Partner With BOE9 Export Import"
        >
          <motion.div
            className="container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>
              Ready To Source Premium Indian Products With a Trusted Exporter?
            </h2>

            <p>
              Build a sustainable and reliable supply chain with BOE9 Export
              Import — your partner for organic, spice, dairy, and agri exports
              from India to global markets.
            </p>

            <div className="cta-buttons">
              <Link
                href="/products"
                className="cta-button primary"
                aria-label="Explore BOE9 organic, spice and agri export products"
              >
                Explore Products
              </Link>

              <Link
                href="/ContactUs"
                className="cta-button secondary"
                aria-label="Contact BOE9 Export Import for sourcing and export inquiries"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>

        {/* BACK TO TOP */}
        <button
          className="back-to-top"
          aria-label="Scroll back to top of page"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>

      </div>
    </>
  );
};

export default AboutUs;