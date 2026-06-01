"use client";

import Link from "next/link";
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
    title: "🍲 Food & FMCG",
    description:
      "Ready-to-eat curries, biryanis, snacks and ready-to-cook mixes using responsibly sourced ingredients.",
  },

  {
    title: "🌱 Medicinal & Herbal Products",
    description:
      "Ashwagandha, giloy, moringa, neem, tulsi and herbal wellness ingredients for nutraceutical brands.",
  },

  {
    title: "🌾 Organic Fertilizer",
    description:
      "Organic fertilizers including vermicompost, bio-fertilizers and seaweed extracts to improve soil health naturally.",
  },
];

// ================= COMPONENT =================

const AboutUs = () => {
  return (
    <div className="about-container">

      {/* HERO SECTION */}

      <section className="about-hero">

        <motion.div
          className="container"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="hero-title">
            About BOE9
          </h1>

          <p className="hero-description">
            At <strong>BOE9</strong>,
            we believe sustainable sourcing creates
            stronger businesses, healthier communities,
            and a better future.
          </p>

        </motion.div>

      </section>
      {/* COMPANY OVERVIEW */}

<section className="company-overview">

  <div className="container">

    <div className="company-grid">

      <div className="company-image">

        <img
          src="/images/about.png"
          alt="BOE9 Export Import"
        />

      </div>

      <div className="company-content">

        <span className="company-badge">
          WELCOME TO BOE9 EXPORT IMPORT
        </span>

        <h2>
          BOE9 EXPORT IMPORT
        </h2>

        <p>
          BOE9 Export Import is a trusted exporter and sourcing
          partner from India, specializing in organic products,
          Indian spices, dehydrated vegetables, millets,
          fresh fruits & vegetables, coffee, cocoa powder,
          dairy products, and agricultural commodities.
        </p>

        <p>
          With a strong supplier network, quality-focused
          sourcing process, and reliable logistics support,
          we help global buyers procure premium Indian
          products with confidence and transparency.
        </p>

        <p>
          We serve importers, distributors, wholesalers,
          retailers, food manufacturers, and private label
          brands across the Middle East, Europe, Asia,
          Africa, and North America.
        </p>

      </div>

    </div>

  </div>

</section>




      {/* INTRO SECTION */}

      <section className="about-intro">

        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h2>
              Our Mission
            </h2>

            <p>
              BOE9 is your trusted export partner for
              organic products, spices, dehydrated foods,
              herbal ingredients, and sustainable agricultural products.
            </p>

            <p>
              We connect responsible Indian producers with
              global businesses seeking quality, authenticity,
              and ethical sourcing.
            </p>

          </motion.div>

        </div>

      </section>

      {/* EXPERTISE SECTION */}

      <section className="about-expertise">

        <div className="container">

          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.h2>

          <div className="expertise-grid">

            {expertiseData.map((item, index) => (

              <motion.div
                key={index}
                className="expertise-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}

      <section className="about-cta">

        <motion.div
          className="container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2>
            Ready To Collaborate?
          </h2>

          <p>
            Build a sustainable and trusted supply chain with BOE9.
          </p>

          <div className="cta-buttons">

            <Link
              href="/products"
              className="cta-button primary"
            >
              Explore Products
            </Link>

            <Link
              href="/ContactUs"
              className="cta-button secondary"
            >
              Contact Us
            </Link>

          </div>

        </motion.div>

      </section>

      {/* BACK TO TOP */}

      <button
        className="back-to-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        ↑
      </button>

    </div>
  );
};

export default AboutUs;