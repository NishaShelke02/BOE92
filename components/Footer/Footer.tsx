"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}

        <div className="footer-section">

          <h3>BOE9</h3>

          <p>
            Documentation errors. Quality swings. Certification hurdles.
            These are the hidden costs that eat into your profits.
            Our value is eliminating these costs before they occur.
            We deliver a seamless, transparent, and dependable export process.
            Reach out to build a hassle-free import pipeline.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h4>Quick Links</h4>

          <ul className="footer-links">

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/Product">Products</Link>
            </li>

            <li>
              <Link href="/Services">Services</Link>
            </li>

            <li>
              <Link href="/AboutUs/our-company">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/AboutUs/Certification">
                Verify Us
              </Link>
            </li>

            <li>
              <Link href="/WhyUs">
                Why Us
              </Link>
            </li>

            <li>
              <Link href="/Blogs">
                Blog
              </Link>
            </li>

            <li>
              <Link href="/ContactUs">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

        {/* Products */}

        <div className="footer-section">

          <h4>Products</h4>

          <ul className="footer-links">

            <li>
              <Link href="/products/organic-products">
                Organic Products
              </Link>
            </li>

            <li>
              <Link href="/products/indian-super-foods">
                Indian Super Foods
              </Link>
            </li>

            <li>
              <Link href="/products/indian-spices">
                Indian Spices
              </Link>
            </li>

            <li>
              <Link href="/products/dehydrated-products">
                Dehydrated Products & Powder
              </Link>
            </li>

            <li>
              <Link href="/products/food-and-fmcg-health-food">
                Fresh Vegetables & Fruits
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact Info */}

        <div className="footer-section">

          <h4>Contact Us</h4>

          <p>
            📍 Nashik, Maharashtra, India
          </p>

          <p>
            ✉️{" "}
            <a href="mailto:info@boe9.com">
              info@boe9.com
            </a>
          </p>

          <p>
            ✉️{" "}
            <a href="mailto:exports@boe9.com">
              exports@boe9.com
            </a>
          </p>

          {/* WhatsApp 1 */}

          <p>

            <a
              href="https://wa.me/919272131561"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >

              <FaWhatsapp
                style={{
                  color: "#25D366",
                  marginRight: "8px",
                }}
              />

              +91 9272131561

            </a>

          </p>

          {/* WhatsApp 2 */}

          <p>

            <a
              href="https://wa.me/919737305655"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >

              <FaWhatsapp
                style={{
                  color: "#25D366",
                  marginRight: "8px",
                }}
              />

              +91 9737305655

            </a>

          </p>

        </div>
      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} BOE9.
          All rights reserved.
        </p>

        <div className="footer-bottom-links">

          <Link
            href="/privacy-policy"
            className="footer-link"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-of-service"
            className="footer-link"
          >
            Terms of Service
          </Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;