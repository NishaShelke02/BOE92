"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaStar,
  FaGlobe,
  FaTruck,
  FaCheckCircle,
  FaEye,
  FaUniversity,
  FaClock,
  FaHandshake,
  FaBoxOpen,
  FaShippingFast,
} from "react-icons/fa";

import "./Services.css";

// ================= TYPES =================

interface Benefit {
  icon: React.ReactNode;
  title: string;
  text: string;
}

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ================= DATA =================

const serviceFeatures: ServiceFeature[] = [
  {
    icon: <FaHandshake />,
    title: "Manufacturer Sourcing",
    description:
      "We find verified manufacturers and suppliers that match your exact product specifications, quality standards, and budget requirements.",
  },
  {
    icon: <FaStar />,
    title: "Price Negotiation",
    description:
      "We negotiate directly with suppliers and manufacturers to secure the most competitive pricing on your behalf.",
  },
  {
    icon: <FaTruck />,
    title: "End-to-End Logistics",
    description:
      "We arrange transportation and handle the full consignment — from factory pickup to final delivery at your destination.",
  },
  {
    icon: <FaShippingFast />,
    title: "Shipment-Only Service",
    description:
      "Already have a supplier? We provide standalone shipment and transportation services for your existing procurement.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Multi-Supplier Sourcing",
    description:
      "We source products from multiple suppliers across India simultaneously, consolidating your order into a single seamless shipment.",
  },
];

const benefits: Benefit[] = [
  {
    icon: <FaStar />,
    title: "Full Transparency",
    text: "Complete visibility into every step — from sourcing to delivery. No hidden costs, no surprises.",
  },
  {
    icon: <FaGlobe />,
    title: "Pan-India Sourcing",
    text: "We source multiple products from different states across India, giving you access to the widest supplier network.",
  },
  {
    icon: <FaEye />,
    title: "Personal Shipment Watch",
    text: "Dedicated oversight on your consignment from day one of manufacturing through to final delivery.",
  },
  {
    icon: <FaTruck />,
    title: "Logistics Negotiation",
    text: "We negotiate with shipping lines, logistics providers, and transporters to get you the best rates.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Assurance",
    text: "Strict quality checks at every stage ensure products and services meet your standards before dispatch.",
  },
  {
    icon: <FaUniversity />,
    title: "Banking Support",
    text: "We liaise with banks on your behalf for documentation, LC handling, and smooth financial transactions.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    text: "We commit to your timelines. Your consignment is tracked and managed to ensure punctual delivery.",
  },
];

// ================= ANIMATION VARIANTS =================

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

// ================= COMPONENT =================

const Services = () => {
  return (
    <div className="services-container">

      {/* ── PAGE HERO ── */}
      <section
        className="services-hero"
        aria-label="BOE9 Export Import Services"
      >
        <motion.div
          className="services-hero-inner container"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="services-badge">OUR SERVICES</span>

          <h1 className="services-hero-title">
            End-to-End Export &amp; Sourcing Services from India
          </h1>

          <p className="services-hero-desc">
            BOE9 Export Import acts as your dedicated sourcing agent in India —
            handling manufacturer discovery, price negotiation, quality
            assurance, logistics, and banking support so you can import with
            confidence.
          </p>
        </motion.div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section
        className="how-we-work"
        aria-label="How BOE9 Export Services Work"
      >
        <div className="container">

          <motion.div
            className="how-we-work-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>How We Work</h2>
            <p>
              As your sourcing agent, we manage every task required to fulfill
              your requirements — delivering your order to your exact
              specifications within your timeline.
            </p>
          </motion.div>

          <div className="how-we-work-grid">

            {/* Left — feature list */}
            <div className="services-features" role="list">
              {serviceFeatures.map((feature, index) => (
                <motion.article
                  key={index}
                  className="service-item"
                  role="listitem"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                >
                  <div
                    className="service-item-icon"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>

                  <div className="service-item-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Right — image */}
            <motion.div
              className="services-image-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/Services.png"
                alt="BOE9 Export Import sourcing and logistics services — Indian exporter"
                width={520}
                height={520}
                className="services-image"
                priority
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section
        className="benefits-section"
        aria-label="Benefits of Working With BOE9 Export Import"
      >
        <div className="container">

          <motion.div
            className="benefits-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose BOE9 as Your Indian Sourcing Agent</h2>
            <p>
              From transparent communication to on-time delivery, here is what
              sets BOE9 apart as your trusted export and sourcing partner.
            </p>
          </motion.div>

          <div
            className="benefits-grid"
            role="list"
          >
            {benefits.map((benefit, index) => (
              <motion.article
                key={index}
                className="benefit-card"
                role="listitem"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div
                  className="benefit-icon"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
<section
  className="services-cta"
  aria-label="Get Started With BOE9 Export Import"
>
  <motion.div
    className="container"
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <h2>Ready to Source from India With Zero Hassle?</h2>

    <p>
      Let BOE9 handle your end-to-end sourcing, logistics, and export
      documentation — so you can focus on growing your business.
    </p>

    <div className="cta-buttons">

      <Link
        href="/ContactUs"
        className="cta-button primary"
        aria-label="Contact BOE9 Export Import to start sourcing from India"
      >
        Get a Free Quote
      </Link>

      <Link
        href="/products"
        className="cta-button secondary"
        aria-label="Browse BOE9 organic and agri export products"
      >
        Browse Products
      </Link>

    </div>
  </motion.div>
</section>

    </div>
  );
};

export default Services;