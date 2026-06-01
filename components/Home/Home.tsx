"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";

import "./Home.css";

// ================= FEATURE CARD =================

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>

    <h3>{title}</h3>

    <p>{description}</p>
  </div>
);

// ================= PRODUCT CARD =================

interface Product {
  name: string;
  image: string;
  description: string;
  link: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({
  product,
  onClick,
}: ProductCardProps) => (
  <div className="product-card" onClick={onClick}>
    
    <div className="product-image-container">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="product-img"
      />
    </div>

    <h3>{product.name}</h3>

    <p>{product.description}</p>

    <button className="view-product-btn">
      View Product
    </button>

  </div>
);

// ================= HOME COMPONENT =================

const Home = () => {

  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/organic1.png",
      title: "Organic Products",
      description:
        "Pure, natural, and sustainable organic products for a healthier lifestyle.",
      link: "/products/organic-products",
      cta: "Explore More",
    },

    {
      image: "/images/millet.png",
      title: "Healthy Food Products - Gluten-Free Millets",
      description:
        "Fueling health naturally with gluten-free superfoods for a better tomorrow.",
      link: "/products/indian-super-foods",
      cta: "Shop Healthy",
    },

    {
      image: "/images/Spices.png",
      title: "Indian Homemade Spices",
      description:
        "Experience the authentic flavors of India with our homemade spices.",
      link: "/products/indian-spices",
      cta: "Shop Now",
    },

    {
      image: "/images/dehydrated.png",
      title: "Dehydrated Products & Powder",
      description:
        "Premium quality dehydrated vegetables and powders.",
      link: "/products/dehydrated-products",
      cta: "Buy Now",
    },
  ];

  const products: Product[] = [
    {
      name: "Organic Products",
      image: "/images/organic1.png",
      description:
        "Pure, natural, and sustainable organic products.",
      link: "/products/organic-products",
    },

    {
      name: "Indian Spices",
      image: "/images/Spices.png",
      description:
        "Authentic Indian homemade spices.",
      link: "/products/indian-spices",
    },

    {
      name: "Indian Super Foods/Gluten-Free Millets",
      image: "/images/millet.png",
      description:
        "Healthy gluten-free superfoods.",
      link: "/products/indian-super-foods",
    },
    {
      name: "Dehydrated Products & Powder",
      image: "/images/dehydrated.png",
      description:
        "Premium quality dehydrated vegetables and powders.",
      link: "/products/dehydrated-products",

    },
    {
      name: "Fresh Vegetables & Fruits",
      image: "/images/food.png",
      description:
        "Farm-fresh vegetables and fruits with vibrant colors and crisp textures.",
      link: "/products/food-and-fmcg-health-food",
    },

    {
      name: "Coffee & Cocoa Powder",
      image: "/images/coffeemain.png",
      description:
        "Rich and aromatic coffee powders.",
      link: "/products/coffee-and-cocoa-powder",
    },
  ];

  // ================= AUTO SLIDER =================

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide(
        (prev) => (prev + 1) % slides.length
      );

    }, 5000);

    return () => clearInterval(interval);

  }, [slides.length]);

  // ================= SLIDER FUNCTIONS =================

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % slides.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* SEO */}

      <Head>
        <title>
          BOE9 | Organic Products Exporter in India
        </title>

        <meta
          name="description"
          content="BOE9 exports organic products, spices, millets, dehydrated vegetables, and healthy foods."
        />

        <meta
          name="keywords"
          content="organic products India, spices exporter, millets"
        />
      </Head>

      {/* HOME */}

      <div className="home">

        {/* HERO SLIDER */}

        <section className="hero-slider">

          {slides.map((slide, index) => (

            <div
              key={index}
              className={`slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              <div className="slide-overlay">

                <div className="slide-content">

                  <h1 className="slide-title">
                    {slide.title}
                  </h1>

                  <p className="slide-description">
                    {slide.description}
                  </p>

                  <button
                    className="cta-button"
                    onClick={() =>
                      router.push(slide.link)
                    }
                  >
                    {slide.cta}
                  </button>

                </div>
              </div>
            </div>
          ))}

          {/* ARROWS */}

          <button
            className="slider-arrow prev-arrow"
            onClick={prevSlide}
          >
            ‹
          </button>

          <button
            className="slider-arrow next-arrow"
            onClick={nextSlide}
          >
            ›
          </button>

          {/* DOTS */}

          <div className="slider-dots">

            {slides.map((_, index) => (

              <button
                key={index}
                className={`dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />

            ))}

          </div>
        </section>
        {/* ================= ABOUT SECTION ================= */}

<section className="about-section">
  <div className="container">

    <div className="about-wrapper">

      {/* LEFT IMAGE */}

      <div className="about-image-box">
        <Image
          src="/images/about.png"
          alt="BOE9 Export Import"
          width={800}
          height={500}
          loading="eager"
          className="about-image"
        />
      </div>

      {/* RIGHT CONTENT */}

      <div className="about-content">

        <span className="about-badge">
          WELCOME TO Bumi Organic Exim
        </span>

        <h2>
          Bumi Organic Exim
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

        <button
          className="about-btn"
          onClick={() => router.push("/about")}
        >
          ABOUT US
        </button>

      </div>

    </div>

  </div>
</section>

        {/* PRODUCTS */}

        <section className="products-preview">

          <div className="container">

            <h2 className="section-title">
              Our Featured Products
            </h2>

            <div className="products-grid">

              {products.map((product, index) => (

                <ProductCard
                  key={index}
                  product={product}
                  onClick={() =>
                    router.push(product.link)
                  }
                />

              ))}

            </div>

            <div className="text-center">

              <button
                className="view-all-btn"
                onClick={() =>
                  router.push("/products")
                }
              >
                View All Products
              </button>

            </div>
          </div>
        </section>

       {/* WHY CHOOSE US */}

<section className="why-us-section">

  <div className="container">

    <h2 className="why-title">
      WHY BUMI ORGANIC EXIM?
    </h2>

    <div className="why-grid">

      <div className="why-card dark">
        <span className="why-number">01</span>
        <div className="why-icon">✅</div>

        <h3>Quality Assurance</h3>

        <p>
          International quality standards with proper
          sourcing, grading, packaging and inspection.
        </p>
      </div>

      <div className="why-card dark">
        <span className="why-number">02</span>
        <div className="why-icon">👨‍💼</div>

        <h3>Strong Network</h3>

        <p>
          Reliable suppliers, manufacturers and logistics
          partners across India.
        </p>
      </div>

      <div className="why-card dark">
        <span className="why-number">03</span>
        <div className="why-icon">⚙️</div>

        <h3>Customized Solutions</h3>

        <p>
          Private labeling, bulk packaging and sourcing
          solutions tailored to buyer requirements.
        </p>
      </div>

      <div className="why-card light">
        <span className="why-number">04</span>
        <div className="why-icon">🎯</div>

        <h3>Customer Focus</h3>

        <p>
          Building long-term relationships through trust,
          transparency and dedicated support.
        </p>
      </div>

      <div className="why-card light">
        <span className="why-number">05</span>
        <div className="why-icon">🌍</div>

        <h3>Global Reach</h3>

        <p>
          Supplying products to buyers across Asia,
          Europe, Africa, Middle East and North America.
        </p>
      </div>

      <div className="why-card light">
        <span className="why-number">06</span>
        <div className="why-icon">💰</div>

        <h3>Competitive Pricing</h3>

        <p>
          Premium quality products at competitive export
          prices without compromising standards.
        </p>
      </div>

    </div>

  </div>

</section>
      </div>
    </>
  );
};

export default Home;